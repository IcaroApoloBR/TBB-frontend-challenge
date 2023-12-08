interface CategoryFilterInterface {
    uniqueCategories: { id: string; name: string; count: number }[];
    selectedCategories: string[];
    onCategoryToggle: (categoryId: string) => void;
}

const CategoryFilter = ({ uniqueCategories, selectedCategories, onCategoryToggle }: CategoryFilterInterface) => {
    return (
        <div>
            <label>Categorias:</label>
            {uniqueCategories.map((category) => (
                <div key={category.id}>
                    <input
                        type="checkbox"
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => onCategoryToggle(category.id)}
                    />
                    <label htmlFor={category.id}>
                        {category.name} ({category.count} itens)
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CategoryFilter;
