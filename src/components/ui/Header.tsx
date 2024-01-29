import {
	createStyledContext,
	styled,
	withStaticProperties,
	GetProps,
	getTokenValue,
} from "tamagui";
import { HStack, Stack } from "@/components/ui/Stacks";
import { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const HeaderContext = createStyledContext({
	noSafeArea: false as boolean,
});

// @ts-ignore
export const HeaderComponente = styled(HStack, {
	name: "Header",
	context: HeaderContext,
	width: "100%",
	px: "$md",
	pb: "$sm",
	alignItems: "center",
	justifyContent: "space-between",
	bg: "$accent",

	animation: "theme",
	enterStyle: {
		opacity: 0,
		y: -20,
	},
	exitStyle: {
		opacity: 0,
		y: -20,
	},
});

type HeaderComponenteProps = GetProps<typeof HeaderComponente>;

const HeaderFrame = ({ ...props }: HeaderComponenteProps) => {
	const { noSafeArea } = useContext(HeaderContext.context);
	const { top } = useSafeAreaInsets();
	const md = getTokenValue("$size.md");
	const paddingTop = noSafeArea ? md : top + md;

	return (
		<HeaderComponente
			pt={paddingTop}
			$platform-android={{
				pt: paddingTop + 20,
			}}
			{...props}
		/>
	);
};

export const HeaderCenter = styled(Stack, {
	name: "HeaderCenter",
	context: HeaderContext,
	width: "70%",
	centered: true,
});

export const HeaderRight = styled(HStack, {
	name: "HeaderRight",
	context: HeaderContext,
	width: "15%",
	justifyContent: "flex-end",
	gap: -15,
});

export const HeaderLeft = styled(HStack, {
	name: "HeaderLeft",
	context: HeaderContext,
	width: "15%",
	justifyContent: "flex-start",
	gap: -15,
});

export const Header = withStaticProperties(HeaderFrame, {
	Props: HeaderContext.Provider,
	Center: HeaderCenter,
	Right: HeaderRight,
	Left: HeaderLeft,
});
