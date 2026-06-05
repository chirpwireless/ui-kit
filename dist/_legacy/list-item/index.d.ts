import { AccordionItem } from './components/accordion';
import { BaseListItem } from './components/base-list-item';
type ListItemType = typeof BaseListItem & {
    Accordion: typeof AccordionItem;
};
declare const ListItem: ListItemType;
export default ListItem;
