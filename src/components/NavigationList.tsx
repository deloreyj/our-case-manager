import React, { Key, ReactText } from "react";
import { ListBox, Item } from "@adobe/react-spectrum";

export interface NavigationListItem {
  id: string;
  name: string;
}

interface NavigationListProps {
  items: Array<NavigationListItem>;
  onItemClick: (item: NavigationListItem) => any;
}
function NavigationList({ items, onItemClick }: NavigationListProps) {
  return (
    <ListBox
      items={items}
      selectionMode="single"
      onSelectionChange={(keys: "all" | Set<Key>) => {
        const clickedItemId: ReactText = [...keys][0];
        const clickedNavItem = items.find((itm) => itm.id === clickedItemId);

        onItemClick(clickedNavItem!);
        return clickedNavItem;
      }}
    >
      {(item) => <Item aria-label={item.name}>{item.name}</Item>}
    </ListBox>
  );
}

export default NavigationList;
