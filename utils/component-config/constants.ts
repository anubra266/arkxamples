export enum Framework {
  REACT = "REACT",
  VUE_JSX = "VUE_JSX",
  VUE_SFC = "VUE_SFC",
  SOLID = "SOLID",
}

export enum StyleSolution {
  VANILLA_CSS = "VANILLA_CSS",
  // PANDA_CSS = "PANDA_CSS",
  // TAILWIND = "TAILWIND",
}

export enum StyleType {
  INLINE = "INLINE",
  ABSTRACTED = "ABSTRACTED",
  SCOPED = "SCOPED",
  RECIPE = "RECIPE",
}

export const FRAMEWORKS = {
  [Framework.REACT]: { label: "React", value: Framework.REACT },
  // [Framework.SOLID]: { label: "Solid JS", value: Framework.SOLID },
  // [Framework.VUE_JSX]: { label: "Vue JSX", value: Framework.VUE_JSX },
  // [Framework.VUE_SFC]: { label: "Vue SFC", value: Framework.VUE_SFC },
};

export const STYLE_SOLUTIONS = {
  [StyleSolution.VANILLA_CSS]: {
    label: "Vanilla CSS",
    value: StyleSolution.VANILLA_CSS,
    types: [
      {
        label: "Scoped Styles",
        value: StyleType.SCOPED,
      },
    ],
  },
  // [StyleSolution.PANDA_CSS]: {
  //   label: "Panda CSS",
  //   value: StyleSolution.PANDA_CSS,
  //   types: [
  //     {
  //       label: "Inline Styles",
  //       value: StyleType.INLINE,
  //     },
  //     {
  //       label: "Abstracted Styles",
  //       value: StyleType.ABSTRACTED,
  //     },
  //     {
  //       label: "Recipes",
  //       value: StyleType.RECIPE,
  //     },
  //   ],
  // },
  // [StyleSolution.TAILWIND]: {
  //   label: "Tailwind",
  //   value: StyleSolution.TAILWIND,
  //   types: [
  //     {
  //       label: "Inline Style",
  //       value: StyleType.INLINE,
  //     },
  //   ],
  // },
};

export const defaultConfig = {
  framework: Framework.REACT,
  styleSolution: StyleSolution.VANILLA_CSS,
  styleType: StyleType.SCOPED,
};
