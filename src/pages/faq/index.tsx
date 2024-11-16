import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Pyramid,
  Landmark,
  Ship,
  Compass,
} from "lucide-react";
import Slider from "react-slick";
import MainSectionBg from "@/components/organisms/MainSectionBg";
import Faq from "../../../public/assets/phar.jpg";

const faqData = [
  {
    title: "Luxor: Ancient Capital",
    icon: <Pyramid className="h-6 w-6" />,
    questions: [
      {
        question: "What are the main attractions in Luxor's East Bank?",
        answer:
          "The East Bank of Luxor houses two of Egypt's most magnificent temple complexes: Karnak Temple and Luxor Temple. Karnak Temple, dedicated to Amun-Ra, is the largest religious complex ever built, featuring the stunning Hypostyle Hall with 134 massive columns. Luxor Temple, connected to Karnak by the Avenue of Sphinxes, is spectacular when lit up at night. Visit the Luxor Museum to see exquisite artifacts, including items from Tutankhamun's tomb.",
      },
      {
        question: "What can I explore in Luxor's West Bank?",
        answer:
          "The West Bank contains the Valley of the Kings, home to 63 royal tombs including Tutankhamun's famous burial chamber. Visit the Temple of Hatshepsut, an architectural marvel built into limestone cliffs. Don't miss the Colossi of Memnon, two massive stone statues of Pharaoh Amenhotep III. The Valley of the Queens and the Workers Village at Deir el-Medina offer insights into ancient Egyptian life and burial practices.",
      },
      {
        question: "What unique experiences are available in Luxor?",
        answer:
          "Take a sunrise hot air balloon ride over the Nile Valley for breathtaking views of temples and tombs. Join a sunset felucca sail on the Nile River. Experience the Karnak Temple Sound and Light Show in the evening. Visit an alabaster workshop to see traditional stone carving. Explore the local souk (market) for authentic Egyptian spices and crafts. Morning visits are recommended for most outdoor sites to avoid peak afternoon heat.",
      },
    ],
  },
  {
    title: "Cairo & Giza",
    icon: <Landmark className="h-6 w-6" />,
    questions: [
      {
        question: "What's included in the Giza Pyramid Complex tour?",
        answer:
          "The Giza Complex features the Great Pyramid of Khufu, Pyramid of Khafre, and Pyramid of Menkaure. The Great Sphinx lies in front of Khafre's pyramid. Visit the Solar Boat Museum to see Khufu's preserved ancient ship. The site offers camel rides and panoramic desert viewpoints. Early morning or late afternoon visits provide the best lighting for photography and more comfortable temperatures.",
      },
      {
        question: "What are Cairo's essential historical sites?",
        answer:
          "Visit the Egyptian Museum in Tahrir Square to see the world's largest collection of Pharaonic antiquities, including Tutankhamun's treasures. Explore Islamic Cairo, including the Citadel of Saladin, Muhammad Ali Mosque, and the Khan el-Khalili bazaar. The Coptic area features the Hanging Church and Ben Ezra Synagogue, showcasing Egypt's religious diversity. Don't miss Al-Azhar Mosque, one of the world's oldest universities.",
      },
      {
        question: "What desert adventures are available from Cairo?",
        answer:
          "Take a day trip to Saqqara to see the Step Pyramid of Djoser and ancient tombs. Visit Dahshur's Red and Bent Pyramids with fewer crowds than Giza. Experience the Wadi El Hitan (Valley of the Whales) UNESCO site showcasing prehistoric whale fossils in the desert. Adventure into the Western Desert to see the unique White Desert formations and camp under the stars.",
      },
    ],
  },
  {
    title: "Aswan: Nubian Heritage",
    icon: <Ship className="h-6 w-6" />,
    questions: [
      {
        question: "What are Aswan's top attractions?",
        answer:
          "Visit the majestic Philae Temple, rescued from flooding and rebuilt on Agilkia Island. Explore the Unfinished Obelisk, providing insights into ancient stone-cutting techniques. Tour the Aswan High Dam, an engineering marvel. Take a felucca ride around Elephantine Island and visit the Nilometer. The Nubian Museum showcases the rich history and culture of ancient Nubia.",
      },
      {
        question: "Tell me about the Abu Simbel excursion from Aswan",
        answer:
          "Abu Simbel, featuring two massive rock temples built by Ramesses II, is accessible via a 3-hour drive or short flight from Aswan. The temples were incredibly relocated in the 1960s to save them from the rising waters of Lake Nasser. The main temple is aligned so that twice a year, the sun illuminates the inner sanctuary. Most tours leave Aswan early morning to arrive for sunrise, providing spectacular photo opportunities.",
      },
      {
        question: "What unique cultural experiences does Aswan offer?",
        answer:
          "Visit a traditional Nubian village to experience local hospitality, colorful houses, and authentic cuisine. Take a boat to the botanical gardens on Kitchener's Island to see exotic plants. Experience a traditional Nubian music and dance performance. Shop at the famous Aswan Spice Market for aromatic spices and traditional remedies. Many visitors enjoy sunset dinner cruises with views of the Nile cataracts.",
      },
    ],
  },
  {
    title: "Alexandria: Mediterranean Gem",
    icon: <Compass className="h-6 w-6" />,
    questions: [
      {
        question: "What are Alexandria's Greco-Roman highlights?",
        answer:
          "Explore the Catacombs of Kom el Shoqafa, featuring a unique blend of Egyptian, Greek, and Roman art. Visit Pompey's Pillar and the ancient Roman amphitheater. The recently opened Tomb of Mostafa Kamel showcases beautiful Hellenistic paintings. The Roman Villa of the Birds displays remarkable mosaic floors. These sites reveal Alexandria's rich multicultural heritage.",
      },
      {
        question: "What modern cultural sites should I visit?",
        answer:
          "The iconic Bibliotheca Alexandrina, a modern reimagining of the ancient library, houses multiple museums and art galleries. Visit the Royal Jewelry Museum in a former palace. The National Museum of Alexandria showcases artifacts from all periods of the city's history. The Mahmoud Said Museum features works by one of Egypt's pioneering modern artists. The Stanley Bridge offers spectacular Mediterranean views.",
      },
      {
        question: "What coastal experiences are available?",
        answer:
          "Walk the Corniche, Alexandria's waterfront promenade, to see the historic Cecil Hotel and local fishermen. Visit the 15th-century Qaitbay Citadel, built on the site of the ancient Lighthouse of Alexandria. Explore the underwater archaeological park featuring ancient ruins. The Montazah Palace Gardens offer beautiful coastal walks and architecture. Fresh seafood restaurants along the coast serve Mediterranean specialties.",
      },
    ],
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Slick settings for mobile carousel
  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.8,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.7,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <>
      {" "}
      <MainSectionBg
        title="FAQ"
        backgroundImage={Faq}
        breadcrumbs={[{ text: "Home", link: "/" }, { text: "FAQ" }]}
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pt-16 lg:pt-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Sidebar with Mobile Carousel */}
          <aside className="lg:w-1/4 w-full">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Egyptian Cities Guide
              </h2>

              {/* Mobile Carousel */}
              <div className="block lg:hidden mb-6">
                <Slider {...slickSettings}>
                  {faqData.map((section, index) => (
                    <div key={index} className="px-2">
                      <button
                        onClick={() => setActiveTab(index)}
                        className={`w-fit mr-3 cursor-pointer p-4 flex items-center transition-all duration-200 ${
                          activeTab === index
                            ? "bg-blue-100 text-blue-900"
                            : "bg-white text-gray-600 hover:bg-blue-50"
                        }`}
                      >
                        <div className="flex flex-row items-center gap-3 w-fit">
                          <div className="text-current">{section.icon}</div>
                          <span className="font-medium text-sm whitespace-nowrap">
                            {section.title}
                          </span>
                        </div>
                      </button>
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:block space-y-2">
                {faqData.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                      activeTab === index
                        ? "bg-blue-100 text-blue-900"
                        : "text-gray-600 hover:bg-blue-50"
                    }`}
                  >
                    {section.icon}
                    <span className="font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h1 className="text-3xl font-bold text-blue-900 mb-6">
                {faqData[activeTab].title}
              </h1>

              {/* Search Bar */}
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="Search attractions and experiences..."
                  onChange={handleSearch}
                  className="w-full h-12 px-4 pr-12 rounded-lg border-2 border-blue-200 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                />
                <Search className="absolute right-4 top-3.5 h-5 w-5 text-blue-400" />
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {faqData[activeTab].questions
                  .filter(
                    (q) =>
                      q.question.toLowerCase().includes(searchQuery) ||
                      q.answer.toLowerCase().includes(searchQuery)
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-blue-100 last:border-0 pb-4"
                    >
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="w-full flex items-center justify-between gap-4 text-left"
                      >
                        <h3 className="text-lg font-medium text-gray-800">
                          {item.question}
                        </h3>
                        <ChevronDown
                          className={`h-5 w-5 text-blue-500 transition-transform duration-200 flex-shrink-0 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openIndex === index && (
                        <p className="mt-4 text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default FAQ;
