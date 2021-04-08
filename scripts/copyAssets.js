import { copySync } from "fs-extra";
import { resolve, join } from "path";

import viteConfig from "../vite.config.js";
import { SITE_BRAND_ASSETS } from "../src/data/site.js";

let destPath = resolve(viteConfig.publicDir);

export default function copyAssets(assetType) {
	if (assetType === "favicon" || assetType === "logo") {
		destPath = join(destPath, "images", `${assetType}.svg`);
	} else if (assetType === "fonts") {
		destPath = join(destPath, assetType);
	} else {
		let acceptedValues = Object.keys(SITE_BRAND_ASSETS)
			.map((keyName) => {
				return `"${keyName.replace("Path", "")}"`;
			})
			.join(", ");

		throw new Error(
			`Unknown asset name "${assetType}". Those values are accepted: ${acceptedValues}.`
		);
	}

	const assetPath = resolve(
		"node_modules",
		SITE_BRAND_ASSETS[`${assetType}Path`]
	);

	console.log(`Copying...\nfrom: ${assetPath}\nto: ${destPath}`);

	try {
		copySync(assetPath, destPath);
	} catch (error) {
		throw new Error("Something went wrong with copying.");
	}

	console.log("Done!");
}

copyAssets(process.argv[2]);
