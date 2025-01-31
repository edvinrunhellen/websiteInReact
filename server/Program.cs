var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

List<Product> products = new()
{
    new Product("Pikachu", "#F5EDCE", "https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_35.png", "Electric", 60, "Thunder Shock", "$15.99", "https://www.pokemon.com/us/pokedex/pikachu"),
    new Product("Charizard", "#89C4E1", "https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_11.png", "Fire", 150, "Fire Spin", "$199.99", "https://www.pokemon.com/us/pokedex/charizard"),
    new Product("Bulbasaur", "#58287F", "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH35/SWSH35_EN_1.png", "Grass", 45, "Vine Whip", "$5.99", "https://www.pokemon.com/us/pokedex/bulbasaur"),
    new Product("Squirtle", "#F8D210", "https://assets.pokemon.com/assets/cms2/img/cards/web/SM9/SM9_EN_23.png", "Water", 50, "Water Gun", "$7.49", "https://www.pokemon.com/us/pokedex/squirtle"),
    new Product("Gengar", "#D72638", "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH45/SWSH45_EN_57.png", "Ghost/Poison", 110, "Shadow Ball", "$29.99", "https://www.pokemon.com/us/pokedex/gengar"),
    new Product("Eevee", "#1B998B", "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH45/SWSH45_EN_48.png", "Normal", 70, "Tackle", "$4.99", "https://www.pokemon.com/us/pokedex/eevee"),
    new Product("Mewtwo", "#FF6F61", "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH35/SWSH35_EN_10.png", "Psychic", 130, "Psystrike", "$149.99", "https://www.pokemon.com/us/pokedex/mewtwo"),
    new Product("Lucario", "#8E44AD", "https://assets.pokemon.com/assets/cms2/img/cards/web/SM10/SM10_EN_126.png", "Fighting/Steel", 120, "Aura Sphere", "$12.99", "https://www.pokemon.com/us/pokedex/lucario"),
    new Product("Gyarados", "#3498DB", "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH35/SWSH35_EN_30.png", "Water/Flying", 150, "Dragon Rage", "$24.99", "https://www.pokemon.com/us/pokedex/gyarados")
};

List<List<Product>> orders = new();

// endpoints for products
app.MapGet("/api/products", GetProducts);

// endpoints for orders
app.MapGet("/api/orders", GetOrders);
app.MapPost("/api/orders", PostOrder);

app.Run();


async Task<List<Product>>
GetProducts()
{

    return products;
}

async Task
PostOrder(List<Product> order)
{
    orders.Add(order);
    return;
}

async Task<List<List<Product>>>
GetOrders()
{
    return orders;
}

record Product(string Name, string Background, string Image, string Type, int Hp, string Attack, string Price, string Link);