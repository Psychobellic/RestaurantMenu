import React from "react";
import NextLink from "next/link";

export default function Link({ ...props }) {
	return (
		<NextLink
			href={{ pathname: props.href, query: props.index }}
			as={props.as}
			passHref>
			<a className={props.className} onClick={props.handleClick}>
				{props.children}
			</a>
		</NextLink>
	);
}
