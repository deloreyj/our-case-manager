import React from "react";
import { Flex, View, Text } from "@adobe/react-spectrum";
import Folder from "@spectrum-icons/workflow/Folder";
import User from "@spectrum-icons/workflow/User";
import Globe from "@spectrum-icons/workflow/Globe";

type MenuItemType = "cases" | "people" | "locations";

interface MenuItemProps {
  label: string;
  type: MenuItemType;
}

function MenuItem({ label, type }: MenuItemProps) {
  return <MenuItemBase label={label} Icon={MenuIcons[type]} />;
}

const MenuIcons: { [key in MenuItemType]: (props: any) => JSX.Element } = {
  cases: Folder,
  people: User,
  locations: Globe,
};

interface MenuItemBaseProps {
  label: string;
  Icon: (props: any) => JSX.Element;
}
function MenuItemBase({ Icon, label }: MenuItemBaseProps) {
  return (
    <View padding="size-100">
      <Flex direction="row" gap="size-100">
        <Icon size="S" />
        <Text>{label}</Text>
      </Flex>
    </View>
  );
}

export default MenuItem;
