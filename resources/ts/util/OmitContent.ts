const OmitContent = (content: string) => {
    const maxLength_char = 40;
    if (content.length > maxLength_char) {
        return content.substr(0, maxLength_char) + '...';
    }
    return content;
}

export default OmitContent;