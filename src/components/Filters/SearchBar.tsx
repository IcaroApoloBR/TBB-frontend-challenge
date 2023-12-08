interface SearchBarInterface {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarInterface) => {
    return (
        <input
            type="text"
            placeholder="Buscar por nome"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
};

export default SearchBar;