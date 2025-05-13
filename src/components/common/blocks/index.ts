import { Block as BaseBlock } from "./Block";
import { BlockButton } from "./BlockButton";
import { BlockExpand } from "./BlockExpand";

export const Block = BaseBlock as typeof BaseBlock & {
  Button?: typeof BlockButton;
  Expand?: typeof BlockExpand;
};

Block.Button = BlockButton;
Block.Expand = BlockExpand;
