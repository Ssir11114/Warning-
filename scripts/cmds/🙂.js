module.exports = {
  config: {
    name: "🙂",
    version: "1.0.5",
    author: "MR.AYAN",
    countDown: "5",
    role: "0",
    shortDescription: "no prefix mariya",
    longDescription:"no prefix mariya",
    category: "no prefix reply",
    },
    onStart: async function(){},
    onChat: async function({
      event,
      message,
      getlang,
    }) {
      if (event.bady && event.body.toLowerCase() == "🙂") return message.reply("- ai halar put mon kharap korby to usta khaby😒");
   }
 };
