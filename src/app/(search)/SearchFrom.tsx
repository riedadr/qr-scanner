"use client";

import React, { FC, useRef, useState } from "react";
import CustomQrScanner from "./CustomQrScanner";
import { useRouter } from "next/navigation";

const SearchFrom: FC = () => {
	const codeInput = useRef<null | HTMLInputElement>(null);
	const router = useRouter();

	const setCode = (e: string) => {
		console.log(e);

		if (codeInput.current) {
			codeInput.current.value = e;
		}
	};

	const submitCode = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (codeInput.current && codeInput.current.value) {
			const code = codeInput.current.value;
			console.log("submit", code);
			router.push(`/${code}`);
		}
	};

	return (
		<div className="flex flex-wrap gap-8">
			<div className="w-full h-96 max-w-sm bg-slate-800 p-4 rounded-xl">
				<CustomQrScanner
					config={{ fps: 10, aspectRatio: 1 }}
					onScan={(scannedCode) => setCode(scannedCode)}
				/>
			</div>
			<form
				className="flex flex-col justify-between min-h-[150px] w-full md:w-fit bg-slate-800 p-4 rounded-xl"
				onSubmit={submitCode}
			>
				<div>
					<label htmlFor="codeInput">Code</label>
					<input
						className="text-black w-full rounded px-2"
						name="code"
						id="codeInput"
						type="text"
						ref={codeInput}
					/>
				</div>
				<button className=" h-8 bg-green-500 rounded-xl" type="submit">
					Suchen
				</button>
			</form>
		</div>
	);
};

export default SearchFrom;
