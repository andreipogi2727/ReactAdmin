export const menu = 
[
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "home.svg",
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg",
            },
        ],
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "user.svg",
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "product.svg",
            },
            {
                id: 3,
                title: "Orders",
                url: "/orders",
                icon: "order.svg",
            },
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icon: "post2.svg",
            },
        ],
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg",
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "note.svg",
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "form.svg",
            },
            {
                id: 4,
                title: "Calendar",
                url: "/",
                icon: "calendar.svg",
            },
        ],
    },
    {
        id: 4,
        title: "Maintenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "setting.svg",
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "backup.svg",
            },
         
        ],
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "chart.svg",
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "log.svg",
            },
        ],
    },
    
];

export const topDealUsers = [
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaYtVDMC1q1PMa5vLF93i5VUQlJg7aO3q7A&usqp=CAU",
        username: "Jeffery Arizona",
        email: "jarizone@gmail.com",
        amount: "4.222",
    },
    {
        id: 2,
        img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
        username: "Jeniffer Weber",
        email: "jweber@gmail.com",
        amount: "3.899",
    },
    {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIljiSiiB_bNKlmJU9fWL5Q5OnHmEuPopMaA&usqp=CAU",
        username: "Emma Swift",
        email: "eswift@gmail.com",
        amount: "3.111",
    },
    {
        id: 4,
        img: "https://media.istockphoto.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=dDDNcvIoG-4VdO01ZlENqODBoNocT434vIFp0duuTZM=",
        username: "Matthew Chan",
        email: "mchan@gmail.com",
        amount: "2.988",
    },
];

export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: 
    [
        {name: "Sun", users: 400},
        {name: "Mon", users: 600},
        {name: "Tues", users: 500},
        {name: "Wed", users: 700},
        {name: "Thu", users: 400},
        {name: "Fri", users: 500},
        {name: "Sat", users: 450},
    ],
};
export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: 
    [
        {name: "Sun", products: 400},
        {name: "Mon", products: 600},
        {name: "Tues", products: 500},
        {name: "Wed", products: 700},
        {name: "Thu", products: 400},
        {name: "Fri", products: 500},
        {name: "Sat", products: 450},
    ],
};
export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: 
    [
        {name: "Sun", revenue: 400},
        {name: "Mon", revenue: 600},
        {name: "Tues", revenue: 500},
        {name: "Wed", revenue: 700},
        {name: "Thu", revenue: 400},
        {name: "Fri", revenue: 500},
        {name: "Sat", revenue: 450},
    ],
};
export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: 
    [
        {name: "Sun", ratio: 400},
        {name: "Mon", ratio: 600},
        {name: "Tues", ratio: 500},
        {name: "Wed", ratio: 700},
        {name: "Thu", ratio: 400},
        {name: "Fri", ratio: 500},
        {name: "Sat", ratio: 450},
    ],
};

