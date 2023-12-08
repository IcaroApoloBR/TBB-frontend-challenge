import '../../styles/filters.scss'

interface CategoryFilterInterface {
    uniqueCategories: { id: string; name: string; count: number }[];
    selectedCategories: string[];
    onCategoryToggle: (categoryId: string) => void;
}

const CategoryFilter = ({ uniqueCategories, selectedCategories, onCategoryToggle }: CategoryFilterInterface) => {
    return (
        <div className="category-filter">
            <label className="legend">Categorias:</label>
            {uniqueCategories.map((category) => (
                <div key={category.id} className="category-item">
                    <input
                        type="checkbox"
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => onCategoryToggle(category.id)}
                    />
                    <label htmlFor={category.id}>
                        {category.name} (<b>{category.count}</b>)
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CategoryFilter;
