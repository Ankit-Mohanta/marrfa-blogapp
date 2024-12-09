export interface BlogPost {
    title: string;
    banner: string;
    tags: string[];
    metaDescription: string;
    content: string[];
  }

  export function searchBlogs(query: string): BlogPost[] {
    const lowercaseQuery = query.toLowerCase();
    return blogs.filter(blog => 
      blog.title.toLowerCase().includes(lowercaseQuery) ||
      blog.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      blog.content.some(paragraph => paragraph.toLowerCase().includes(lowercaseQuery))
    );
  }

export const blogs = [
    {
        "title": "The Adventures of Lila and the Talking Tree",
        "banner": "https://wallpapercave.com/wp/wp14841371.webp",
        "tags": ["children's story", "adventure", "friendship", "magic", "nature"],
        "metaDescription": "Discover the magical journey of Lila as she befriends a talking tree and learns the secrets of the forest in this heartwarming children's story.",
        "content": [
            "Once upon a time in a quiet little village surrounded by lush forests, lived a curious girl named Lila. She loved exploring the woods near her home, always on the lookout for something magical.",
            "One sunny afternoon, as she wandered deeper into the forest, she stumbled upon an enormous oak tree. Its bark was engraved with strange symbols, and its leaves shimmered as if sprinkled with gold dust. To her amazement, the tree spoke, 'Hello, little one. I’ve been waiting for you.'",
            "Lila was startled but quickly intrigued. The tree introduced itself as Oakley, the guardian of the forest, who could only speak to those with a kind heart. Oakley explained that the forest was losing its magic because people were forgetting to take care of nature.",
            "Eager to help, Lila decided to spread awareness in her village. She worked tirelessly with Oakley, organizing forest cleanups, planting trees, and teaching her friends the importance of respecting the environment.",
            "Word spread, and soon, the villagers joined Lila in her efforts. The forest began to thrive once more, and Oakley’s golden leaves glowed brighter than ever. 'You’ve done something wonderful, Lila,' Oakley said. 'The magic of the forest will always remember you.'",
            "From that day on, Lila became the forest’s young guardian, visiting Oakley often and sharing stories of their adventures with the village children. And so, the forest remained a magical place, protected by the bond between a girl and a talking tree."
        ]
    },
    {
        "title": "The Brave Little Kite",
        "banner": "https://wallpapercave.com/wp/wp13817902.jpg",
        "tags": ["children's story", "courage", "perseverance", "wind", "dreams"],
        "metaDescription": "Follow the journey of a little kite who dreams of flying higher than ever, overcoming obstacles with courage and determination.",
        "content": [
            "In a small seaside town, there was a little kite named Breezy who dreamed of soaring above the clouds. But Breezy was afraid of the strong winds.",
            "One day, the wind whispered, 'Trust me, little kite, and I will take you higher than you’ve ever been.'",
            "Breezy hesitated but decided to try. With the help of a kind boy named Sam, Breezy began to rise. At first, the wind was wild, and Breezy wobbled and spun, feeling scared.",
            "But Sam’s gentle words and the wind’s encouragement helped Breezy stay steady. Higher and higher she went, until she could see the entire town and the glittering sea below.",
            "Breezy realized that her fears had been holding her back. She learned that with a little courage and trust, she could achieve her dreams.",
            "From that day on, Breezy became the happiest kite, dancing with the wind and inspiring others to overcome their fears."
        ]
    },
    {
        "title": "Tommy and the Mysterious Egg",
        "banner": "https://wallpapercave.com/wp/wp14841373.webp",
        "tags": ["children's story", "mystery", "friendship", "animals", "adventure"],
        "metaDescription": "Join Tommy on his adventure as he discovers a mysterious egg in the woods and learns the value of kindness and friendship.",
        "content": [
            "Tommy loved exploring the woods behind his house. One spring morning, he found a shiny, colorful egg nestled among the leaves.",
            "Curious, Tommy took the egg home and kept it warm. Days later, it hatched, and out came a tiny creature with scales, feathers, and a mischievous grin.",
            "'I’m Zippy!' the creature chirped. 'I got lost from my home.'",
            "Tommy and Zippy became best friends. Together, they searched the woods to find where Zippy belonged, meeting helpful animals along the way.",
            "Finally, they discovered a magical clearing with creatures just like Zippy. Zippy was home! But the bond between Tommy and Zippy remained unbreakable.",
            "Tommy learned that helping others not only makes them happy but also brings unexpected joys in return."
        ]
    },
    {
        "title": "Luna’s Starry Rescue",
        "banner": "https://wallpapercave.com/wp/wp14841376.webp",
        "tags": ["children's story", "stars", "magic", "kindness", "teamwork"],
        "metaDescription": "When a star falls from the sky, Luna embarks on a magical adventure to return it home, teaching the power of kindness and teamwork.",
        "content": [
            "Luna loved stargazing from her bedroom window. One night, a tiny star fell from the sky and landed in her backyard.",
            "The star, named Twinkle, whispered, 'I need help to return home!'",
            "Luna set off on a magical journey with Twinkle, seeking the Star Ladder that reached back to the sky. Along the way, they faced challenges but were helped by a friendly owl, a wise turtle, and a brave squirrel.",
            "Together, they found the Star Ladder. Luna said goodbye to Twinkle, watching as it climbed back into the sky, shining brighter than ever.",
            "From that night on, Luna felt a special connection to the stars, knowing her kindness had made a difference.",
            "She learned that helping others can light up your own world in unexpected ways."
        ]
    },
    {
        "title": "The Secret of Willow Pond",
        "banner": "https://wallpapercave.com/wp/wp14841375.webp",
        "tags": ["children's story", "mystery", "adventure", "nature", "teamwork"],
        "metaDescription": "Dive into the enchanting world of Willow Pond as Max and Mia unravel a magical secret hidden beneath its surface.",
        "content": [
            "Max and Mia loved playing near Willow Pond, but strange ripples often appeared, even when the water was still.",
            "One day, they decided to investigate. Using a small rowboat, they ventured to the center of the pond and discovered an old key tied to a floating branch.",
            "The key led them to a hidden cave where they found glowing fish and a talking frog named Fred.",
            "'The pond’s magic is fading because people are polluting it,' Fred explained.",
            "Determined to help, Max and Mia rallied their friends and neighbors to clean up the pond. The magic returned, and the pond sparkled like never before.",
            "Fred thanked them, and Max and Mia became the protectors of Willow Pond, ensuring its beauty for years to come."
        ]
    },
    {
        "title": "Ella and the Rainbow Bridge",
        "banner": "https://wallpapercave.com/wp/wp14841374.webp",
        "tags": ["children's story", "imagination", "dreams", "adventure", "colors"],
        "metaDescription": "Join Ella as she discovers a magical rainbow bridge that takes her on an unforgettable journey filled with colorful lessons about friendship and bravery.",
        "content": [
            "Ella loved painting rainbows. One day, while drawing in her backyard, a real rainbow appeared and formed a bridge.",
            "Curious, Ella stepped onto the bridge and found herself in Rainbow Land, a magical world where colors had feelings.",
            "But trouble was brewing—Gloom, a mischievous shadow, was stealing colors from the land. The reds were pale, the blues were dull, and the greens were fading.",
            "Ella teamed up with the Rainbow Guardians to restore the colors. She painted the land back to life using her imagination and bravery.",
            "With the colors restored, the Rainbow Land shone brighter than ever. Ella said goodbye, knowing she could return whenever her heart needed a little magic.",
            "Back home, Ella’s paintings seemed to glow, reminding her of her magical adventure and the power of creativity."
        ]
    },
    {
        "title": "Penny and the Whispering Seashell",
        "banner": "https://wallpapercave.com/wp/wp14841379.webp",
        "tags": ["children's story", "ocean", "magic", "friendship", "adventure"],
        "metaDescription": "Follow Penny as she discovers a magical seashell that leads her to an underwater world filled with enchanting creatures and valuable lessons about kindness.",
        "content": [
            "Penny loved collecting seashells at the beach. One day, she found a shimmering seashell that whispered, 'Help us, Penny.'",
            "To her amazement, the shell transported her to an underwater kingdom where sea creatures were worried about their home being covered in trash.",
            "Penny teamed up with a brave dolphin named Splash and a clever octopus named Ink to clean the coral reefs and teach the visitors about protecting the ocean.",
            "The kingdom sparkled once more, and the sea creatures celebrated with a glowing festival of lights.",
            "The seashell thanked Penny and returned her to the shore, where she shared her story with others, inspiring them to keep the ocean clean.",
            "Penny learned that even small acts of kindness can create waves of change."
        ]
    },
    {
        "title": "The Clockmaker’s Apprentice",
        "banner": "https://wallpapercave.com/wp/wp14841380.webp",
        "tags": ["children's story", "time", "magic", "adventure", "learning"],
        "metaDescription": "Embark on an enchanting journey with Leo, the clockmaker's apprentice, as he discovers a magical clock that can freeze time and teach valuable lessons.",
        "content": [
            "In a bustling town, Leo worked as an apprentice for Mr. Tinker, the town's best clockmaker. One day, he discovered a golden clock hidden in the workshop.",
            "Curious, Leo wound the clock, and suddenly, time froze! Birds hovered in mid-air, and people stood still.",
            "Mr. Tinker appeared, explaining that the clock was magical and could only be used to solve great problems.",
            "Leo used the frozen moments to help townsfolk—rescuing a runaway cart, repairing broken toys, and reuniting lost pets.",
            "The town grew happier and more harmonious, and Leo realized the value of using time wisely.",
            "Mr. Tinker smiled, proud of Leo’s good heart, and said, 'You are ready to be more than an apprentice now.'"
        ]
    },
    {
        "title": "Milo and the Midnight Library",
        "banner": "https://wallpapercave.com/wp/wp14841370.webp",
        "tags": ["children's story", "books", "imagination", "adventure", "mystery"],
        "metaDescription": "Discover the magical Midnight Library with Milo, where books come to life, and every story leads to a new adventure.",
        "content": [
            "Milo loved books, but his town’s library closed at night. One evening, a secret door appeared in his room, leading to the Midnight Library.",
            "Inside, every book glowed, and when Milo opened one, its story came to life! He sailed with pirates, flew with dragons, and explored ancient pyramids.",
            "But trouble arose when a mischievous character escaped a book, causing chaos in the library.",
            "With the help of a talking book named Lexi, Milo returned the character to its story and restored order to the Midnight Library.",
            "Before leaving, Lexi said, 'Your love for stories makes you a guardian of imagination. Visit anytime.'",
            "Milo woke up back in his room, holding a glowing bookmark—a reminder of his incredible adventure."
        ]
    },
    {
        "title": "The Garden of Wishes",
        "banner": "https://wallpapercave.com/uwp/uwp4578927.png",
        "tags": ["children's story", "magic", "nature", "dreams", "friendship"],
        "metaDescription": "Journey to the Garden of Wishes with Sophie as she learns the value of gratitude and kindness in this magical adventure.",
        "content": [
            "Sophie loved her small garden but wished it could be more magical. One evening, she found a glowing seed packet labeled 'Wish Seeds.'",
            "She planted the seeds, and by morning, a vibrant, magical garden appeared. Flowers whispered wishes, trees sparkled, and fountains sang melodies.",
            "Sophie realized the garden granted wishes, but only for those with kind and selfless hearts.",
            "When her neighbors visited, Sophie helped grant their wishes, bringing joy to everyone.",
            "One day, the garden whispered, 'Your kindness has made this magic possible.' The garden became a permanent place of happiness in the town.",
            "Sophie learned that true magic lies in sharing and caring for others."
        ]
    },

]