/**
 * Testimonials supplied by SenaTrades. Text is reproduced as provided
 * (emoji removed for typography); excerpts are verbatim sentences from the
 * full message. Do not edit wording, add results, or add testimonials that
 * have not been supplied and approved by the person quoted.
 *
 * `teamMember: true` discloses that the person is part of the SenaTrades team.
 */
export type Testimonial = {
  id: string;
  name: string;
  teamMember?: boolean;
  excerpt: string;
  full: string[];
};

export const testimonials: Testimonial[] = [
  {
    id: "peprah",
    name: "Peprah",
    excerpt:
      "I now approach the market with clarity and execute trades with precision, discipline and confidence.",
    full: [
      "@Proph11 is an exceptional mentor, and the truth is, every moment spent learning from him is transformative.",
      "I personally had interest in forex for a while but was doing it all by myself hence I had no clear structure but when i encountered him and enrolled under his mentorship, that was one of the best decisions I have ever made in my life. I now approach the market with clarity and execute trades with precision, discipline and confidence. SenaTrades is truly a gem, and I couldn’t have asked for a better mentor.",
    ],
  },
  {
    id: "jeff-goodman",
    name: "Jeff Goodman",
    excerpt:
      "We don’t just receive signals and blindly follow them. We analyze, discuss, and understand the market together as a team.",
    full: [
      "I just want to take a moment to appreciate and testify about my mentor, Mr, SENA.",
      "Mr. Sena is not only an excellent forex trading mentor, but also a very humble man and a powerful man of God. What makes this mentorship different is that he doesn’t only guide us through forex trading; he also guides and encourages us through the Word of God. His wisdom, humility, patience, and dedication to his mentees are truly remarkable.",
      "I had been trading forex for about 2-3 years before joining this mentorship. I thought I was going to figure everything out by myself. But looking back now, I realize that most of those years were filled with trial and error, confusion, and trying different things without a clear direction.",
      "Joining this mentorship was a game changer. Since I joined, my entire approach to forex trading has changed. The knowledge, discipline, understanding, and structure I have gained are completely different from what I knew before.",
      "And the mentorship group we are part of is absolutely mind-blowing. We don’t just receive signals and blindly follow them. We analyze, discuss, and understand the market together as a team before anything goes out. That teamwork and learning process have made a huge difference for me.",
      "Mr Sena, you have truly done a great job. May God continue to bless you, increase your wisdom, strengthen you, and reward you for the lives you are impacting.",
      "I have never regretted joining this mentorship. In fact, I’m grateful that I made the decision to become part of this team.",
      "I will always proudly mention your name as MY MENTOR, because you have genuinely made an impact in my trading journey.",
      "Thank You Mr. Sena may God bless u in abundantly.",
    ],
  },
  {
    id: "lady-mkay",
    name: "Lady Mkay",
    excerpt: "Directional bias, the best thing that has happened to me with Prince.",
    full: [
      "Prince or Proph the name I call him with. I bless the day I met him. Words can't explain how grateful I am.",
      "When I met him, I was already trading with a known strategy... but my problem was, I didn't know how to navigate where market was going, where market could reverse from. Ie Directional Bias.",
      "I could just enter a trade with little knowledge about where to put my TP/SL, because the strategy I was using was focused only on entry.",
      "DIRECTIONAL BIAS THE BEST THING THAT HAS HAPPENED TO ME WITH PRINCE.",
      "God Bless You Proph. I know am one prodigal daughter, But know your daughter loves u more for what You have done for her, I appreciate all.",
    ],
  },
  {
    id: "ackimpoh-fx",
    name: "Ackimpoh Fx",
    excerpt:
      "Since joining this community, I’ve gained valuable knowledge, learned to identify setups, and developed a better understanding of the market.",
    full: [
      "I’m truly grateful to my mentor, Sena Trade for his humility, patience, and guidance throughout this mentorship journey. I’ve been in the trading industry for almost two years, but honestly, I was trading without a proper understanding of what I was doing. Since joining this community, I’ve gained valuable knowledge, learned to identify setups, and developed a better understanding of the market. I’m seeing real improvement in my trading journey, and I’m thankful for the impact he’s made in my growth. May God bless him abundantly.",
    ],
  },
  {
    id: "alphaeus",
    name: "Alphaeus",
    excerpt: "Mr Sena also has patience never rush in thing makes sure you get it before you move really appreciate that.",
    full: [
      "Mr Sena also has patience never rush in thing makes sure you get it before you move really appreciate that. You're a great teacher and Mentor God bless you very much.",
    ],
  },
  {
    id: "shad",
    name: "Shad",
    excerpt:
      "I truly appreciate the time and effort you have invested in helping me learn and grow.",
    full: [
      "I just want to take a moment to sincerely thank you for the knowledge, wisdom, and guidance you have shared with me. I truly appreciate the time and effort you have invested in helping me learn and grow. The things I have learned from you mean a lot to me, and I do not take your support for granted.",
      "I’m grateful to have you as my mentor, and I pray that God continues to bless you with more wisdom, strength, good health, and success in all your endeavours. Thank you for being a blessing to my journey. I look forward to learning even more from you.",
    ],
  },
  {
    id: "nelo-fx",
    name: "Nelo Fx",
    excerpt:
      "You didn’t just teach me back in primary school; you’ve stayed by my side and continued to guide me all the way into forex trading.",
    full: [
      "Daddy, I’ve been reflecting on my journey, and I just want to take a moment to truly thank you. You didn’t just teach me back in primary school; you’ve stayed by my side and continued to guide me all the way into forex trading. Paying for courses and classes just so I can grow and better myself is a level of kindness and support I don’t take for granted. Thank you for always believing in me, investing in my future, and treating me like your own son. I’m so blessed to have you in my life.",
    ],
  },
  {
    id: "nana-ama",
    name: "Nana Ama",
    teamMember: true,
    excerpt:
      "You're proud and loud about your mentees success and not threatened by their growth and I love that about you.",
    full: [
      "As a pioneer and one of the first \"lab rats\" in starting this mentorship, I say God bless you and bless the day you asked me to be your trading partner.",
      "You removed the logs from my eyes, took my vision from 10% to 80% in a week. It's your dedication and determination for me. You've carried me along this trading journey, that giving up isn't an option. You're proud and loud about your mentees success and not threatened by their growth and I love that about you.",
      "I'm grateful our paths crossed. Keep on being You! The sky is your stepping stone... Soar High",
    ],
  },
  {
    id: "reynolds",
    name: "Reynolds",
    teamMember: true,
    excerpt:
      "He has been and is still and will forever be a great leader with great impact.",
    full: [
      "We all have unlimited gratitude to give to the Leader, Boss, Director, Instructor and Teacher @Proph11 Sena Trades…. He has been and is still and will forever be a great leader with great impact.",
    ],
  },
];

export const testimonialsDisclaimer =
  "Testimonials reflect the personal experiences of individual learners and team members. They are not representative of all learners and are not a guarantee of future performance or trading results.";
