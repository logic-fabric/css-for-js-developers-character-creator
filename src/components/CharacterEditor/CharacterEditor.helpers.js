import {
  NUMBER_OF_BODIES,
  NUMBER_OF_HEADS,
  NUMBER_OF_FACES,
  NUMBER_OF_ACCESSORIES,
  SKIN_COLORS,
  CLOTHES_COLORS,
} from "../../constants";
import { padIntegerWithLeadingZeros, range } from "../../utils";

export const bodyOptions = range(NUMBER_OF_BODIES).map((index) => {
  return {
    id: index,
    label: `Body ${index + 1}`,
    children: padIntegerWithLeadingZeros(index + 1),
  };
});

export const headOptions = range(NUMBER_OF_HEADS).map((index) => {
  return {
    id: index,
    label: `Head ${index + 1}`,
    children: padIntegerWithLeadingZeros(index + 1),
  };
});

export const faceOptions = range(NUMBER_OF_FACES).map((index) => {
  return {
    id: index,
    label: `Face ${index + 1}`,
    children: padIntegerWithLeadingZeros(index + 1),
  };
});

export const accessoryOptions = range(NUMBER_OF_ACCESSORIES).map((index) => {
  return {
    id: index,
    label: `Accessory ${index + 1}`,
    children: padIntegerWithLeadingZeros(index + 1),
  };
});

export const skinColorOptions = SKIN_COLORS.map(({ label, color }) => {
  return {
    id: color,
    label,
    color,
    children: null,
  };
});

export const clothesColorOptions = CLOTHES_COLORS.map(({ label, color }) => {
  return {
    id: color,
    label,
    color,
    children: null,
  };
});
