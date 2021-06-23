#!/usr/bin/env node

import glob from "glob";
import { basename, dirname, join } from "node:path";
import sharp from "sharp";

glob(join(process.cwd(), "/static", "**/*.jpg"), (error, JPGfiles) => {
	if (error) {
		throw new Error(error);
	} else {
		JPGfiles.forEach(async (file) => {
			const dirPath = dirname(file);
			const fileName = basename(file, ".jpg");
			const outputName = `${fileName}.webp`;
			const outputPath = join(dirPath, outputName);

			await sharp(file)
				.webp({
					// quality: 100,
					// lossless: true,
				})
				.toFile(outputPath);

			console.log(`Converted "${file}" to: file:/${outputPath}`);
		});
	}
});
