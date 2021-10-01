import "../../styles/layout.module.scss";

import React from "react";
import NextLink from "next/link";

export default function Link({ ...props }) {
	return (
		<NextLink
			href={{ pathname: props.href, query: props.index }}
			as={props.as}
			passHref>
			<div className={props.className} onClick={props.handleClick}>
				{props.children}
			</div>
		</NextLink>
	);
}
