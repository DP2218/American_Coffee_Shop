// ==========================
// FULL MENU DATA
// Sourced from American Coffee Shop's Grubhub / Allmenus listing
// ==========================

const MENU_DATA = [
    {
        category: "Traditional Egg Breakfast",
        note: "Served with home fries or grits and toast. (#4, #6 and #7 excluded.) Egg white for an additional charge.",
        items: [
            { name: "Eggs Any Style", desc: "Prepared the way you like.", price: "6.99" },
            { name: "Eggs with Meat", desc: "Bacon, ham or sausage.", price: "10.99" },
            { name: "#4. Egg, Pancake and Meat", desc: "Bacon, sausage or ham.", price: "8.99" },
            { name: "#6. Egg, Pancake, Bacon and Sausage", desc: "", price: "9.99" },
            { name: "#7. Two Eggs, 2 Pancakes with Meat", desc: "2 bacon, sausage or ham.", price: "11.99" },
            { name: "#7. Two Eggs, 2 French Toast with Meat", desc: "2 bacon, sausage or ham.", price: "11.99" }
        ]
    },
    {
        category: "Deluxe Egg Breakfast",
        note: "Served with home fries or grits and toast. Egg whites for additional charge.",
        items: [
            { name: "2 Eggs and Country Fried Chicken", desc: "Breaded or battered crispy chicken.", price: "13.99" },
            { name: "2 Eggs and Country Fried Steak", desc: "Flour dusted and fried.", price: "13.99" },
            { name: "2 Eggs and New York Steak", desc: "Boneless strip steak.", price: "14.99" },
            { name: "2 Eggs and Ham Steak", desc: "Short loin.", price: "12.99" },
            { name: "2 Eggs and Corned Beef Hash", desc: "Salt cured beef, potatoes and onions.", price: "11.99" },
            { name: "2 Eggs and Chopped Steak", desc: "Seasoned raw meat.", price: "11.99" },
            { name: "2 Eggs and Smoked Sausage", desc: "", price: "11.99" },
            { name: "2 Eggs and Pork Chop", desc: "Thick cut of meat from a pig, cut from the spine.", price: "11.99" }
        ]
    },
    {
        category: "From the Griddle",
        note: "",
        items: [
            { name: "Single Pancake", desc: "", price: "3.99" },
            { name: "Stack of Pancakes", desc: "", price: "7.99" },
            { name: "Waffle", desc: "", price: "5.99" },
            { name: "French Toast", desc: "", price: "9.99" }
        ]
    },
    {
        category: "More Breakfast Favorites",
        note: "",
        items: [
            { name: "Eggs Benedict", desc: "2 poached eggs, Canadian bacon on English muffin with hollandaise sauce.", price: "12.99" },
            { name: "Spinach Eggs Benedict", desc: "Muffin, egg, ham and hollandaise sauce.", price: "12.99" },
            { name: "Turkey Eggs Benedict", desc: "Muffin, egg, ham and hollandaise sauce.", price: "12.99" },
            { name: "Irish Eggs Benedict", desc: "Muffin, egg, ham and hollandaise sauce.", price: "12.99" },
            { name: "Biscuit and Gravy", desc: "Thick savory stock made from meat juice.", price: "9.99" },
            { name: "Country Scramble", desc: "Biscuit, sausage gravy, 2 scrambled eggs and home fries.", price: "11.99" },
            { name: "Oatmeal", desc: "Porridge.", price: "4.99" }
        ]
    },
    {
        category: "Breakfast Sandwiches",
        note: "",
        items: [
            { name: "Egg Muffin Sandwich", desc: "Canadian bacon, egg and cheese on an English muffin.", price: "8.99" },
            { name: "House Special Sandwich on Kaiser Roll", desc: "Ham, egg and provolone cheese.", price: "8.99" },
            { name: "2 Fried Eggs on Toast Sandwich", desc: "", price: "5.99" },
            { name: "2 Fried Eggs on Toast Sandwich with Cheese", desc: "Served with bacon, ham, sausage and cheese.", price: "8.99" },
            { name: "Meat Lover's Sandwich", desc: "Ham, bacon, sausage, eggs and cheese.", price: "10.99" },
            { name: "Western Sandwich", desc: "Ham, onions, green peppers and cheese.", price: "8.99" },
            { name: "Bagel Sandwich", desc: "Includes bacon, egg and cheese.", price: "8.99" }
        ]
    },
    {
        category: "Tasty Omelets",
        note: "Served with home fries or grits and toast. Egg white and cheese for additional charge.",
        items: [
            { name: "Plain Omelet", desc: "", price: "8.99" },
            { name: "American Cheese Omelet", desc: "", price: "9.99" },
            { name: "Swiss Cheese Omelet", desc: "", price: "9.99" },
            { name: "3 Cheese Omelet", desc: "American, Swiss and provolone.", price: "10.99" },
            { name: "Feta Cheese and Tomato Omelet", desc: "", price: "10.99" },
            { name: "Denver Omelet", desc: "Tomato and onion.", price: "10.99" },
            { name: "Farmer's Omelet", desc: "Bacon and tomato.", price: "10.99" },
            { name: "Greek Omelet", desc: "Tomato, onion and feta.", price: "10.99" },
            { name: "Ham Omelet", desc: "", price: "11.99" },
            { name: "Bacon Omelet", desc: "", price: "11.99" },
            { name: "Sausage Omelet", desc: "", price: "11.99" },
            { name: "Irish Omelet", desc: "Corned beef hash.", price: "11.99" },
            { name: "Meat Lovers Omelet", desc: "Bacon, ham and sausage.", price: "12.99" },
            { name: "Feta and Spinach Omelet", desc: "", price: "10.99" },
            { name: "Mushroom Swiss and American Cheese Omelet", desc: "", price: "10.99" },
            { name: "Veggie Omelet", desc: "", price: "11.99" },
            { name: "Western Omelet", desc: "Ham, onion and green pepper.", price: "10.99" },
            { name: "House Omelet", desc: "Spinach, mushroom, cheese, onion and gyro meat.", price: "10.99" },
            { name: "Philly Cheese Omelet", desc: "Thin sliced steak, onions, green peppers, mushroom and provolone.", price: "10.99" },
            { name: "Turkey and Spinach Omelet", desc: "", price: "10.99" }
        ]
    },
    {
        category: "Spanish Corner",
        note: "Served with home fries, excluding Cuban toast. Add-ons for additional charge.",
        items: [
            { name: "Spanish Omelet", desc: "Ham, tomatoes, onions, green peppers.", price: "10.99" },
            { name: "Perico", desc: "Scrambled eggs, ham, peppers, onions and tomatoes.", price: "10.99" },
            { name: "Huevos Rancheros", desc: "", price: "10.99" },
            { name: "Breakfast Burrito", desc: "Ham, tomatoes, onions, green peppers and American cheese.", price: "10.99" },
            { name: "Sweet Plantains Omelet", desc: "", price: "10.99" },
            { name: "Cuban Eggs Benedict", desc: "Shredded pork over Cuban bread with ham, Swiss cheese, pickles, mustard and 2 poached eggs, smothered in hollandaise.", price: "14.99" },
            { name: "Cuban Toast with Cream Cheese", desc: "", price: "5.99" }
        ]
    },
    {
        category: "Side Orders",
        note: "",
        items: [
            { name: "Sausage Gravy", desc: "", price: "3.99" },
            { name: "Sausage", desc: "", price: "6.99" },
            { name: "Bacon", desc: "", price: "6.99" },
            { name: "Ham", desc: "", price: "6.99" },
            { name: "Ham Steak", desc: "", price: "8.99" },
            { name: "Corn Beef Hash", desc: "", price: "8.99" },
            { name: "Smoked Sausage", desc: "", price: "8.99" },
            { name: "New York Steak", desc: "", price: "9.99" },
            { name: "Buttered Toast", desc: "", price: "1.99" },
            { name: "English Muffin", desc: "", price: "2.49" },
            { name: "Buttered Kaiser Roll", desc: "", price: "2.49" },
            { name: "Bagel of Choice and Butter", desc: "", price: "3.29" },
            { name: "Home Fries", desc: "", price: "3.99" },
            { name: "Grits", desc: "", price: "3.99" },
            { name: "Bagel and Cream Cheese", desc: "", price: "3.99" },
            { name: "Fresh Banana", desc: "Whole or sliced.", price: "1.99" }
        ]
    },
    {
        category: "Kids Menu",
        note: "",
        items: [
            { name: "Kids Mickey Mouse Pancake", desc: "", price: "3.99" },
            { name: "Kids Chicken Tenders with Fries", desc: "", price: "8.99" },
            { name: "Kids Peanut Butter and Jelly Sandwich", desc: "", price: "3.99" },
            { name: "Kids Grilled Cheese Sandwich", desc: "", price: "4.99" }
        ]
    },
    {
        category: "Burgers and Melts",
        note: "Served with lettuce, tomato, onion and french fries (excluding the patty melt). Choice of mayo or mustard.",
        items: [
            { name: "Hamburger", desc: "Grilled or fried patty on a bun.", price: "10.99" },
            { name: "Cheeseburger", desc: "Grilled or fried patty with cheese on a bun.", price: "11.99" },
            { name: "Bacon Cheeseburger", desc: "Hamburger topped with cheese and bacon.", price: "11.99" },
            { name: "Mushroom Swiss Burger", desc: "Burger topped with a mild cheese.", price: "11.99" },
            { name: "Patty Melt", desc: "Grilled sandwich with beef patty, cheese and onions.", price: "11.99" },
            { name: "Ham and Swiss Melt", desc: "Hot sandwich with cheese and protein.", price: "11.99" },
            { name: "Turkey and Bacon Melt", desc: "Hot burger with cheese and protein.", price: "11.99" }
        ]
    },
    {
        category: "Hot Sandwiches",
        note: "Served with potato salad or home fries. Fries for additional charge.",
        items: [
            { name: "Grilled American Sandwich", desc: "", price: "7.99" },
            { name: "Grilled Cheese with Bacon Sandwich", desc: "", price: "9.99" },
            { name: "Grilled Chicken Breast Sandwich", desc: "Lettuce, tomato, grilled onions and mayo.", price: "11.99" },
            { name: "Steak Sandwich", desc: "Lettuce, tomato, grilled onions and mayo.", price: "11.99" },
            { name: "Cuban Sandwich", desc: "Ham, roast pork, Swiss cheese, pickles and mustard.", price: "12.99" },
            { name: "Pan con Lechon Sandwich", desc: "Shredded pork with grilled onions and provolone cheese.", price: "11.99" },
            { name: "Fish Sandwich", desc: "Lettuce, tomato and onions.", price: "9.99" }
        ]
    },
    {
        category: "Cold Sandwiches",
        note: "Served with potato salad or home fries. Fries for additional charge.",
        items: [
            { name: "BLT Sandwich", desc: "Bacon, lettuce and tomato.", price: "9.99" },
            { name: "Turkey Sandwich", desc: "Lettuce, tomato and mayo.", price: "9.99" },
            { name: "Roast Beef Sandwich", desc: "Lettuce, tomato and mustard.", price: "9.99" },
            { name: "Ham Sandwich", desc: "Lettuce, tomato, mayo and mustard.", price: "9.99" },
            { name: "Turkey and Bacon Sandwich", desc: "Lettuce, tomato and mayo.", price: "10.99" },
            { name: "Roast Beef and Turkey Sandwich", desc: "Lettuce, tomato, mayo and mustard.", price: "10.99" },
            { name: "Roast Beef Turkey and Ham Sandwich", desc: "Lettuce, tomato, onions, mayo and mustard.", price: "11.99" }
        ]
    },
    {
        category: "Delicious Club Sandwiches",
        note: "Served with potato salad or home fries. Fries for additional charge.",
        items: [
            { name: "Turkey Club", desc: "Lettuce, tomato and bacon.", price: "11.99" },
            { name: "Ham Club", desc: "Lettuce, tomato, Swiss cheese and bacon.", price: "11.99" },
            { name: "Roast Beef Club", desc: "Lettuce, tomato and bacon.", price: "11.99" },
            { name: "Chicken Club", desc: "Lettuce, tomato and bacon.", price: "11.99" }
        ]
    },
    {
        category: "Wraps",
        note: "Served with potato salad or home fries. Fries for additional charge.",
        items: [
            { name: "Chicken Souvlaki Wrap", desc: "Lettuce, tomato, onion and souvlaki sauce.", price: "10.99" },
            { name: "Gyro Wrap", desc: "Lettuce, tomato, onion and souvlaki sauce.", price: "10.99" },
            { name: "Chicken Caesar Wrap", desc: "Lettuce and Parmesan cheese.", price: "10.99" },
            { name: "Chicken Fajita", desc: "Tomato, onion and green peppers.", price: "11.99" }
        ]
    },
    {
        category: "Salads",
        note: "",
        items: [
            { name: "House Salad", desc: "Lettuce, tomato and onions.", price: "6.99" },
            { name: "Caesar Salad", desc: "Chicken or steak, lettuce, croutons, Parmesan and Caesar dressing.", price: "10.99" },
            { name: "Chicken Low Carb Salad", desc: "Lettuce, tomato, onion, cucumbers and green peppers.", price: "11.99" },
            { name: "Chef Salad", desc: "Lettuce, tomato, onion, cucumbers, green pepper, roast beef, ham, turkey, Swiss and American cheese.", price: "14.99" }
        ]
    },
    {
        category: "Seafoods",
        note: "Served with french fries or white rice and black beans.",
        items: [
            { name: "Fish and Chips", desc: "", price: "11.99" },
            { name: "Fried Shrimp", desc: "", price: "12.99" },
            { name: "Grilled Shrimp", desc: "", price: "12.99" },
            { name: "Fried Fish", desc: "", price: "12.99" },
            { name: "Grilled Tilapia", desc: "", price: "12.99" }
        ]
    },
    {
        category: "Steaks",
        note: "Served with white rice, black beans, sweet plantains or tostones.",
        items: [
            { name: "Steak Palomilla", desc: "Grilled pounded steak.", price: "13.99" },
            { name: "New York Steak", desc: "", price: "14.99" },
            { name: "Chopped Steak", desc: "", price: "12.99" },
            { name: "Steak Empanizado", desc: "Breaded steak.", price: "13.99" },
            { name: "Steak Milaneza", desc: "Breaded steak topped with ham and melted provolone.", price: "14.99" }
        ]
    },
    {
        category: "Chicken",
        note: "Served with white rice, black beans, sweet plantains or tostones.",
        items: [
            { name: "Pollo a la Plancha", desc: "Grilled chicken breast.", price: "12.99" },
            { name: "Pollo Empanizado", desc: "Breaded chicken.", price: "13.99" },
            { name: "Chicharron de Pollo", desc: "Fried chicken chunks.", price: "13.99" },
            { name: "Pollo Medallion", desc: "Breaded chicken breast cooked in liquid margarine with mushrooms and onions.", price: "14.99" },
            { name: "Milaneza de Pollo", desc: "Breaded chicken topped with ham and melted provolone.", price: "14.99" }
        ]
    },
    {
        category: "Pork",
        note: "Served with white rice, black beans, sweet plantains or tostones.",
        items: [
            { name: "Lechon Asado", desc: "Shredded roast pork.", price: "11.99" },
            { name: "Masas de Puerco", desc: "Pork chunks.", price: "12.99" },
            { name: "Chuleta de Puerco", desc: "Grilled pork chop.", price: "11.99" }
        ]
    },
    {
        category: "Sauteed",
        note: "Served with white rice and black beans.",
        items: [
            { name: "Sauteed Chicken", desc: "", price: "12.99" },
            { name: "Sauteed Steak", desc: "", price: "13.99" },
            { name: "Sauteed Chicken and Steak Combo", desc: "", price: "14.99" },
            { name: "Sauteed Chicken and Shrimp", desc: "", price: "14.99" },
            { name: "Sauteed Steak and Shrimp", desc: "", price: "14.99" },
            { name: "Sauteed Shrimp", desc: "", price: "14.99" },
            { name: "Sauteed Supreme", desc: "Shrimp, chicken and steak.", price: "14.99" },
            { name: "Sauteed Vegetables", desc: "", price: "12.99" }
        ]
    },
    {
        category: "Beverages",
        note: "",
        items: [
            { name: "Coffee", desc: "", price: "2.99" },
            { name: "Cafe con Leche", desc: "", price: "3.99" },
            { name: "Cappuccino", desc: "", price: "4.99" },
            { name: "Cortadito", desc: "", price: "2.99" },
            { name: "Espresso", desc: "", price: "3.99" },
            { name: "Spanish Iced Coffee", desc: "", price: "5.99" },
            { name: "Hot Tea", desc: "Lipton.", price: "2.99" },
            { name: "Hot Chocolate", desc: "", price: "3.19" },
            { name: "Regular Iced Tea", desc: "", price: "3.19" },
            { name: "Minute Maid Lemonade", desc: "", price: "2.99" },
            { name: "Soda", desc: "", price: "2.00" },
            { name: "Jupina", desc: "", price: "2.25" },
            { name: "Materva", desc: "", price: "2.25" },
            { name: "Colombiana", desc: "", price: "2.25" },
            { name: "Inka Kola", desc: "", price: "2.25" },
            { name: "Orange Juice", desc: "", price: "3.19" },
            { name: "Apple Juice", desc: "", price: "3.19" },
            { name: "Regular Milk", desc: "", price: "3.19" },
            { name: "Chocolate Milk", desc: "", price: "3.49" },
            { name: "Jarrito", desc: "", price: "3.19" },
            { name: "Bottled Water", desc: "", price: "2.00" }
        ]
    },
    {
        category: "Side Orders for Lunch",
        note: "",
        items: [
            { name: "White Rice", desc: "", price: "2.99" },
            { name: "Black Beans", desc: "", price: "2.99" },
            { name: "Sweet Plantains", desc: "", price: "3.75" },
            { name: "French Fries", desc: "Fried potatoes.", price: "2.99" },
            { name: "Grilled Onions", desc: "Grilled onions and peppers.", price: "1.99" },
            { name: "Vegetables", desc: "", price: "3.99" }
        ]
    }
];

// ==========================
// RENDER MENU TABS + ITEMS
// ==========================

(function renderMenu() {

    const tabsEl = document.getElementById("menuTabs");
    const itemsEl = document.getElementById("menuItems");

    if (!tabsEl || !itemsEl) return;

    MENU_DATA.forEach((group, index) => {

        const tab = document.createElement("button");
        tab.className = "menu-tab" + (index === 0 ? " active" : "");
        tab.type = "button";
        tab.textContent = group.category;
        tab.dataset.index = index;

        tab.addEventListener("click", () => showCategory(index));

        tabsEl.appendChild(tab);

    });

    function showCategory(index) {

        document.querySelectorAll(".menu-tab").forEach((tab, i) => {
            tab.classList.toggle("active", i === index);
        });

        const group = MENU_DATA[index];

        itemsEl.innerHTML = "";

        if (group.note) {
            const note = document.createElement("p");
            note.className = "menu-note";
            note.textContent = group.note;
            itemsEl.appendChild(note);
        }

        const grid = document.createElement("div");
        grid.className = "menu-grid";

        group.items.forEach(item => {

            const card = document.createElement("div");
            card.className = "menu-item";

            card.innerHTML = `
                <div class="menu-item-top">
                    <h4>${item.name}</h4>
                    <span class="menu-item-price">$${item.price}</span>
                </div>
                ${item.desc ? `<p>${item.desc}</p>` : ""}
            `;

            grid.appendChild(card);

        });

        itemsEl.appendChild(grid);

    }

    showCategory(0);

})();

// ==========================
// END MENU DATA
// ==========================
