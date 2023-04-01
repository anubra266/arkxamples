export const replaceClassnames = (
  code: string,
  styles: Record<string, string>
) => {
  Object.entries(styles).forEach(([key, classes]) => {
    code = code.replaceAll(key, classes);
  });
  return code;
};
