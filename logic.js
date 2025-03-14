// Sample book data - Harry Potter series
// Book Collection Data
const books = [
    // Harry Potter Series (7 books)
    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 1997,
        isbn: "978-0747532699",
        description: "Eleven-year-old Harry Potter discovers he's a wizard and begins an adventure at Hogwarts School of Witchcraft and Wizardry, learning about his magical heritage and facing dangerous secrets.",
        coverImage: "images/stone.jpg",
        inStock: true,
        pages: 223,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349100267915837552/Harry_Potter_and_the_Sorcerers_Stone_by_J._K_Rowling_Book_1.pdf?ex=67d1df08&is=67d08d88&hm=779f3bc4dbc8eb70423ce64082340250c79426877c333933e24e6f4b7ff4eec4&"
    },
    {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 1998,
        isbn: "978-0747538486",
        description: "In his second year at Hogwarts, Harry investigates a mysterious message about the Chamber of Secrets being opened, endangering students with a hidden monster inside the school.",
        coverImage: "images/chamber.jpg",
        inStock: true,
        pages: 251,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets#:~:text=The%20plot%20follows%20Harry's,come%20from%20all%2Dmagical%20families.",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1348807762389499954/Harry_Potter_and_the_Chamber_of_Secrets_by_Rowling_J._K_Book_2.pdf?ex=67d0ce9e&is=67cf7d1e&hm=d4099ea4aa327f2d62aec339d243dbad82fccda7735b63706e95f53913a13752&"
    },
    {
        id: 3,
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 1999,
        isbn: "978-0747546290",
        description: "Harry's third year at Hogwarts is threatened by escaped murderer Sirius Black. As sinister prison guards patrol the school, Harry uncovers shocking truths about his past.",
        coverImage: "images/prison.jpg",
        inStock: true,
        pages: 317,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Prisoner_of_Azkaban",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349100268603707392/Harry_Potter_and_the_Prisoner_of_Azkaban_by_Rowling_J._K_Book_3.pdf?ex=67d1df09&is=67d08d89&hm=a5efae53971d01b3e3b1b2c97108e4c2783a637fa92b62fab0254c1e85f6bded&"
    },
    {
        id: 4,
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 2000,
        isbn: "978-0747550990",
        description: "Harry mysteriously enters the dangerous Triwizard Tournament meant for older students. Facing dragons and dark wizards, he discovers a plot threatening his life and the wizarding world.",
        coverImage: "images/goblet.jpg",
        inStock: true,
        pages: 636,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349100267072655423/Harry_Potter_and_the_Goblet_of_Fire_J.K._Rowling_Book_4.pdf?ex=67d1df08&is=67d08d88&hm=e547944f025278cf752d262e842d6fd6e3253788b1e6aca6ca038058c56da921&"
    },
    {
        id: 5,
        title: "Harry Potter and the Order of the Phoenix",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 2003,
        isbn: "978-0747551003",
        description: "As Voldemort returns, Harry joins a secret order fighting dark forces. With the Ministry denying danger and Hogwarts under siege, Harry must learn to protect his mind.",
        coverImage: "images/pheonix.jpg",
        inStock: true,
        pages: 766,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349100268217958421/Harry_Potter_and_the_Order_of_the_Phoenix_J._K._Rowling_Book_5.pdf?ex=67d1df09&is=67d08d89&hm=d71050182ae7d68002d229fdb03f137663556a871cf2d8f0a381fad2d849fbf2&"
    },
    {
        id: 6,
        title: "Harry Potter and the Half-Blood Prince",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 2005,
        isbn: "978-0747581086",
        description: "Harry works with Dumbledore to uncover Voldemort's secrets while suspecting Malfoy of sinister activities. A mysterious potions book and revelations about the past prepare Harry for his destiny.",
        coverImage: "images/prince.jpg",
        inStock: true,
        pages: 607,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Half-Blood_Prince",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349100268960088254/Harry_Potter_and_the_Half-Blood_Prince_J.K._Rowling_Book_6.pdf?ex=67d1df09&is=67d08d89&hm=6f27ff6a06ee3fe35d4196b12f2fdb598d080b8457548e10c57a71cdf4956b5e&"
    },
    {
        id: 7,
        title: "Harry Potter and the Deathly Hallows",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        publishYear: 2007,
        isbn: "978-0747591054",
        description: "In the final battle against Voldemort, Harry must find and destroy the remaining Horcruxes. The quest for three legendary objects—the Deathly Hallows—becomes crucial to defeating his enemy.",
        coverImage: "images/deathly.jpg",
        inStock: true,
        pages: 607,
        publisher: "Bloomsbury",
        language: "English",
        dimensions: "5 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349100267483828305/Harry_Potter_and_the_Deathly_Hallows_Rowling_J._K._Book_7.pdf?ex=67d1df08&is=67d08d88&hm=10a16a39053b46c60fe75fa661cf532e212925d527f58faadd8be35f116c7d87&"
    },
    {
        id: 8,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian, Fiction, Classic",
        publishYear: 1949,
        isbn: "978-0451524935",
        description: "In a totalitarian future society, a man struggles to maintain his identity under an oppressive regime that controls information and manipulates truth.",
        coverImage: "images/1984.jpg",
        inStock: true,
        pages: 328,
        publisher: "Signet Classic",
        language: "English",
        dimensions: "4.2 x 0.9 x 7.5 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349832332714184825/1984.pdf?ex=67d488d2&is=67d33752&hm=fcc5e618567d9b3a5679b26ab798721c1f55f9531ef526097ea373ab291c380d&"
    },
    {
        id: 9,
        title: "A History of American Literature",
        author: "Richard Gray",
        genre: "Literary Criticism, Reference, Academic",
        publishYear: 2011,
        isbn: "978-1405192286",
        description: "Comprehensive overview of American literary traditions from colonial times to the present, examining diverse voices and cultural movements.",
        coverImage: "images/american.jpg",
        inStock: true,
        pages: 936,
        publisher: "Wiley-Blackwell",
        language: "English",
        dimensions: "6.8 x 1.6 x 9.7 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/A_History_of_American_Literature",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349832333007651007/A_History_of_American_Literature__PDFDrive_.pdf?ex=67d488d2&is=67d33752&hm=7bec431b1990f3f5922749df5699bd4b059dd3972962a4157b4d175ad8d6d071&"
    },
    {
        id: 10,
        title: "A Tree Grows In Brooklyn",
        author: "Betty Smith",
        genre: "Historical Fiction, Classic, Drama",
        publishYear: 1943,
        isbn: "978-0061120077",
        description: "Young Francie Nolan grows up amid poverty in early 1900s Brooklyn, finding strength in family, education, and her own resilience.",
        coverImage: "images/tree.jpg",
        inStock: true,
        pages: 496,
        publisher: "Harper Perennial Modern Classics",
        language: "English",
        dimensions: "5.3 x 1.1 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Tree_Grows_in_Brooklyn",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349832333338873966/A_Tree_Grows_In_Brooklyn.pdf?ex=67d488d2&is=67d33752&hm=0ae876bfa6e9e264c0573d5e44ced98a3bbc6c62fb6f2282149a2b90eeccfae8&"
    },
    {
        id: 11,
        title: "Adventures of Huckleberry Finn",
        author: "Mark Twain",
        genre: "Classic, Adventure, Fiction",
        publishYear: 1884,
        isbn: "978-0141199009",
        description: "Huck Finn and runaway slave Jim journey down the Mississippi River, encountering adventure, danger, and moral dilemmas in pre-Civil War America.",
        coverImage: "images/finn.jpg",
        inStock: true,
        pages: 366,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.8 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349832333745717339/Adventures_of_Huckleberry_Finn.pdf?ex=67d488d3&is=67d33753&hm=1c277c36d354fd4e224b7fb96062ed772fcbf813db9e7e1d4d6230356f19eedd&"
    },
    {
        id: 12,
        title: "American Fairy Tales",
        author: "L. Frank Baum",
        genre: "Fantasy, Children's, Short Stories",
        publishYear: 1901,
        isbn: "978-1420955743",
        description: "Collection of whimsical fairy tales set in America, combining magic with modern settings by the author of The Wonderful Wizard of Oz.",
        coverImage: "images/fairy.jpg",
        inStock: true,
        pages: 144,
        publisher: "Digireads.com",
        language: "English",
        dimensions: "6 x 0.3 x 9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/American_Fairy_Tales",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349832334186123295/American_Fairy_Tales.pdf?ex=67d488d3&is=67d33753&hm=b42256afa3c6c3025a36be7c6f1ff78a18af5b4f2f936572471cee01ada70b5c&"
    },
    {
        id: 13,
        title: "American Literature",
        author: "Various",
        genre: "Anthology, Reference, Academic",
        publishYear: 2012,
        isbn: "978-0133268126",
        description: "Anthology of American literature spanning multiple periods and styles, featuring influential works from diverse authors throughout American history.",
        coverImage: "images/literature.jpg",
        inStock: true,
        pages: 1580,
        publisher: "Prentice Hall",
        language: "English",
        dimensions: "7.5 x 2.1 x 9.2 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/American_literature",
        downloadUrl: ""
    },
    {
        id: 14,
        title: "Angels & Demons",
        author: "Dan Brown",
        genre: "Mystery, Thriller, Fiction",
        publishYear: 2000,
        isbn: "978-1416524793",
        description: "Robert Langdon races to solve an ancient vendetta in Vatican City, uncovering a conspiracy involving science, religion, and a secret brotherhood.",
        coverImage: "images/angelsdemons.jpg",
        inStock: true,
        pages: 736,
        publisher: "Pocket Books",
        language: "English",
        dimensions: "4.1 x 1.6 x 7.5 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Angels_%26_Demons",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349832330197598239/Angels__Demons.pdf?ex=67d488d2&is=67d33752&hm=41ca56625f4dd02ec48fa6000945b00e8d255d272a4c042d36e68e29f7c364fe&"
    },
    {
        id: 15,
        title: "Anne of Green Gables",
        author: "L.M. Montgomery",
        genre: "Children's, Classic, Fiction",
        publishYear: 1908,
        isbn: "978-0553213133",
        description: "Spirited orphan Anne Shirley finds a home with elderly siblings on Prince Edward Island, transforming their lives with her imagination and charm.",
        coverImage: "images/anne.jpg",
        inStock: true,
        pages: 320,
        publisher: "Bantam Classics",
        language: "English",
        dimensions: "4.2 x 0.7 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Anne_of_Green_Gables",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349832330579017760/Anne_of_Green_Gables.pdf?ex=67d488d2&is=67d33752&hm=c500e48acfa1474943e83a4b230188dec5b821dff96421ffe2b3f1fae0cf2c70&"
    },
    {
        id: 16,
        title: "Around the World in 80 Days",
        author: "Jules Verne",
        genre: "Adventure, Classic, Fiction",
        publishYear: 1873,
        isbn: "978-0140449136",
        description: "Eccentric Phileas Fogg wagers he can circumnavigate the globe in eighty days, embarking on an extraordinary journey across continents and cultures.",
        coverImage: "images/80days.jpg",
        inStock: true,
        pages: 252,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.6 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Around_the_World_in_Eighty_Days",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349832328850968699/Around_the_World_in_80_Days.pdf?ex=67d488d1&is=67d33751&hm=8e0bf50a360f5a7af073f8fdaf960238fe1914611f0ac496c57033ea5f2941e9&"
    },
    {
        id: 17,
        title: "Black Beauty",
        author: "Anna Sewell",
        genre: "Children's, Classic, Fiction",
        publishYear: 1877,
        isbn: "978-0141321035",
        description: "A horse narrates his life story, revealing experiences with both kindness and cruelty, advocating for compassionate treatment of animals.",
        coverImage: "images/blackbeauty.jpg",
        inStock: true,
        pages: 255,
        publisher: "Puffin Classics",
        language: "English",
        dimensions: "5.1 x 0.7 x 7 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Black_Beauty",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349832329308274698/Black_Beauty.pdf?ex=67d488d1&is=67d33751&hm=29bb7c6241e0257ddd2b02fc2b3af12048f3b2195d50e1e00c3f9e220dd0e0ee&"
    },
    {
        id: 18,
        title: "Catch-22",
        author: "Joseph Heller",
        genre: "Satire, Classic, Fiction",
        publishYear: 1961,
        isbn: "978-0684833392",
        description: "Bombardier Yossarian confronts the absurdity of war and bureaucracy while attempting to survive WWII amid circular military logic.",
        coverImage: "images/catch22.jpg",
        inStock: true,
        pages: 453,
        publisher: "Simon & Schuster",
        language: "English",
        dimensions: "5.5 x 1.1 x 8.4 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Catch-22",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349832329727578184/Catch_22_813.pdf?ex=67d488d2&is=67d33752&hm=c8c74ef8f7b09464947096785e98eceea295edacaf9f27b83995d02f6c0f67cd&"
    },
    {
        id: 19,
        title: "Creating Characters",
        author: "Dwight V. Swain",
        genre: "Reference, Writing, Educational",
        publishYear: 1990,
        isbn: "978-0806139180",
        description: "Practical guide for writers on developing memorable fictional characters with authentic motivations, conflicts, and personal histories.",
        coverImage: "images/creatingcharacters.jpg",
        inStock: true,
        pages: 240,
        publisher: "University of Oklahoma Press",
        language: "English",
        dimensions: "5.5 x 0.6 x 8.2 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Creating_Characters",
        downloadUrl: ""
    },
    {
        id: 20,
        title: "Dracula",
        author: "Bram Stoker",
        genre: "Horror, Classic, Fiction",
        publishYear: 1897,
        isbn: "978-0141439846",
        description: "Epistolary novel chronicling Count Dracula's attempt to move from Transylvania to England and the battle between him and vampire hunters.",
        coverImage: "images/dracula.jpg",
        inStock: true,
        pages: 454,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.8 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Dracula",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349839841457868820/Dracula_by_Bram_Stoker.pdf?ex=67d48fd1&is=67d33e51&hm=dde5976924f85563974bef0dd7ff921b5e28a310e6bc12307cf499371ac72726&"
    },
    {
        id: 21,
        title: "Eat, Pray, Love",
        author: "Elizabeth Gilbert",
        genre: "Memoir, Travel, Spiritual",
        publishYear: 2006,
        isbn: "978-0143038412",
        description: "One woman's journey across Italy, India, and Indonesia seeking pleasure, devotion, and balance after a difficult divorce.",
        coverImage: "images/eatpray.jpg",
        inStock: true,
        pages: 352,
        publisher: "Penguin Books",
        language: "English",
        dimensions: "5.4 x 0.8 x 8.4 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Eat,_Pray,_Love",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349839841843478528/Eat_Pray_Love.pdf?ex=67d48fd1&is=67d33e51&hm=7b3f1fe7a5ca6d05755f6080c9e72e5c34fe5712c92df18ae1ad748d7c381d5e&"
    },
    {
        id: 22,
        title: "Frankenstein",
        author: "Mary Shelley",
        genre: "Horror, Classic, Fiction",
        publishYear: 1818,
        isbn: "978-0141439471",
        description: "Scientist Victor Frankenstein creates a sentient creature who, rejected by society, seeks vengeance against his creator.",
        coverImage: "images/frankestein.jpg",
        inStock: true,
        pages: 273,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.7 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Frankenstein",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349839841126514820/Frankenstein_-Usborne-Classics-Retold-John-Grant_1.pdf?ex=67d48fd0&is=67d33e50&hm=09d8efb741671f5f7fec5dc44cad9db6a655609853bbc221cdc8c8ab548f4bed&"
    },
    {
        id: 23,
        title: "Gone with the Wind",
        author: "Margaret Mitchell",
        genre: "Historical Fiction, Romance, Classic",
        publishYear: 1936,
        isbn: "978-1451635621",
        description: "Scarlett O'Hara navigates love, loss, and survival during the American Civil War and Reconstruction era in the Southern United States.",
        coverImage: "images/gonewith.jpg",
        inStock: true,
        pages: 960,
        publisher: "Scribner",
        language: "English",
        dimensions: "5.2 x 2 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Gone_with_the_Wind_(novel)",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349840277946499144/Gone_with_the_Wind_by_Margaret_Mitchell.pdf?ex=67d49039&is=67d33eb9&hm=b6c819b1cc71979106ed29a889efae85f7f7ed84e91e11145fa3d0648c9e17a2&"
    },
    {
        id: 24,
        title: "Gulliver's Travels",
        author: "Jonathan Swift",
        genre: "Satire, Adventure, Classic",
        publishYear: 1726,
        isbn: "978-0141439495",
        description: "Lemuel Gulliver's fantastical voyages to strange lands inhabited by tiny people, giants, intellectuals, and horses, satirizing human nature.",
        coverImage: "images/gulliver.jpg",
        inStock: true,
        pages: 306,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.7 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Gulliver%27s_Travels",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349840278273392701/Gullivers_Travels_by_Jonathan_Swift.pdf?ex=67d49039&is=67d33eb9&hm=09ffca22250ad7dcf8f9f51a1fdc3a0e78bcfb9dce2db32600db5404a43aa1d8&"
    },
    {
        id: 25,
        title: "Heart of Darkness",
        author: "Joseph Conrad",
        genre: "Fiction, Classic, Drama",
        publishYear: 1899,
        isbn: "978-0141441672",
        description: "Marlow recounts his journey up the Congo River into the African interior, where he encounters the enigmatic Kurtz.",
        coverImage: "images/heartof.jpg",
        inStock: true,
        pages: 112,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.3 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Heart_of_Darkness",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349840276847464559/Heart-of-Darkness.pdf?ex=67d49038&is=67d33eb8&hm=54429c51f1de8cd1f8986ea396bcc71ed0a23e41bf167623bb17d22b56578990&"
    },
    {
        id: 26,
        title: "How to Write Effective Business English",
        author: "Fiona Talbot",
        genre: "Business, Reference, Educational",
        publishYear: 2016,
        isbn: "978-0749475550",
        description: "Practical guide for improving business communication, covering emails, reports, and international correspondence with clarity and precision.",
        coverImage: "images/businessenglish.jpg",
        inStock: true,
        pages: 184,
        publisher: "Kogan Page",
        language: "English",
        dimensions: "5.4 x 0.5 x 8.5 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/How_to_Write_Effective_Business_English",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349840277329674380/How_to_Write_Effective_Business_English__The_Essential_Toolkit_for_Composing_Powerful_Letters_E-Mails_and_More_808.pdf?ex=67d49038&is=67d33eb8&hm=60b0c75d6a1839f03825374912ed87b2eaf451f5efabf9678fcb73bb3ac9e9ff&"
    },
    {
        id: 27,
        title: "Journey to the Center of the Earth",
        author: "Jules Verne",
        genre: "Adventure, Classic, Fiction",
        publishYear: 1864,
        isbn: "978-0553213973",
        description: "Professor Lidenbrock and his nephew discover an ancient manuscript detailing a path to Earth's center, leading to extraordinary underground adventures.",
        coverImage: "images/journey.webp",
        inStock: true,
        pages: 240,
        publisher: "Bantam Classics",
        language: "English",
        dimensions: "4.2 x 0.6 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Journey_to_the_Center_of_the_Earth",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349840277656834068/Jorney_to_the_centre_of_the_Earth_by_Jules_Verne.pdf?ex=67d49039&is=67d33eb9&hm=da464c0c0f3040f73236895e2694b4d44694700ebe01daf771484b3a982314c9&"
    },
    {
        id: 28,
        title: "Life of Pi",
        author: "Yann Martel",
        genre: "Adventure, Fiction, Philosophical",
        publishYear: 2001,
        isbn: "978-0156027328",
        description: "Teenage Pi Patel survives a shipwreck and spends 227 days on a lifeboat with a Bengal tiger, exploring faith and survival.",
        coverImage: "images/pi.jpg",
        inStock: true,
        pages: 326,
        publisher: "Mariner Books",
        language: "English",
        dimensions: "5.3 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Life_of_Pi",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349840959755653161/Life_of_Pi_-_Yann_Martel.pdf?ex=67d490db&is=67d33f5b&hm=a2abc5fc99600eb0e0ea6831318de637a1a8f1daf9e3a6ccc92856812982ff81&"
    },
    {
        id: 29,
        title: "Little Women",
        author: "Louisa May Alcott",
        genre: "Classic, Fiction, Drama",
        publishYear: 1868,
        isbn: "978-0147514011",
        description: "Four sisters navigate poverty, love, and personal growth during the American Civil War, led by the ambitious writer Jo March.",
        coverImage: "images/littlewomen.jpeg",
        inStock: true,
        pages: 777,
        publisher: "Puffin Classics",
        language: "English",
        dimensions: "5.1 x 1.4 x 7 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Little_Women",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349840959436881920/Little_Women_by_Louisa_May_Alcott.pdf?ex=67d490db&is=67d33f5b&hm=854108c4181467cf43e2ec63bb3d4dd20dd6a3eb8cfde2d9df187a6643c87f3e&"
    },
    {
        id: 30,
        title: "McDougal Littell Literature: American Literature",
        author: "McDougal Littell",
        genre: "Textbook, Reference, Academic",
        publishYear: 2008,
        isbn: "978-0618568666",
        description: "Comprehensive high school textbook presenting American literary works from various periods with historical context and analytical guidance.",
        coverImage: "images/mcdougal.jpg",
        inStock: true,
        pages: 1472,
        publisher: "McDougal Littell",
        language: "English",
        dimensions: "8.6 x 1.8 x 10.4 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/McDougal_Littell_Literature:_American_Literature",
        downloadUrl: ""
    },
    {
        id: 31,
        title: "Metamorphosis",
        author: "Franz Kafka",
        genre: "Fiction, Classic, Philosophical",
        publishYear: 1915,
        isbn: "978-0486290300",
        description: "Gregor Samsa awakens transformed into a giant insect, exploring themes of alienation as his family reacts with disgust.",
        coverImage: "images/metamorph.jpg",
        inStock: true,
        pages: 96,
        publisher: "Dover Publications",
        language: "English",
        dimensions: "5.2 x 0.2 x 8.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Metamorphosis",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349840984787128441/Metamorphosis_by_Franz_Kafka.pdf?ex=67d490e1&is=67d33f61&hm=aab867126a4bff719c21334e9b79b12d7c4e5c0fd46191de1e79684ec1cdfc63&"
    },
    {
        id: 32,
        title: "Narrative of the Life of Frederick Douglass",
        author: "Frederick Douglass",
        genre: "Autobiography, Memoir, Historical",
        publishYear: 1845,
        isbn: "978-0486284996",
        description: "Former slave's powerful memoir recounting his journey from bondage to freedom, exposing the brutal reality of American slavery.",
        coverImage: "images/douglass.jpg",
        inStock: true,
        pages: 128,
        publisher: "Dover Publications",
        language: "English",
        dimensions: "5.2 x 0.3 x 8.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Narrative_of_the_Life_of_Frederick_Douglass,_an_American_Slave",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349840985395433523/Narrative_of_Frederick_Douglass_simplified.pdf?ex=67d490e1&is=67d33f61&hm=a474fb2a4a21a5099838d6b01d15e5b67193b90644aff6f17ed3dd2f535f5e5b&"
    },
    {
        id: 33,
        title: "Poetry For Dummies",
        author: "The Poetry Center, John Timpane",
        genre: "Reference, Educational, Writing",
        publishYear: 2001,
        isbn: "978-0764552724",
        description: "Accessible guide to reading, writing, and appreciating poetry, covering forms, techniques, and poetic traditions for beginners.",
        coverImage: "images/poetryfor.jfif",
        inStock: true,
        pages: 336,
        publisher: "For Dummies",
        language: "English",
        dimensions: "7.4 x 0.7 x 9.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Poetry_For_Dummies",
        downloadUrl: ""
    },
    {
        id: 34,
        title: "Poetry for Students",
        author: "Gale Research Company",
        genre: "Reference, Educational, Academic",
        publishYear: 2002,
        isbn: "978-0787659561",
        description: "Collection of critical analyses of frequently studied poems, providing historical context, themes, and interpretations for students.",
        coverImage: "images/poetryforstudents.webp",
        inStock: true,
        pages: 250,
        publisher: "Gale",
        language: "English",
        dimensions: "6 x 0.8 x 9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Poetry_for_Students",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349841107852197979/Poetry_for_Students__809_.pdf?ex=67d490fe&is=67d33f7e&hm=58c63a57c321cd2ef0ac96280871e0e1fadd799ada964cd79b8239c28b5811fd&"
    },
    {
        id: 35,
        title: "PS I Still Love You",
        author: "Jenny Han",
        genre: "Young Adult, Romance, Fiction",
        publishYear: 2015,
        isbn: "978-1442426733",
        description: "In this sequel, Lara Jean navigates complex relationships as past and present love interests compete for her affection.",
        coverImage: "images/ps.jpg",
        inStock: true,
        pages: 352,
        publisher: "Simon & Schuster Books for Young Readers",
        language: "English",
        dimensions: "5.5 x 1.2 x 8.2 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/P.S._I_Still_Love_You",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349841108288671814/PS_I_Still_Love_You__PDFDrive.com_.pdf?ex=67d490ff&is=67d33f7f&hm=8cbf2135facc69cfed0fbd57aacf89f9fcdafacb0965f06114df309841c2ca4d&"
    },
    {
        id: 36,
        title: "P.S. I Love You",
        author: "Cecelia Ahern",
        genre: "Romance, Fiction, Drama",
        publishYear: 2004,
        isbn: "978-0786890750",
        description: "Holly receives letters from her deceased husband guiding her through grief toward a new beginning.",
        coverImage: "images/psilove.jpg",
        inStock: true,
        pages: 512,
        publisher: "Hyperion",
        language: "English",
        dimensions: "4.2 x 1.2 x 6.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/P.S._I_Love_You_(novel)",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349841108636794890/Ps._I_love_you.pdf?ex=67d490ff&is=67d33f7f&hm=8eacf299a1ca5be65affbdfc1872505cb14f32d59bc1b904025061cb5c76fdd4&"
    },
    {
        id: 37,
        title: "Robinson Crusoe",
        author: "Daniel Defoe",
        genre: "Adventure, Classic, Fiction",
        publishYear: 1719,
        isbn: "978-0141439822",
        description: "Shipwrecked sailor survives alone on a deserted island for years, creating civilization from nothing while confronting nature and solitude.",
        coverImage: "images/robinson.jpg",
        inStock: true,
        pages: 288,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.7 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Robinson_Crusoe",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349841107059736738/Robinson_Crusoe_Oxford_Worlds_Classics__PDFDrive.com_.pdf?ex=67d490fe&is=67d33f7e&hm=2b829f9238dedad780de47bd4fb0dc9041e86947e2e9ece75515e4bc2c585fed&"
    },
    {
        id: 38,
        title: "Secret Letters of the Monk Who Sold His Ferrari",
        author: "Robin Sharma",
        genre: "Self-Help, Spiritual, Fiction",
        publishYear: 2011,
        isbn: "978-0062119698",
        description: "Jonathan embarks on an international adventure discovering ancient wisdom from letters left by Julian Mantle, unlocking secrets to transformation.",
        coverImage: "images/secretletters.jpg",
        inStock: true,
        pages: 240,
        publisher: "HarperCollins",
        language: "English",
        dimensions: "5.3 x 0.5 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Secret_Letters_of_the_Monk_Who_Sold_His_Ferrari",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349841107424510022/Secret_letters_of_the_monk_who_sold_his_ferrari_-_by_Robin_Sharma.pdf?ex=67d490fe&is=67d33f7e&hm=662d84b154624190cd33101f5a80cdd79f0d0e42fb462f8239e9b806a961bfd0&"
    },
    {
        id: 39,
        title: "The Best American Short Stories of the Century",
        author: "John Updike (Editor)",
        genre: "Short Stories, Anthology, Fiction",
        publishYear: 2000,
        isbn: "978-0395843673",
        description: "Collection of outstanding American short fiction from the twentieth century, selected by John Updike, showcasing diverse voices and styles.",
        coverImage: "images/americanshort.jpg",
        inStock: true,
        pages: 864,
        publisher: "Houghton Mifflin",
        language: "English",
        dimensions: "6 x 1.5 x 9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Best_American_Short_Stories_of_the_Century",
        downloadUrl: ""
    },
    {
        id: 40,
        title: "The Call of the Wild",
        author: "Jack London",
        genre: "Adventure, Classic, Fiction",
        publishYear: 1903,
        isbn: "978-0141321059",
        description: "Domesticated dog Buck is stolen and sold into harsh service during the Klondike Gold Rush, awakening his primitive instincts.",
        coverImage: "images/callofthe.jpg",
        inStock: true,
        pages: 160,
        publisher: "Puffin Classics",
        language: "English",
        dimensions: "5.1 x 0.4 x 7 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Call_of_the_Wild",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349841578738323496/The_Call_of_the_Wild_by_Jack_London.pdf?ex=67d4916f&is=67d33fef&hm=696097ad0c7c39845ff947f8bfb5f2fcf123ae3b6bf0c34875096886a5fb3e1a&"
    },
    {
        id: 41,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        genre: "Mystery, Thriller, Fiction",
        publishYear: 2005,
        isbn: "978-0307454546",
        description: "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate a wealthy family's dark past and a decades-old disappearance.",
        coverImage: "images/dragontattoo.jpg",
        inStock: true,
        pages: 672,
        publisher: "Vintage Crime/Black Lizard",
        language: "English",
        dimensions: "5.2 x 1.1 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Girl_with_the_Dragon_Tattoo",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349841579224858634/The_Girl_with_the_Dragon_Tattoo__PDFDrive.com_.pdf?ex=67d4916f&is=67d33fef&hm=ed7300a7b9a6636e79815d1babbf4ac36b126800052baf8063278fd788b54f44&"
    },
    {
        id: 42,
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        genre: "Historical Fiction, Drama, Cultural",
        publishYear: 2003,
        isbn: "978-1594631931",
        description: "Affluent Afghan boy betrays his loyal friend, then seeks redemption across continents and decades amid Afghanistan's turbulent history.",
        coverImage: "images/kiterunner.jpg",
        inStock: true,
        pages: 371,
        publisher: "Riverhead Books",
        language: "English",
        dimensions: "5.2 x 1 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Kite_Runner",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349841579581640797/The_Kite_Runner.pdf?ex=67d4916f&is=67d33fef&hm=ee7a1015c85a7fe1a5f26071d1fc650712451a576ebf31c15c731a206b7a28ac&"
    },
    {
        id: 43,
        title: "The Last of the Mohicans",
        author: "James Fenimore Cooper",
        genre: "Historical Fiction, Adventure, Classic",
        publishYear: 1826,
        isbn: "978-0553213294",
        description: "Set during French and Indian War, frontiersman Hawkeye and his Mohican companions protect British sisters through dangerous wilderness.",
        coverImage: "images/mohicans.jpg",
        inStock: true,
        pages: 432,
        publisher: "Bantam Classics",
        language: "English",
        dimensions: "4.2 x 0.9 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Last_of_the_Mohicans",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349841579921375415/The_Last_of_the_Mohicans_by_James_Fenimore_Cooper.pdf?ex=67d4916f&is=67d33fef&hm=2c2b5f1705d3762c4ef93d2403b9e4a5873ee9d9b74e60cd6f573f89b681fa26&"
    },
    {
        id: 44,
        title: "The Monk Who Sold His Ferrari",
        author: "Robin Sharma",
        genre: "Self-Help, Spiritual, Fiction",
        publishYear: 1997,
        isbn: "978-0062515674",
        description: "Successful lawyer Julian Mantle transforms after a heart attack, sharing wisdom learned from Himalayan monks about fulfillment and purpose.",
        coverImage: "images/monk.png",
        inStock: true,
        pages: 208,
        publisher: "HarperOne",
        language: "English",
        dimensions: "5.3 x 0.5 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Monk_Who_Sold_His_Ferrari",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349841580219043940/The_Monk_Who_Sold_His_Ferrari__PDFDrive.com_.pdf?ex=67d4916f&is=67d33fef&hm=33b02f221b2afad5e75ef594b37a035d6c8ec3d18b1767baca333b71ed9b5fc3&"
    },
    {
        id: 45,
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        genre: "Fiction, Classic, Adventure",
        publishYear: 1952,
        isbn: "978-0684801223",
        description: "Aging Cuban fisherman Santiago battles a giant marlin and sharks in the Gulf Stream, testing his strength, skill, and resolve.",
        coverImage: "images/oldman.jfif",
        inStock: true,
        pages: 127,
        publisher: "Scribner",
        language: "English",
        dimensions: "5.2 x 0.4 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349841581011894303/The_Old_Man_and_the_Sea.pdf?ex=67d4916f&is=67d33fef&hm=c7087a8c42c884944d39d91da92c81a01976c9fc03d967958d96de70e8dcc62b&"
    },
    {
        id: 46,
        title: "The Perks of Being a Wallflower",
        author: "Stephen Chbosky",
        genre: "Young Adult, Fiction, Coming-of-Age",
        publishYear: 1999,
        isbn: "978-1451696196",
        description: "Freshman Charlie navigates high school through letters detailing friendships, first love, family trauma, and mental health struggles.",
        coverImage: "images/wallflower.jpg",
        inStock: true,
        pages: 224,
        publisher: "MTV Books",
        language: "English",
        dimensions: "5 x 0.7 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Perks_of_Being_a_Wallflower",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349841578331471932/The_perks_of_being_a_wallflower.pdf?ex=67d4916f&is=67d33fef&hm=3d26a2df376edfcf4ba1adba22fe3217cdf3d77c1c4b99ac2cba289a546058e1&"
    },
    {
        id: 47,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        genre: "Fiction, Classic, Horror",
        publishYear: 1890,
        isbn: "978-0141439570",
        description: "Handsome Dorian Gray remains eternally young while his portrait ages, revealing his moral corruption and hedonistic lifestyle.",
        coverImage: "images/dorian.jpg",
        inStock: true,
        pages: 254,
        publisher: "Penguin Classics",
        language: "English",
        dimensions: "5.1 x 0.6 x 7.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349842337177800890/The_Picture_of_Dorian_Gray_by_Oscar_Wilde.pdf?ex=67d49224&is=67d340a4&hm=cebf9bbda6b9a167e2e86a154001e622cc67ce3c0f976b279ceb7e5439bb4df7&"
    },
    {
        id: 48,
        title: "The Raven",
        author: "Edgar Allan Poe",
        genre: "Poetry, Gothic, Classic",
        publishYear: 1845,
        isbn: "978-1512090567",
        description: "Narrative poem depicting a man's descent into madness as a talking raven intensifies his grief over lost love.",
        coverImage: "images/theraven.jpg",
        inStock: true,
        pages: 28,
        publisher: "CreateSpace Independent Publishing",
        language: "English",
        dimensions: "6 x 0.1 x 9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Raven",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349842337714667550/The_Raven_by_Edgar_Allan_Poe.pdf?ex=67d49224&is=67d340a4&hm=b56b3346f270de34edaec458952a1d1ffe6af78197a287783ebb7d2168782a19&"
    },
    {
        id: 49,
        title: "The Red Badge of Courage",
        author: "Stephen Crane",
        genre: "Historical Fiction, Classic, Drama",
        publishYear: 1895,
        isbn: "978-0486264653",
        description: "Young Union soldier Henry Fleming confronts his fears during Civil War battle, exploring themes of courage, maturity, and heroism.",
        coverImage: "images/redbadge.jpg",
        inStock: true,
        pages: 112,
        publisher: "Dover Publications",
        language: "English",
        dimensions: "5.2 x 0.3 x 8.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Red_Badge_of_Courage",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349842338016526476/The_Red_Badge_of_Courage_The_John_Harvard_Library__PDFDrive.com_.pdf?ex=67d49224&is=67d340a4&hm=fd4399f083edfc0a3d64b564fadcdd927c29e73b16ff018c666daa2c52b7acb0&"
    },
    {
        id: 50,
        title: "The Scarlet Letter",
        author: "Nathaniel Hawthorne",
        genre: "Historical Fiction, Classic, Drama",
        publishYear: 1850,
        isbn: "978-0486280486",
        description: "In Puritan New England, Hester Prynne bears public shame for adultery while her partner remains secret, exploring sin and redemption.",
        coverImage: "images/scarlet.jpg",
        inStock: true,
        pages: 192,
        publisher: "Dover Publications",
        language: "English",
        dimensions: "5.2 x 0.5 x 8.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Scarlet_Letter",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349842338306068531/The_Scarlet_Letter_by_Nathaniel_Hawthorne.pdf?ex=67d49224&is=67d340a4&hm=d563ab08b29ed17792f5bbd3bfe51e9604895780dccd66d2cdb1dd2ae6045295&"
    },
    {
        id: 51,
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        genre: "Children's, Classic, Fiction",
        publishYear: 1911,
        isbn: "978-0064401883",
        description: "Orphaned Mary discovers an abandoned garden on her uncle's estate, bringing healing and transformation to herself and others.",
        coverImage: "images/secretgarden.jpg",
        inStock: true,
        pages: 288,
        publisher: "HarperCollins",
        language: "English",
        dimensions: "5.1 x 0.6 x 7.6 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Secret_Garden",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349842338968633424/The_Secret_Garden_Book.pdf?ex=67d49224&is=67d340a4&hm=5356abb5cad8651ec4e78ee595389a72e3acaf342340fe06e14e1d7f4375f4fe&"
    },
    {
        id: 52,
        title: "The Story of the Other Wise Man",
        author: "Henry van Dyke",
        genre: "Religious, Fiction, Short Story",
        publishYear: 1895,
        isbn: "978-0345369253",
        description: "Fourth Magi Artaban spends his life seeking the Messiah, unknowingly fulfilling his mission through acts of compassion along the way.",
        coverImage: "images/wiseman.jpg",
        inStock: true,
        pages: 96,
        publisher: "Ballantine Books",
        language: "English",
        dimensions: "4.2 x 0.3 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Story_of_the_Other_Wise_Man",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349842339514024028/The_Story_of_the_Other_Wise_Man_by_Henry_Van_Dyke.pdf?ex=67d49224&is=67d340a4&hm=0cd400b109b8fa95158d2cfeb5426d44ecd8655d883b0334715f9b81a7fe1cfe&"
    },
    {
        id: 53,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic, Fiction, Drama",
        publishYear: 1925,
        isbn: "978-0743273565",
        description: "Mysterious millionaire Jay Gatsby pursues lost love Daisy Buchanan amid the decadence of 1920s Long Island high society.",
        coverImage: "images/gatsby.jpg",
        inStock: true,
        pages: 180,
        publisher: "Scribner",
        language: "English",
        dimensions: "5.2 x 0.5 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Great_Gatsby",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349842336699514910/The-Great-Gatsby.pdf?ex=67d49223&is=67d340a3&hm=10dac9a89c9acb5966769ffc195ca61df65eb1a0ce2176f773025313359d48b3&"
    },
    {
        id: 54,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic, Fiction, Drama",
        publishYear: 1960,
        isbn: "978-0446310789",
        description: "Young Scout observes racial injustice when her lawyer father defends a Black man unjustly accused in 1930s Alabama.",
        coverImage: "images/mockingbird.jpg",
        inStock: true,
        pages: 336,
        publisher: "Grand Central Publishing",
        language: "English",
        dimensions: "4.2 x 1 x 6.8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349842732876828692/To_kill_mockingbird.pdf?ex=67d49282&is=67d34102&hm=62dadf5b7e265e1b5b232d44ce9b36380a3e37a2be3c208fc2f1cb5439226bf1&"
    },
    {
        id: 57,
        title: "A Game of Thrones",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        publishYear: 1996,
        isbn: "978-0553573404",
        description: "Noble families battle for control of the Iron Throne while an ancient threat rises beyond the Wall.",
        coverImage: "images/game1.jpg",
        inStock: true,
        pages: 694,
        publisher: "Bantam Books",
        language: "English",
        dimensions: "4.2 x 1.6 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Game_of_Thrones",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349843036443508837/1._A_Game_of_Thrones.pdf?ex=67d492ca&is=67d3414a&hm=22a209b10dcfff87ca6c70b5009597559e98ebd1bd1bf6b4c4ffa9ccfcc1d1a9&"
    },
    {
        id: 58,
        title: "A Clash of Kings",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        publishYear: 1998,
        isbn: "978-0553579901",
        description: "The Seven Kingdoms erupt into war as rival kings vie for power while dark forces stir beyond the Wall.",
        coverImage: "images/game2.jpg",
        inStock: true,
        pages: 768,
        publisher: "Bantam Books",
        language: "English",
        dimensions: "4.2 x 1.7 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Clash_of_Kings",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349843037806792794/2._A_Clash_of_Kings.pdf?ex=67d492cb&is=67d3414b&hm=94b73251284f20728c9545ae0f5d4dc8e21ee9b645ea40322d43deb6940a8b34&"
    },
    {
        id: 59,
        title: "A Storm of Swords",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        publishYear: 2000,
        isbn: "978-0553573428",
        description: "Betrayals, alliances, and brutal conflicts shape the battle for Westeros as winter draws near.",
        coverImage: "images/game3.jpeg",
        inStock: true,
        pages: 973,
        publisher: "Bantam Books",
        language: "English",
        dimensions: "4.2 x 2 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Storm_of_Swords",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349843038163173376/3._A_Storm_of_Swords.pdf?ex=67d492cb&is=67d3414b&hm=8b60fb8787c37a27b3a53e30cd855d3e6f99d2c73f4fc1888c656716519ce710&"
    },
    {
        id: 60,
        title: "A Feast for Crows",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        publishYear: 2005,
        isbn: "978-0553582024",
        description: "With the war’s chaos settling, political schemes and dangerous ambitions rise across the Seven Kingdoms.",
        coverImage: "images/game4.jpg",
        inStock: true,
        pages: 753,
        publisher: "Bantam Books",
        language: "English",
        dimensions: "4.2 x 1.6 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Feast_for_Crows",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349843038586933248/4._A_Feast_for_Crows.pdf?ex=67d492cb&is=67d3414b&hm=477c37f8474e4176bcb161dd93bd039e252de507efc3b61f6cecefb883116801&"
    },
    {
        id: 61,
        title: "A Dance With Dragons",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        publishYear: 2011,
        isbn: "978-0553582017",
        description: "Dragons rise, rulers fall, and dangers grow in Westeros and beyond as war and magic collide.",
        coverImage: "images/game5.jpg",
        inStock: true,
        pages: 1040,
        publisher: "Bantam Books",
        language: "English",
        dimensions: "4.2 x 2 x 6.9 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Dance_with_Dragons",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349843039031394354/5._A_Dance_With_Dragons.pdf?ex=67d492cb&is=67d3414b&hm=d1b5a0d1aa6bf48b92bef221d2f0a40c4799c0b25af9d96e4a4c3265f1215f15&"
    },
    {
        id: 62,
        title: "Diary of a Wimpy Kid",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        publishYear: 2007,
        isbn: "978-0810993136",
        description: "Greg Heffley navigates middle school with hilarious mishaps and a unique outlook on growing up.",
        coverImage: "images/wimpy1.jpg",
        inStock: true,
        pages: 217,
        publisher: "Amulet Books",
        language: "English",
        dimensions: "5.5 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid",
        downloadUrl: ""
    },
    {
        id: 63,
        title: "Diary of a Wimpy Kid: Rodrick Rules",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        publishYear: 2008,
        isbn: "978-0810994737",
        description: "Greg faces new challenges, including dealing with his embarrassing and mischievous older brother, Rodrick.",
        coverImage: "images/wimpy2.jpg",
        inStock: true,
        pages: 224,
        publisher: "Amulet Books",
        language: "English",
        dimensions: "5.5 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_Rodrick_Rules",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349843494763757699/Diary_of_a_Wimpy_Kid_2_-_Rodrick-Rules_.pdf?ex=67d49338&is=67d341b8&hm=9be2c788f5b6df0762222d44584734ec591a4219faed95ef3e80a5541da5ee23&"
    },
    {
        id: 64,
        title: "Diary of a Wimpy Kid: The Last Straw",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        publishYear: 2009,
        isbn: "978-0810970687",
        description: "Greg’s dad wants him to toughen up, but Greg just wants to survive middle school his way.",
        coverImage: "images/wimpy3.jpg",
        inStock: true,
        pages: 224,
        publisher: "Amulet Books",
        language: "English",
        dimensions: "5.5 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_The_Last_Straw",
        downloadUrl: ""
    },
    {
        id: 65,
        title: "Diary of a Wimpy Kid: Dog Days",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        publishYear: 2009,
        isbn: "978-0810983915",
        description: "Greg plans a relaxing summer, but his family’s ideas—including a disastrous vacation—ruin everything.",
        coverImage: "images/wimpy4.jpg",
        inStock: true,
        pages: 224,
        publisher: "Amulet Books",
        language: "English",
        dimensions: "5.5 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_Dog_Days",
        downloadUrl: ""
    },
    {
        id: 66,
        title: "Diary of a Wimpy Kid: The Ugly Truth",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        publishYear: 2010,
        isbn: "978-0810984912",
        description: "Greg faces awkward changes, friendship drama, and middle school chaos in his journey to grow up.",
        coverImage: "images/wimpy5.jpg",
        inStock: true,
        pages: 224,
        publisher: "Amulet Books",
        language: "English",
        dimensions: "5.5 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_The_Ugly_Truth",
        downloadUrl: ""
    },
    {
        id: 67,
        title: "Diary of a Wimpy Kid: Cabin Fever",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        publishYear: 2011,
        isbn: "978-1419702235",
        description: "Greg gets snowed in with his family while also being blamed for a vandalism incident at school.",
        coverImage: "images/wimpy6.jpg",
        inStock: true,
        pages: 224,
        publisher: "Amulet Books",
        language: "English",
        dimensions: "5.5 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_Cabin_Fever",
        downloadUrl: ""
    },
    {
        id: 68,
        title: "Diary of a Wimpy Kid: The Third Wheel",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        publishYear: 2012,
        isbn: "978-1419705847",
        description: "Greg struggles to find a date for the school dance while dealing with his unlucky best friend, Rowley.",
        coverImage: "images/wimpy7.jpg",
        inStock: true,
        pages: 224,
        publisher: "Amulet Books",
        language: "English",
        dimensions: "5.5 x 0.8 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_The_Third_Wheel",
        downloadUrl: ""
    },
    {
        id: 69,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Dystopian, Fiction, Adventure",
        publishYear: 2008,
        isbn: "978-0439023481",
        description: "Katniss Everdeen volunteers to take her sister's place in a deadly televised battle for survival.",
        coverImage: "images/hunger1.jpg",
        inStock: true,
        pages: 374,
        publisher: "Scholastic Press",
        language: "English",
        dimensions: "5.5 x 0.9 x 8.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Hunger_Games",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349843642310721676/The_Hunger_Games.pdf?ex=67d4935b&is=67d341db&hm=66b0343c4900dae55ee7b07b04252b3e9158c1f87c59a378725c646017519692&"
    },
    {
        id: 70,
        title: "Catching Fire",
        author: "Suzanne Collins",
        genre: "Dystopian, Fiction, Adventure",
        publishYear: 2009,
        isbn: "978-0439023498",
        description: "Katniss and Peeta’s victory sparks rebellion, forcing them into a new, even deadlier Hunger Games.",
        coverImage: "images/hunger2.jpg",
        inStock: true,
        pages: 391,
        publisher: "Scholastic Press",
        language: "English",
        dimensions: "5.5 x 0.9 x 8.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Catching_Fire",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349843642801590332/Hunger_Games_2_Catching_Fire.pdf?ex=67d4935b&is=67d341db&hm=c9a6f2ff91ab75483c470893cff2caba9cbadce6e3c07efa0eff3a4217cefc02&"
    },
    {
        id: 71,
        title: "Mockingjay",
        author: "Suzanne Collins",
        genre: "Dystopian, Fiction, Adventure",
        publishYear: 2010,
        isbn: "978-0439023511",
        description: "Katniss becomes the symbol of rebellion as war erupts between the Capitol and the districts.",
        coverImage: "images/hunger3.jpg",
        inStock: true,
        pages: 390,
        publisher: "Scholastic Press",
        language: "English",
        dimensions: "5.5 x 0.9 x 8.3 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Mockingjay",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349843641924849724/Hunger_Games_3_Mockingjay.pdf?ex=67d4935b&is=67d341db&hm=08093b66f727bbddd689ec5791c1eb051b1cca4082f2afe2909843cb3c7683fe&"
    },
    {
        id: 72,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy, Adventure, Fiction",
        publishYear: 1937,
        isbn: "978-0547928227",
        description: "Bilbo Baggins embarks on an epic journey with dwarves to reclaim their homeland from a dragon.",
        coverImage: "images/lord1.jpg",
        inStock: true,
        pages: 310,
        publisher: "Houghton Mifflin Harcourt",
        language: "English",
        dimensions: "5.2 x 0.9 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Hobbit",
        downloadUrl: ""
    },
    {
        id: 73,
        title: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        genre: "Fantasy, Adventure, Fiction",
        publishYear: 1954,
        isbn: "978-0547928210",
        description: "Frodo Baggins sets out to destroy the One Ring and save Middle-earth from darkness.",
        coverImage: "images/lord2.jpg",
        inStock: true,
        pages: 423,
        publisher: "Houghton Mifflin Harcourt",
        language: "English",
        dimensions: "5.2 x 1.2 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Fellowship_of_the_Ring",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349843889833377862/Lord_of_the_Rings_-_The_Fellowship_of_the_ring_P.1.pdf?ex=67d49396&is=67d34216&hm=ca2e0b640f9e4938843597da3bda322f9464f291a155a668ba704583c83065fd&"
    },
    {
        id: 74,
        title: "The Two Towers",
        author: "J.R.R. Tolkien",
        genre: "Fantasy, Adventure, Fiction",
        publishYear: 1954,
        isbn: "978-0547928203",
        description: "The Fellowship is broken as war looms, while Frodo and Sam journey to Mordor alone.",
        coverImage: "images/lord3.jpg",
        inStock: true,
        pages: 352,
        publisher: "Houghton Mifflin Harcourt",
        language: "English",
        dimensions: "5.2 x 1.1 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Two_Towers",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349844069010112653/The_Lord_of_the_Rings-The_Two_Towers_P.2.pdf?ex=67d493c0&is=67d34240&hm=23048345d4423ef3dd039de493ef43b2d1364318147e436a406726dcfc8769e7&"
    },
    {
        id: 75,
        title: "The Return of the King",
        author: "J.R.R. Tolkien",
        genre: "Fantasy, Adventure, Fiction",
        publishYear: 1955,
        isbn: "978-0547928197",
        description: "The final battle for Middle-earth begins as Frodo nears Mount Doom to destroy the One Ring.",
        coverImage: "images/lord4.jpg",
        inStock: true,
        pages: 416,
        publisher: "Houghton Mifflin Harcourt",
        language: "English",
        dimensions: "5.2 x 1.2 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Return_of_the_King",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349844069555241040/The_Return_of_the_King_P.3.pdf?ex=67d493c1&is=67d34241&hm=9c2ae309ff67ff149b82e048eba01c9934ea5517cc33bf100326e9923e3853a5&"
    },
    {
        id: 76,
        title: "100 Ways to Motivate Yourself",
        author: "Steve Chandler",
        genre: "Self-Help, Motivation",
        publishYear: 1996,
        isbn: "978-1564147752",
        description: "A collection of strategies to inspire action and boost motivation in daily life.",
        coverImage: "images/100.jpg",
        inStock: true,
        pages: 224,
        publisher: "Career Press",
        language: "English",
        dimensions: "5.5 x 0.5 x 8.5 inches",
        detailsUrl: "https://www.amazon.com/100-Ways-Motivate-Yourself-Forever/dp/1564147754",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349845814888890491/100_Ways_to_Motivate_Yourself__Change_Your_Life_Forever.pdf?ex=67d49561&is=67d343e1&hm=6f8ed965e81984586903bb7452b12fd12b9d19ea729d7bb6b016369347be12be&"
    },
    {
        id: 77,
        title: "365 Steps to Self Confidence",
        author: "David Lawrence Preston",
        genre: "Self-Help, Personal Development",
        publishYear: 2003,
        isbn: "978-8179924462",
        description: "Daily exercises and insights to build confidence and improve self-esteem.",
        coverImage: "images/365.jpg",
        inStock: true,
        pages: 224,
        publisher: "Viva Books Private Limited",
        language: "English",
        dimensions: "5.5 x 0.6 x 8.4 inches",
        detailsUrl: "https://www.amazon.com/365-Steps-Self-confidence-Programme-Transformation/dp/1845282485",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349845815300063242/365_Steps_to_Self_Confidence.pdf?ex=67d49561&is=67d343e1&hm=330a1a70ec6b6df83c673cb50455e9dec470c2c8d3a9d3c364a38691238bfd8e&"
    },
    {
        id: 78,
        title: "A Profound Mind",
        author: "Dalai Lama",
        genre: "Philosophy, Self-Help",
        publishYear: 2012,
        isbn: "978-0385514675",
        description: "Insights into cultivating wisdom and mindfulness in everyday life.",
        coverImage: "images/profound.jpg",
        inStock: true,
        pages: 160,
        publisher: "Harmony",
        language: "English",
        dimensions: "5.2 x 0.6 x 7.9 inches",
        detailsUrl: "https://www.amazon.com/Profound-Mind-Cultivating-Wisdom-Everyday/dp/0385514689",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349845816117821452/A_Profound_Mind__Cultivating_Wisdom_in_Everyday_Life.pdf?ex=67d49561&is=67d343e1&hm=ce594bbf566f2f3b52e3cf7170ce463d6c516a589c386e0a353550a58b47b50c&"
    },
    {
        id: 79,
        title: "Anxiety & Depression Workbook",
        author: "Aaron T. Beck",
        genre: "Psychology, Self-Help",
        publishYear: 1999,
        isbn: "978-1572244139",
        description: "Exercises and strategies to manage anxiety and depression effectively.",
        coverImage: "images/anxiety.jpg",
        inStock: true,
        pages: 240,
        publisher: "New Harbinger Publications",
        language: "English",
        dimensions: "8.5 x 0.6 x 11 inches",
        detailsUrl: "https://www.amazon.com/Anxiety-Depression-Workbook-Effective-Techniques/dp/1684036143",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349845816604364830/Anxiety__Depression_Workbook.pdf?ex=67d49561&is=67d343e1&hm=30f61e3b111173604a2e99efb15f10fa40f14705e1224c2bffa895c019605662&"
    },
    {
        id: 80,
        title: "Chicken Soup for the Teenage Soul IV",
        author: "Jack Canfield, Mark Victor Hansen",
        genre: "Self-Help, Inspirational",
        publishYear: 2003,
        isbn: "978-0757301071",
        description: "Stories of love, learning, and personal growth for teens.",
        coverImage: "images/chickensoup.jpg",
        inStock: true,
        pages: 350,
        publisher: "Health Communications Inc.",
        language: "English",
        dimensions: "5.5 x 1 x 8.5 inches",
        detailsUrl: "https://www.amazon.com/Chicken-Soup-Teenage-Soul-IV/dp/1623610230",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349845814331179119/Chicken_Soup_for_the_Teenage_Soul_IV._More_Stories_of_Life_Love_and_Learning.pdf?ex=67d49561&is=67d343e1&hm=5c96e2acc527c9e20e119d19d7b1ecf32c2bfc1443d922e84efe7bd405424270&"
    },
    {
        id: 81,
        title: "Confidence: How to Sell Yourself",
        author: "David Craig",
        genre: "Self-Help, Business",
        publishYear: 1998,
        isbn: "978-0749428583",
        description: "Techniques for effective self-presentation and communication skills.",
        coverImage: "images/sell.jfif",
        inStock: true,
        pages: 224,
        publisher: "Kogan Page Limited",
        language: "English",
        dimensions: "6.1 x 0.5 x 9.2 inches",
        detailsUrl: "https://www.amazon.com/How-Sell-Yourself-Joe-Girard/dp/0446385018",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349847190083993640/Confidence_-_How_To_Sell_Yourself_-_Winning_Techniques_for_Selling_Yourself..Your_Ideas....pdf?ex=67d496a9&is=67d34529&hm=60fbb9459ee6132224597eced70fab43ca191fbb9a2a6a1558133ddeb92c81dc&"
    },
    {
        id: 82,
        title: "Emotional Intelligence",
        author: "Daniel Goleman",
        genre: "Psychology, Self-Help",
        publishYear: 1995,
        isbn: "978-0553383713",
        description: "Explores the impact of emotional intelligence on success and relationships.",
        coverImage: "images/eq.jpg",
        inStock: true,
        pages: 352,
        publisher: "Bantam Books",
        language: "English",
        dimensions: "5.5 x 0.9 x 8.2 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Emotional_Intelligence",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349847190608285786/Emotional_Intelligence.pdf?ex=67d496a9&is=67d34529&hm=b55d9fd09134bbe5619ef5748f5610624c479f183685e0a24c725682f5cb93f7&"
    },
    {
        id: 83,
        title: "From Failure to Success",
        author: "Martin Meadows",
        genre: "Self-Help, Motivation",
        publishYear: 2018,
        isbn: "978-1983244726",
        description: "Guidance on building resilience and turning failures into stepping stones.",
        coverImage: "images/fts.jpg",
        inStock: true,
        pages: 168,
        publisher: "Independently Published",
        language: "English",
        dimensions: "5 x 0.4 x 8 inches",
        detailsUrl: "https://www.amazon.com/Failure-Success-Exercises-Resilience-Successes/dp/1976283310",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349847190951956532/From_Failure_to_Success__Everyday_Habits_and_Exercises_to_Build_Mental_Resilience_and_Turn_Failures_Into_Successes.pdf?ex=67d496a9&is=67d34529&hm=f160357d10f07790f08e786702803be7e8da8332a41878b553f419b0740568d0&"
    },
    {
        id: 84,
        title: "How Successful People Think: Change Your Thinking, Change Your Life",
        author: "John C. Maxwell",
        genre: "Self-Help, Business, Psychology",
        publishYear: 2009,
        isbn: "978-1599951683",
        description: "Explores mental habits and strategies that drive success in personal and professional life.",
        coverImage: "images/peoplethink.jpg",
        inStock: true,
        pages: 160,
        publisher: "Center Street",
        language: "English",
        dimensions: "5.2 x 7.2 inches",
        detailsUrl: "https://www.amazon.com/How-Successful-People-Think-Your/dp/1599951681",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349847191384100958/How_Successful_People_Think__Change_Your_Thinking_Change_Your_Life.pdf?ex=67d496a9&is=67d34529&hm=ebc74e87fe0748893dd3ea3437841b05df0c387131dc5efa61fb5531b06c1977&"
    },
    {
        id: 85,
        title: "How to Develop Self-confidence and Influence People",
        author: "Dale Carnegie",
        genre: "Self-Help, Communication, Personal Development",
        publishYear: 1956,
        isbn: "978-0671746070",
        description: "A guide to building self-confidence and influencing others effectively in various aspects of life.",
        coverImage: "images/develop.jpg",
        inStock: true,
        pages: 240,
        publisher: "Pocket Books",
        language: "English",
        dimensions: "5.3 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/How_to_Develop_Self-Confidence_and_Influence_People_by_Public_Speaking",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349847191723966514/How_to_Develop_Self-confidence_and_Influence_People.pdf?ex=67d496a9&is=67d34529&hm=91096f2f4b9ecaaea32a113465e93140c66a66adf34bdc3c0b7a899bab8a966d&"
    },
    {
        id: 86,
        title: "How to Have a Beautiful Mind",
        author: "Edward de Bono",
        genre: "Self-Help, Psychology, Creativity",
        publishYear: 2004,
        isbn: "978-0091894603",
        description: "Offers techniques to cultivate creative thinking and develop a balanced, insightful mind.",
        coverImage: "images/beautifulmind.jpg",
        inStock: true,
        pages: 240,
        publisher: "Vermilion",
        language: "English",
        dimensions: "5.1 x 7.8 inches",
        detailsUrl: "https://www.amazon.com/How-Have-Beautiful-Mind-Edward/dp/0091894603",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349847189651718256/How_to_Have_a_Beautiful_Mind.pdf?ex=67d496a8&is=67d34528&hm=88271538484acb896714f7d288b8a11e3a50c85ee1952198169698e1355a35c5&"
    },
    {
        id: 87,
        title: "How to Read a Person Like a Book",
        author: "Gerard I. Nierenberg & Henry H. Calero",
        genre: "Psychology, Communication, Self-Help",
        publishYear: 1971,
        isbn: "978-0671735579",
        description: "A guide to interpreting body language for improved interpersonal communication.",
        coverImage: "images/book.jpg",
        inStock: true,
        pages: 192,
        publisher: "Pocket Books",
        language: "English",
        dimensions: "5.2 x 8 inches",
        detailsUrl: "https://www.amazon.com/How-Read-Person-Like-Book/dp/0671735578",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349847981033132103/How_to_Read_a_Person_Like_a_Book.pdf?ex=67d49765&is=67d345e5&hm=6a1eedf894687db7e413b60de03e6e183c969ac14bc2521bf578af0ab815d34f&"
    },
    {
        id: 88,
        title: "How to Stop Worrying & Start Living",
        author: "Dale Carnegie",
        genre: "Self-Help, Psychology, Personal Development",
        publishYear: 1948,
        isbn: "978-0671035978",
        description: "Practical advice for reducing worry and leading a more fulfilling, stress-free life.",
        coverImage: "images/worrying.jpg",
        inStock: true,
        pages: 288,
        publisher: "Simon & Schuster",
        language: "English",
        dimensions: "5.3 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/How_to_Stop_Worrying_and_Start_Living",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349847981410615410/How_to_Stop_Worrying__start_living.pdf?ex=67d49765&is=67d345e5&hm=9572e2e8eb153ca32e766ae1dc8a6e20006c176aba8ccde1baa0ee493001e7c8&"
    },
    {
        id: 90,
        title: "How to Use Your Mind by Harry D. Kitson",
        author: "Harry D. Kitson",
        genre: "Self-Help, Personal Development, Motivation",
        publishYear: 1920,
        isbn: "978-1234567890",
        description: "Focuses on harnessing mental power to achieve personal growth and success.",
        coverImage: "images/useyourmind.webp",
        inStock: true,
        pages: 200,
        publisher: "Mind Publications",
        language: "English",
        dimensions: "5.0 x 7.5 inches",
        detailsUrl: "https://www.amazon.com/How-Use-Your-Mind-Administration/dp/1977531369",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349847979640488067/How_to_Use_Your_Mind_by_Harry_D._Kitson.pdf?ex=67d49765&is=67d345e5&hm=ecbe05a56c23abac1ee9a70faf7f601631709375e37c252d974bd88b094a81d9&"
    },
    {
        id: 91,
        title: "How to Win Every Argument",
        author: "Madsen Pirie",
        genre: "Self-Help, Communication, Debate",
        publishYear: 2007,
        isbn: "978-0987654321",
        description: "Provides techniques and logical approaches to counter any argument effectively.",
        coverImage: "images/argument.jpg",
        inStock: true,
        pages: 220,
        publisher: "Debate Press",
        language: "English",
        dimensions: "5.4 x 7.8 inches",
        detailsUrl: "https://www.amazon.com/How-Win-Every-Argument-Abuse/dp/0826498949",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349847980043276319/How_to_Win_Every_Argument.pdf?ex=67d49765&is=67d345e5&hm=621915a9b0bd72ebe5d782abe4bba36bb17c7f2e5ab0f253d5b1194cc385d49a&"
    },
    {
        id: 92,
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        genre: "Self-Help, Communication, Personal Development",
        publishYear: 1936,
        isbn: "978-0671027032",
        description: "Timeless advice on building relationships and mastering interpersonal communication.",
        coverImage: "images/win.jpg",
        inStock: true,
        pages: 288,
        publisher: "Simon & Schuster",
        language: "English",
        dimensions: "5.5 x 8.4 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/How_to_Win_Friends_and_Influence_People",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349847980575821954/How_To_Win_Friends_and_Influence_People.pdf?ex=67d49765&is=67d345e5&hm=11c69c102c945448493321b80ff66886e71d3052232592bdb52ab63c459bb408&"
    },
    {
        id: 93,
        title: "Hypnosis: A Power Program for Self-Improvement, Changing Your Life and Helping Others",
        author: "Unknown",
        genre: "Self-Help, Psychology, Alternative",
        publishYear: 2020,
        isbn: "978-0981234567",
        description: "Explores hypnosis as a tool for personal transformation and self-improvement.",
        coverImage: "images/hypnosis.webp",
        inStock: true,
        pages: 350,
        publisher: "MindPower Press",
        language: "English",
        dimensions: "6.0 x 9 inches",
        detailsUrl: "https://www.amazon.com/Hypnosis-Program-Self-Improvement-Changing-Self-Improvement/dp/156718359X",
        downloadUrl: ""
    },
    {
        id: 94,
        title: "Life is What You Make It: A Story of Love, Hope, and How Determination Can Overcome Even Destiny",
        author: "Preeti Shenoy",
        genre: "Memoir, Inspirational, Romance",
        publishYear: 2001,
        isbn: "978-8172234954",
        description: "An inspiring story emphasizing determination and self-belief in shaping one’s destiny.",
        coverImage: "images/life.jpg",
        inStock: true,
        pages: 300,
        publisher: "Srishti Publishers",
        language: "English",
        dimensions: "5.6 x 8.2 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Life_Is_What_You_Make_It",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349849620142100511/Life_is_What_You_Make_it__A_Story_of_Love_Hope_and_How_Determination_Can_Overcome_Even_Destiny.pdf?ex=67d498ec&is=67d3476c&hm=dbd04902eca4d585b1a1619121e5d8c578bbf804007a937988d8e029c3615493&"
    },
    {
        id: 95,
        title: "Man’s Search for Meaning",
        author: "Viktor E. Frankl",
        genre: "Philosophy, Psychology, Memoir",
        publishYear: 1946,
        isbn: "978-0807014295",
        description: "A Holocaust survivor’s reflections on finding purpose and meaning amid suffering.",
        coverImage: "images/mans.jpg",
        inStock: true,
        pages: 165,
        publisher: "Beacon Press",
        language: "English",
        dimensions: "5.5 x 8.4 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Man%27s_Search_for_Meaning",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349849620594819174/Mans_Search_for_Meaning.pdf?ex=67d498ec&is=67d3476c&hm=7ffd2c9ec17c277beb350230ac4f9357d84c540d83b5daa2ccc109a7f578f4e3&"
    },
    {
        id: 96,
        title: "Meditation for Dummies",
        author: "Stephan Bodian",
        genre: "Self-Help, Health, Spirituality",
        publishYear: 2010,
        isbn: "978-1118764110",
        description: "A beginner's guide to meditation techniques for improved mental and physical well-being.",
        coverImage: "images/meditation.jpg",
        inStock: true,
        pages: 320,
        publisher: "For Dummies Books",
        language: "English",
        dimensions: "5.4 x 8 inches",
        detailsUrl: "https://www.amazon.com/Meditation-Dummies-Stephan-Bodian/dp/1119251168",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349849618652856521/Meditation_for_dummies.pdf?ex=67d498ec&is=67d3476c&hm=6ddfcb4c29700102d23681cedbd9d107f36de2489c40273d71ebd4645d56ebd1&"
    },
    {
        id: 97,
        title: "Power of The Subconscious Mind",
        author: "Joseph Murphy",
        genre: "Self-Help, Psychology, Spirituality",
        publishYear: 1963,
        isbn: "978-8192922654",
        description: "Explores how harnessing the subconscious mind can unlock hidden potential and transform life.",
        coverImage: "images/sub.webp",
        inStock: true,
        pages: 320,
        publisher: "Hay House",
        language: "English",
        dimensions: "5.6 x 8.2 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Power_of_Your_Subconscious_Mind",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349849618963238973/Power_of_The_Subconscious_Mind.pdf?ex=67d498ec&is=67d3476c&hm=6fdc0ea476e7f1a52fc8125bf1bf33acdb420c4aee5bca89496bbb0eb7f84a3d&"
    },
    {
        id: 98,
        title: "Power Up Your Mind: Learn Faster",
        author: "Tony Buzan",
        genre: "Self-Help, Education, Psychology",
        publishYear: 2007,
        isbn: "978-0749446472",
        description: "Provides techniques to enhance learning speed and improve overall mental performance.",
        coverImage: "images/powerup.jpg",
        inStock: true,
        pages: 280,
        publisher: "BBC Books",
        language: "English",
        dimensions: "5.3 x 8 inches",
        detailsUrl: "https://www.amazon.com/Power-Your-Mind-Faster-Smarter/dp/185788275X",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349849619294715947/Power_up_your_mind_learn_faster.pdf?ex=67d498ec&is=67d3476c&hm=1f51ff0bc416dd1e6eef9106a935552de77c2716cb8ec75d46dcab3fcf9117b9&"
    },
    {
        id: 99,
        title: "See You at the Top (Formerly Entitled Biscuits, Fleas, and Pump Handles)",
        author: "Zig Ziglar",
        genre: "Self-Help, Motivation, Personal Development",
        publishYear: 1975,
        isbn: "978-0671659915",
        description: "A motivational guide encouraging personal growth and the pursuit of success.",
        coverImage: "images/top.jpg",
        inStock: true,
        pages: 224,
        publisher: "HCI Books",
        language: "English",
        dimensions: "5.5 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/See_You_at_the_Top",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349849619596836976/See_You_at_the_Top_Formerly_Entitled_Biscuits_Fleas_and_Pump_Handles.pdf?ex=67d498ec&is=67d3476c&hm=d82e99e225b9670c94959feb9382ef52716757e1f91b384ef91e1ac82c45f825&"
    },
    {
        id: 100,
        title: "Self-Improvement: The Top 101 Experts That Help Us Improve Our Lives",
        author: "Various Authors",
        genre: "Self-Help, Personal Development, Biography",
        publishYear: 2000,
        isbn: "978-0987654320",
        description: "Profiles of top experts offering insights and advice for personal growth.",
        coverImage: "images/101.jpg",
        inStock: true,
        pages: 350,
        publisher: "Inspiration Press",
        language: "English",
        dimensions: "6.0 x 9 inches",
        detailsUrl: "https://www.amazon.com/Self-Improvement-Experts-Improve-Their-Lives/dp/097456723X",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349850775152627866/Self_improvement_the_top_101_experts_that_help_us_improve_our_lives.pdf?ex=67d499ff&is=67d3487f&hm=38e29ea13a65b6485a85259cda566272232b11f3a744eee803fc05383703b2e1&"
    },
    {
        id: 101,
        title: "Start Where You Are: A Guide to Compassionate Living",
        author: "Pema Chödrön",
        genre: "Self-Help, Spirituality, Psychology",
        publishYear: 2002,
        isbn: "978-1590306779",
        description: "Offers guidance on mindfulness and compassion to overcome life’s challenges.",
        coverImage: "images/start.jpg",
        inStock: true,
        pages: 176,
        publisher: "Sounds True",
        language: "English",
        dimensions: "5.2 x 7.8 inches",
        detailsUrl: "https://www.amazon.com/Start-Where-You-Are-Compassionate/dp/1590301420",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349850775572189325/Start_Where_You_Are_a_Guide_to_Compassionate_Living.pdf?ex=67d499ff&is=67d3487f&hm=b89b8c34a4f851a785f24917dfdb02f53640323c80cc83e230d5312dd32ca4b8&"
    },
    {
        id: 102,
        title: "Staying Strong: 365 Days a Year",
        author: "John Doe",
        genre: "Self-Help, Motivation, Daily Inspiration",
        publishYear: 2015,
        isbn: "978-1231231231",
        description: "A daily guide offering inspiration and strength for overcoming life’s obstacles.",
        coverImage: "images/staying.jpg",
        inStock: true,
        pages: 365,
        publisher: "Daily Wisdom Press",
        language: "English",
        dimensions: "5.5 x 8 inches",
        detailsUrl: "https://www.amazon.com/Staying-Strong-365-Days-Year/dp/1250051444",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349850775924375723/Staying_Strong_365_Days_a_Year.pdf?ex=67d499ff&is=67d3487f&hm=e9cff067627807b1164826721094d7a3ca9e1c66172a2370acbd8fff5fc69f8a&"
    },
    {
        id: 103,
        title: "The 7 Habits of Highly Effective Teens",
        author: "Sean Covey",
        genre: "Self-Help, Young Adult, Personal Development",
        publishYear: 1998,
        isbn: "978-1416549496",
        description: "A practical guide for teens to develop habits for success and personal growth.",
        coverImage: "images/7.jpg",
        inStock: true,
        pages: 240,
        publisher: "Touchstone Books",
        language: "English",
        dimensions: "5.2 x 8 inches",
        detailsUrl: "https://www.amazon.com/Habits-Highly-Effective-Teens/dp/1476764662",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349850776293609555/The_7_Habits_of_Highly_Effective_Teens__The_Ultimate_Teenage_Success_Guide__PDFDrive.com_.pdf?ex=67d49a00&is=67d34880&hm=c841e1c955ecd434235da4787d088937a8cb3bc26235cc35022904377f7bc252&"
    },
    {
        id: 104,
        title: "The Anxiety Workbook: A 7-Week Plan to Overcome Anxiety, Stop Worrying, and End Panic",
        author: "Arlene Schuster",
        genre: "Self-Help, Psychology, Health",
        publishYear: 2015,
        isbn: "978-1626251768",
        description: "A step-by-step workbook offering techniques to manage anxiety and panic symptoms.",
        coverImage: "images/workbook.jpg",
        inStock: true,
        pages: 320,
        publisher: "New Harbinger Publications",
        language: "English",
        dimensions: "5.4 x 8 inches",
        detailsUrl: "https://www.amazon.com/Anxiety-Workbook-7-Week-Overcome-Worrying/dp/1623159733",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349850776608051241/The_Anxiety_Workbook_A_7-Week_Plan_to_Overcome_Anxiety_Stop_Worrying_and_End_Panic.pdf?ex=67d49a00&is=67d34880&hm=7052e12737cff2a63f2fa6c877d707323b39607978b62125e7c2a97433fd7bac&"
    },
    {
        id: 105,
        title: "The Art of Thinking Clearly",
        author: "Rolf Dobelli",
        genre: "Self-Help, Psychology, Business",
        publishYear: 2013,
        isbn: "978-0062219695",
        description: "Identifies common cognitive biases and offers strategies to improve decision-making.",
        coverImage: "images/thinking.jpg",
        inStock: true,
        pages: 384,
        publisher: "Harper",
        language: "English",
        dimensions: "5.6 x 8 inches",
        detailsUrl: "https://www.amazon.com/Art-Thinking-Clearly-Better-Decisions/dp/0062219693",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349850777073750056/The_Art_of_Thinking_Clearly.pdf?ex=67d49a00&is=67d34880&hm=6d93f49b1e9970d344737f8a92184629811fba785779aa72a93125f767b8f21e&"
    },
    {
        id: 106,
        title: "The Book of Joy: Lasting Happiness in a Changing World",
        author: "Dalai Lama, Desmond Tutu, Douglas Abrams",
        genre: "Self-Help, Spirituality, Philosophy",
        publishYear: 2016,
        isbn: "978-0399185045",
        description: "Conversations on finding joy and meaning despite life’s inevitable challenges.",
        coverImage: "images/joy.jpg",
        inStock: true,
        pages: 352,
        publisher: "Atria Books",
        language: "English",
        dimensions: "5.4 x 8 inches",
        detailsUrl: "https://www.amazon.com/Book-Joy-Lasting-Happiness-Changing/dp/0399185046",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349850774766747822/The_Book_of_Joy__Lasting_Happiness_in_a_Changing_World_by_Dalai_Lama.pdf?ex=67d499ff&is=67d3487f&hm=4fd0a6e9fe5d71f2e00f26dcc6920973e8889709f225d1474116ce9e5defb0f8&"
    },
    {
        id: 107,
        title: "The Definitive Book of Body Language",
        author: "Allan and Barbara Pease",
        genre: "Self-Help, Communication, Psychology",
        publishYear: 2004,
        isbn: "978-0553804728",
        description: "Explains non-verbal cues and body language to improve everyday communication.",
        coverImage: "images/thedefin.jpg",
        inStock: true,
        pages: 368,
        publisher: "William Morrow",
        language: "English",
        dimensions: "5.7 x 8 inches",
        detailsUrl: "https://www.amazon.com/Definitive-Book-Body-Language/dp/0553804723",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349851984768925857/The_Definitive_Book_of_Body_Language.pdf?ex=67d49b20&is=67d349a0&hm=34462cda42d23977e561a91439cebb1afa10a37e17423dd75218fefefaa773ac&"
    },
    {
        id: 108,
        title: "The Gifts of Imperfection: Embrace Who You Are",
        author: "Brené Brown",
        genre: "Self-Help, Psychology, Inspirational",
        publishYear: 2010,
        isbn: "978-1592858491",
        description: "Encourages embracing imperfections to foster self-worth and authentic living.",
        coverImage: "images/imperfect.jpg",
        inStock: true,
        pages: 160,
        publisher: "Hazelden",
        language: "English",
        dimensions: "5.0 x 7.5 inches",
        detailsUrl: "https://www.amazon.com/Gifts-Imperfection-Think-Supposed-Embrace/dp/159285849X",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349851985196879913/The_Gifts_of_Imperfection_Embrace_Who_You_Are.pdf?ex=67d49b20&is=67d349a0&hm=3c6c3ebc1828c5c38faa66f7d657610133bd59c732f18f029f4b73e9695df138&"
    },
    {
        id: 109,
        title: "The Happiness of Pursuit: Finding the Quest That Will Bring Purpose to Your Life",
        author: "Chris Guillebeau",
        genre: "Self-Help, Adventure, Inspirational",
        publishYear: 2013,
        isbn: "978-0062263462",
        description: "Inspires readers to pursue meaningful quests that lead to a fulfilling life.",
        coverImage: "images/happiness.jpg",
        inStock: true,
        pages: 256,
        publisher: "HarperCollins",
        language: "English",
        dimensions: "5.3 x 8 inches",
        detailsUrl: "https://www.amazon.com/Happiness-Pursuit-Finding-Quest-Purpose/dp/0385348843",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349851984215408710/The_Happiness_of_Pursuit__Finding_the_Quest_That_Will_Bring_Purpose_to_Your_Life.pdf?ex=67d49b20&is=67d349a0&hm=1c1bd2b9c131a239745dd83b9f2903a571463e80cc7780fd13eac3ccc1faa825&"
    },
    {
        id: 110,
        title: "The Little Big Book of Life: Lessons, Wisdom, Humor, Instruction, Inspiration & Advice",
        author: "Various Authors",
        genre: "Self-Help, Inspirational, Humor",
        publishYear: 2010,
        isbn: "978-0987654310",
        description: "A compendium of life lessons and advice blending humor with practical wisdom.",
        coverImage: "images/bigbook.jpg",
        inStock: true,
        pages: 350,
        publisher: "Big Ideas Press",
        language: "English",
        dimensions: "6.0 x 9 inches",
        detailsUrl: "https://www.goodreads.com/book/show/8857375-the-little-big-book-of-life-revised-edition",
        downloadUrl: ""
    },
    {
        id: 111,
        title: "The Magic in Your Mind",
        author: "John Doe",
        genre: "Self-Help, Psychology, Inspirational",
        publishYear: 2005,
        isbn: "978-1111111111",
        description: "Explores techniques to unlock mental potential and foster creative thinking.",
        coverImage: "images/magic.jpg",
        inStock: true,
        pages: 200,
        publisher: "MindWorks Publishing",
        language: "English",
        dimensions: "5.2 x 7.8 inches",
        detailsUrl: "https://www.goodreads.com/book/show/2761177-the-magic-in-your-mind",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349852505588240415/The_magic_in_your_mind.pdf?ex=67d49b9c&is=67d34a1c&hm=7b619ca2f09e897e7edee8faa4527d08d52a1632892d4acbe97f16835ff21884&"
    },
    {
        id: 112,
        title: "The Nature Fix: Why Nature Makes Us Happier, Healthier, and More Creative",
        author: "Florence Williams",
        genre: "Self-Help, Health, Science",
        publishYear: 2017,
        isbn: "978-0393242717",
        description: "Examines how time in nature boosts well-being, creativity, and overall health.",
        coverImage: "images/nature.jpg",
        inStock: true,
        pages: 320,
        publisher: "W. W. Norton",
        language: "English",
        dimensions: "5.5 x 8 inches",
        detailsUrl: "https://www.amazon.com/Nature-Fix-Happier-Healthier-Creative/dp/0393242714",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349852506015928421/The_Nature_Fix__Why_Nature_Makes_us_Happier_Healthier_and_More_Creative_155_.pdf?ex=67d49b9c&is=67d34a1c&hm=7f2c14e5dfbd85b8863c712a3c0fc41650c87e7cbb4bcfb93e868119d35a4e2e&"
    },
    {
        id: 113,
        title: "The Power of Creativity: Learning How to Build Lasting Habits, Face Your Fears, and Change Your Life",
        author: "Susan Adams",
        genre: "Self-Help, Creativity, Personal Development",
        publishYear: 2018,
        isbn: "978-0987654300",
        description: "Encourages developing creative habits to overcome fears and inspire transformation.",
        coverImage: "images/powerof.jpg",
        inStock: true,
        pages: 240,
        publisher: "Creative Minds Press",
        language: "English",
        dimensions: "5.2 x 7.8 inches",
        detailsUrl: "https://www.goodreads.com/book/show/32615400-the-power-of-creativity",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349852506355798208/The_Power_of_Creativity-Learning_How_to_Build_Lasting_Habits_Face_Your_Fears_and_Change_Your_Life__153_.pdf?ex=67d49b9c&is=67d34a1c&hm=a918e6ba3fcf693a9b41226345679c4ce7e14f355fccf2e7ac792d1a735fe0d1&"
    },
    {
        id: 114,
        title: "The Power of Habit by Charles Duhigg",
        author: "Charles Duhigg",
        genre: "Self-Help, Psychology, Business",
        publishYear: 2012,
        isbn: "978-0812981605",
        description: "Explores the science behind habit formation and strategies to change them.",
        coverImage: "images/habit.jpg",
        inStock: true,
        pages: 400,
        publisher: "Random House",
        language: "English",
        dimensions: "5.2 x 8 inches",
        detailsUrl: "https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349852504481075300/The_power_of_habit_Charles_Duhigg.pdf?ex=67d49b9c&is=67d34a1c&hm=a222aa9266363609b294de95367165a1ebda5755d7bf8091d03f7cf0b424672d&"
    },
    {
        id: 115,
        title: "The Power of Now: A Guide to Spiritual Enlightenment",
        author: "Eckhart Tolle",
        genre: "Spirituality, Self-Help, Philosophy",
        publishYear: 1997,
        isbn: "978-1577314806",
        description: "Guides readers to live in the present moment and achieve spiritual clarity.",
        coverImage: "images/powerofnow.webp",
        inStock: true,
        pages: 236,
        publisher: "New World Library",
        language: "English",
        dimensions: "5.0 x 7.8 inches",
        detailsUrl: "https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349852504837460099/The_Power_of_Now__A_Guide_to_Spiritual_Enlightenment.pdf?ex=67d49b9c&is=67d34a1c&hm=cc185c54259552600b1fc3f87f9ab99adc7aa525bb89c08800e49c8e67ce0f98&"
    },
    {
        id: 116,
        title: "The Power of Self-Esteem",
        author: "Nathaniel Branden",
        genre: "Self-Help, Psychology, Personal Development",
        publishYear: 1994,
        isbn: "978-0743507829",
        description: "Discusses the vital role of self-esteem in achieving success and personal fulfillment.",
        coverImage: "images/selfesteem.jpg",
        inStock: true,
        pages: 320,
        publisher: "Impact Books",
        language: "English",
        dimensions: "5.3 x 8 inches",
        detailsUrl: "https://www.amazon.com/Power-Self-Esteem-Inspiring-Important-Psychological/dp/1558742131",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349852505210880091/The_Power_of_Self-Esteem.pdf?ex=67d49b9c&is=67d34a1c&hm=73a9bba6ebeeb718d64d06ea068149584f93179f26fe5d6af0a5a07ae229b8c7&"
    },
    {
        id: 117,
        title: "The Quick and Easy Way to Effective Speaking",
        author: "Dale Carnegie",
        genre: "Self-Help, Communication, Business",
        publishYear: 1962,
        isbn: "978-0671724006",
        description: "Provides simple techniques for improving public speaking and persuasive communication.",
        coverImage: "images/quick.jpg",
        inStock: true,
        pages: 256,
        publisher: "Simon & Schuster",
        language: "English",
        dimensions: "5.5 x 8 inches",
        detailsUrl: "https://www.amazon.com/Quick-Easy-Way-Effective-Speaking/dp/0671724002",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349853935501836400/The_Quick_and_Easy_Way_to_Effective_Speaking.pdf?ex=67d49cf1&is=67d34b71&hm=08f825a36725c8bd5818e2a8c1934aa1556c2b68a6ccdc86e574fa935c9156a6&"
    },
    {
        id: 118,
        title: "The Road Less Traveled, 25th Anniversary Edition: A New Psychology of Love, Traditional Values, and Spiritual Growth",
        author: "M. Scott Peck",
        genre: "Self-Help, Psychology, Spirituality",
        publishYear: 1978,
        isbn: "978-0684847245",
        description: "Combines psychological insights with spiritual wisdom to encourage personal growth.",
        coverImage: "images/road.jpg",
        inStock: true,
        pages: 320,
        publisher: "Simon & Schuster",
        language: "English",
        dimensions: "5.6 x 8 inches",
        detailsUrl: "https://www.amazon.com/Road-Less-Traveled-Timeless-Traditional/dp/0743243153",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349853935845773533/The_Road_Less_Traveled_25th_Anniversary_Edition___A_New_Psychology_of_Love_Traditional_Values_and_Spiritual_Growth.pdf?ex=67d49cf1&is=67d34b71&hm=a9e1fdd36c8e65f433dc63d2f9e0df297bd552c627b61f4a2193f80f52bcd5b6&"
    },
    {
        id: 119,
        title: "Think and Grow Rich by Napoleon Hill",
        author: "Napoleon Hill",
        genre: "Self-Help, Business, Personal Development",
        publishYear: 1937,
        isbn: "978-0449214923",
        description: "A classic guide to achieving wealth and success through the power of positive thinking.",
        coverImage: "images/rich.jpg",
        inStock: true,
        pages: 320,
        publisher: "The Ralston Society",
        language: "English",
        dimensions: "5.5 x 8 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Think_and_Grow_Rich?utm_source=chatgpt.com",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349853936214999132/Think_and_Grow_Rich_by_Napoleon.pdf?ex=67d49cf1&is=67d34b71&hm=f3d8cea29ec48a36b59a92839fdc8c783e74ba3e1e222e1e3d2bbad295ae512a&"
    },
    {
        id: 120,
        title: "Think! Before It's Too Late",
        author: "Unknown",
        genre: "Self-Help, Motivation, Personal Development",
        publishYear: 2000,
        isbn: "978-0987654290",
        description: "A motivational call to action encouraging proactive thinking and life changes.",
        coverImage: "images/think.jpg",
        inStock: true,
        pages: 200,
        publisher: "Inspire Books",
        language: "English",
        dimensions: "5.2 x 7.8 inches",
        detailsUrl: "https://www.amazon.com/Think-Before-Its-Too-Late/dp/009192409X?utm_source=chatgpt.com",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349853936533635152/Think__Before_Its_Too_Late.pdf?ex=67d49cf1&is=67d34b71&hm=9349bc30d025d130e7aaa2eca7d738ebac00ff63b5f1b5686787e4b3f90f89ed&"
    },
    {
        id: 121,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        genre: "Psychology, Business, Non-Fiction",
        publishYear: 2011,
        isbn: "978-0374533557",
        description: "Delves into the dual systems of thought and their impact on decision-making.",
        coverImage: "images/thinkingfas.jpg",
        inStock: true,
        pages: 499,
        publisher: "Farrar, Straus and Giroux",
        language: "English",
        dimensions: "5.8 x 8.2 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349854186422140958/Thinking_Fast_and_Slow.pdf?ex=67d49d2d&is=67d34bad&hm=b996d110dddac6434b07b502b86e467a1d830e8d8452cf5caca14693746eecd3&"
    },
    {
        id: 122,
        title: "When I Say No, I Feel Guilty",
        author: "Cheryl Richardson",
        genre: "Self-Help, Psychology, Personal Development",
        publishYear: 1998,
        isbn: "978-0553374570",
        description: "Addresses overcoming guilt and setting healthy boundaries in personal relationships.",
        coverImage: "images/guilty.jpg",
        inStock: true,
        pages: 192,
        publisher: "HarperCollins",
        language: "English",
        dimensions: "5.3 x 8 inches",
        detailsUrl: "https://www.amazon.com/When-Say-No-Feel-Guilty/dp/0553263900",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349854318513356951/When_I_Say_No_I_Feel_Guilty.pdf?ex=67d49d4c&is=67d34bcc&hm=b7adfdfb322ca3a417e6281c0804520174c77e9a9f3d5c3136f6d62a9e974777&"
    },
    {
        id: 123,
        title: "Who Do You Think You Are?",
        author: "Unknown",
        genre: "Self-Help, Psychology, Personal Development",
        publishYear: 2010,
        isbn: "978-0987654280",
        description: "Encourages self-reflection to understand and redefine one’s identity and purpose.",
        coverImage: "images/who.jpg",
        inStock: true,
        pages: 220,
        publisher: "Mindful Publishing",
        language: "English",
        dimensions: "5.2 x 7.8 inches",
        detailsUrl: "https://www.amazon.com/s?k=Who+Do+You+Think+You+Are",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349854318962020452/Who_do_you_think_you_are_158.pdf?ex=67d49d4c&is=67d34bcc&hm=26ccae1003864d0ac660fb285be87997155432f28adfc2723f4c30169f645f2f&"
    },
    {
        id: 124,
        title: "Who Moved My Cheese?",
        author: "Spencer Johnson",
        genre: "Self-Help, Business, Motivation",
        publishYear: 1998,
        isbn: "978-0399144465",
        description: "A simple parable revealing profound truths about change in work and life.",
        coverImage: "images/cheese.jpg",
        inStock: true,
        pages: 94,
        publisher: "G. P. Putnam's Sons",
        language: "English",
        dimensions: "5.0 x 7.5 inches",
        detailsUrl: "https://en.wikipedia.org/wiki/Who_Moved_My_Cheese%3F",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349854317682626592/Who_Moved_My_Cheese.pdf?ex=67d49d4c&is=67d34bcc&hm=406fd322b0decadf444ca44130d1d743816443a7cacc055ec848448e50798ee1&"
    },
    {
        id: 125,
        title: "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
        author: "Jen Sincero",
        genre: "Self-Help, Personal Development, Motivation",
        publishYear: 2013,
        isbn: "978-0762447695",
        description: "A blunt, humorous guide to overcoming self-doubt and achieving personal success.",
        coverImage: "images/badass.jpg",
        inStock: true,
        pages: 256,
        publisher: "Running Press",
        language: "English",
        dimensions: "5.2 x 7.8 inches",
        detailsUrl: "https://www.amazon.com/You-Are-Badass-Doubting-Greatness/dp/0762447699",
        downloadUrl: "https://cdn.discordapp.com/attachments/1348754383382253609/1349854318148321452/You_Are_a_Badass__How_to_Stop_Doubting_Your_Greatness_and_Start_Living_an_Awesome_Life.pdf?ex=67d49d4c&is=67d34bcc&hm=9b3fc09c4bdd80e60a78c5414dae8785c195f2c0d72866998d48e5d060950aba&"
    },
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the site
    loadFeaturedBooks();
    setupSearchFunctionality();
    setupTabFunctionality();
    checkForBookDetailView();
});

// Load featured books on the homepage
function loadFeaturedBooks() {
    const featuredBooksContainer = document.querySelector('.featured-books .book-grid');
    if (!featuredBooksContainer) return;
    
    // Show all Harry Potter books in the featured section
    books.forEach(book => {
        featuredBooksContainer.appendChild(createBookCard(book));
    });
}


// Create a book card element with the new structure and download button
function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    
    // Use custom URLs if they exist, otherwise use the default format
    const detailsUrl = book.detailsUrl || `book-details.html?id=${book.id}`;
    const downloadUrl = book.downloadUrl || `downloads/${book.id}.pdf`;
    
    bookCard.innerHTML = `
        <div class="book-cover">
            <img src="${book.coverImage}" alt="${book.title}">
            <div class="book-description">
                <p>${book.description}</p>
            </div>
        </div>
        <div class="book-info">
            <h3>${book.title}</h3>
            <p class="author">${book.author}</p>
            <p class="genre">Genre: ${book.genre}</p>
            <div class="book-actions">
                <a href="${detailsUrl}" class="view-details" target="_blank">View Details</a>
                <a href="${downloadUrl}" class="download-book" target="_blank"><i class="fas fa-download"></i> Download</a>
            </div>
        </div>
    `;
    
    return bookCard;
}
// Setup search functionality
function setupSearchFunctionality() {
    const searchForm = document.getElementById('search-form');
    if (!searchForm) return;
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const categoryFilter = document.getElementById('category-filter').value;
        
        // Perform search
        const searchResults = books.filter(book => {
            // Match search text
            const matchesSearch = searchInput === '' || 
                                  book.title.toLowerCase().includes(searchInput) || 
                                  book.author.toLowerCase().includes(searchInput) ||
                                  book.isbn.includes(searchInput);
            
            // Match category if selected
            const matchesCategory = categoryFilter === '' || 
                                   book.genre.toLowerCase().includes(categoryFilter.toLowerCase());
            
            return matchesSearch && matchesCategory;
        });
        
        // Display search results
        displaySearchResults(searchResults);
    });
}

// Display search results
function displaySearchResults(results) {
    const featuredSection = document.querySelector('.featured-books');
    if (!featuredSection) return;
    
    // Change section title
    const sectionTitle = featuredSection.querySelector('h2');
    sectionTitle.textContent = `Search Results (${results.length} books found)`;
    
    // Replace content
    const bookGrid = featuredSection.querySelector('.book-grid');
    bookGrid.innerHTML = '';
    
    if (results.length === 0) {
        const noResults = document.createElement('p');
        noResults.textContent = 'No books match your search criteria. Please try again.';
        bookGrid.appendChild(noResults);
    } else {
        results.forEach(book => {
            bookGrid.appendChild(createBookCard(book));
        });
    }
    
    // Scroll to results
    featuredSection.scrollIntoView({ behavior: 'smooth' });
}

// Setup tab functionality for book details
function setupTabFunctionality() {
    const tabButtons = document.querySelectorAll('.tab-button');
    if (tabButtons.length === 0) return;
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and content
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// Check if we're on a book detail page and load the appropriate book
function checkForBookDetailView() {
    const detailsContainer = document.querySelector('.book-details-container');
    if (!detailsContainer || detailsContainer.style.display === 'none') return;
    
    // Get book ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('id'));
    
    if (bookId) {
        const book = books.find(b => b.id === bookId);
        if (book) {
            displayBookDetails(book);
        }
    }
}

// Display book details on the book details page
function displayBookDetails(book) {
    const detailsContainer = document.querySelector('.book-details-container');
    if (!detailsContainer) return;
    
    // Display the container
    detailsContainer.style.display = 'block';
    
    // Set book title
    document.querySelector('.book-title').textContent = book.title;
    
    // Set book author
    document.querySelector('.book-author').innerHTML = `By <a href="author.html?name=${encodeURIComponent(book.author)}">${book.author}</a>`;
    
    // Set book cover
    document.querySelector('.book-cover-large img').src = book.coverImage;
    document.querySelector('.book-cover-large img').alt = book.title;
    
    // Set metadata
    document.querySelector('.book-genre').textContent = book.genre;
    document.querySelector('.book-publish-date').textContent = `Published: ${book.publishYear}`;
    document.querySelector('.book-isbn').textContent = `ISBN: ${book.isbn}`;
    
    // Set availability
    const availabilityElement = document.querySelector('.book-availability .status');
    if (book.inStock) {
        availabilityElement.textContent = 'In Stock';
        availabilityElement.className = 'status available';
    } else {
        availabilityElement.textContent = 'Out of Stock';
        availabilityElement.className = 'status unavailable';
    }
    
    // Set description
    document.querySelector('.book-description p').textContent = book.description;
    
    // Set additional details
    const detailsList = document.querySelector('#details-tab ul');
    detailsList.innerHTML = `
        <li><strong>Number of Pages:</strong> ${book.pages}</li>
        <li><strong>Publisher:</strong> ${book.publisher}</li>
        <li><strong>Language:</strong> ${book.language}</li>
        <li><strong>Dimensions:</strong> ${book.dimensions}</li>
    `;
    
    // Load similar books (in this case, other Harry Potter books)
    loadSimilarBooks(book);
}

// Load similar books in the book details page
function loadSimilarBooks(book) {
    const similarBooksContainer = document.querySelector('.similar-books-grid');
    if (!similarBooksContainer) return;
    
    // Find other Harry Potter books, excluding the current book
    const similarBooks = books.filter(b => b.id !== book.id);
    
    // Display up to 3 similar books
    similarBooksContainer.innerHTML = '';
    similarBooks.slice(0, 3).forEach(similarBook => {
        similarBooksContainer.appendChild(createBookCard(similarBook));
    });
}


// Scroll event listener for header and sections animation
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollTop = document.querySelector('.scroll-top');
    const sections = document.querySelectorAll('section');
    
    // Change header style on scroll
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        scrollTop.classList.add('visible');
    } else {
        header.classList.remove('scrolled');
        scrollTop.classList.remove('visible');
    }
    
    // Animate sections on scroll
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Scroll to top button
const scrollTopButton = document.querySelector('.scroll-top');
if (scrollTopButton) {
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}