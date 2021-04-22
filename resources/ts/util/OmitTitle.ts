const OmitTitle = (content: string) => {
    const maxLength_char = 6;
    if (content.length > maxLength_char) {
        return content.substr(0, maxLength_char) + '...';
    }
    return content;
}

export default OmitTitle;