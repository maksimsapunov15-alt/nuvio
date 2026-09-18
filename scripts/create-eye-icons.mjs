import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

async function main() {
  const root = fileURLToPath(new URL("../", import.meta.url));
  const source = path.join(root, "public", "eye-logo.png");
  const icon = await sharp(source).resize(128, 128).png().toBuffer();
  await fs.writeFile(path.join(root, "src/app/icon.svg"),
    `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><image width="128" height="128" href="data:image/png;base64,${icon.toString("base64")}"/></svg>\n`);
  await sharp(source).resize(180, 180).png().toFile(path.join(root, "public/apple-eye.png"));
  // ICO with a PNG payload, supported by modern browsers and Windows.
  const png = await sharp(source).resize(32, 32).png().toBuffer();
  const header = Buffer.alloc(22);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header[6] = 32;
  header[7] = 32;
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(22, 18);
  await fs.writeFile(path.join(root, "src/app/favicon.ico"), Buffer.concat([header, png]));
  console.log("Created eye SVG favicon, ICO fallback and Apple touch icon.");
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
