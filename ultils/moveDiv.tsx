const moveToDiv = (id: string) => {
    try {
        document.querySelector(`[id='${id}']`)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    } catch {}
};

export default moveToDiv;
