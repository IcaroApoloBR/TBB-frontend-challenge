interface MaskTextInterface {
    text: string;
    maxLength: number;
}

const MaskText = ({ text, maxLength }:MaskTextInterface) => {
    const maskText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) {
            return text;
        }

        return `${text.slice(0, maxLength)}...`;
    };

    return <>{maskText(text, maxLength)}</>;
};

export default MaskText;