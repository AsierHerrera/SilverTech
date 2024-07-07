import { ButtonHeroPrimary } from ".";

export default {
  title: "Components/ButtonHeroPrimary",
  component: ButtonHeroPrimary,
  argTypes: {
    property1: {
      options: ["variant-2", "variant-3", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    linkTextClassName: {},
    text: "Crear tu cuenta gratis",
  },
};
