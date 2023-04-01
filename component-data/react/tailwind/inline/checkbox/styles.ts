export const styles = {
  rootStyles: `flex items-center cursor-pointer gap-2 mt-3 /*You don't need this, just here to move the child checkboxes to the right */ [&~div:not([data-scope='checkbox'])]:ml-3`,
  labelStyles: "inline-flex flex-column gap-0.5",
  controlStyles:
    "items-center bg-[#fafaf9] border-[#d7d3d0] rounded-md border border-solid flex h-[30px] w-[30px] justify-center dark:bg-[#141313] dark:border-[#3e3e3e] data-[focus]:shadow-[0_0_0_4px_#ede9fe] dark:data-[focus]:shadow-[0_0_0_4px_#292524] data-[hover]:border-[#a9a29d] dark:data-[hover]:border-[#44403c] data-[checked]:bg-[#60a5fa] data-[checked]:border-[#60a5fa] data-[checked]:text-white dark:data-[checked]:bg-[#60a5fa] dark:data-[checked]:border-[#60a5fa] dark:data-[checked]:text-black data-[indeterminate]:border-[#60a5fa] data-[indeterminate]:text-[#60a5fa]",
};
