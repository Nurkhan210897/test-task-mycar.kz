export const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-En", { dateStyle: "long" }).format(
        new Date(date)
    );
};