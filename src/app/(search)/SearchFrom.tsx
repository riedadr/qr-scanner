"use client";

import React, { FC, useState } from "react";
import CustomQrScanner from "./CustomQrScanner";

const SearchFrom: FC = () => {
	const [code, setCode] = useState<string>("");
	return (
		<div>
			<CustomQrScanner
				config={{ fps: 10, qrbox: 250 }}
				onScan={(scannedCode) => setCode(scannedCode)}
			/>
			<div>
				<form action="">
					<input
						className="text-black"
						name="code"
						id="codeInput"
						type="text"
						value={code}
						onChange={(e) => setCode(e.currentTarget.value)}
					/>
				</form>
			</div>
		</div>
	);
};

export default SearchFrom;
