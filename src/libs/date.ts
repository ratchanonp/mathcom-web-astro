export const monthString = (date: Date) => {
	return date.toLocaleString("default", { month: "short" });
};

export const dateString = (date: Date) => {
	return date.getDate();
};
