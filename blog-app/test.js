const objectData = {
  description: "congchuabuoito",
  email: "tinphamvan123@gmail.com, 3",
  facebook: "tinspham.209, 6",
  github: "tinspham209, 2",
  instagram: "phamthitins, 7",
  linkedin: "phamvantins, 5",
  mainImage: {
    asset: {
      _id: "image-733dbb70a0816470099500a5c19760b2ce0abbce-640x641-png",
      url: "https://cdn.sanity.io/images/hprnqulw/production/733dbb70a0816470099500a5c19760b2ce0abbce-640x641.png",
    },
  },
  name: "Phạm Văn Tín",
  phoneNumber: "932535175, 4",
  slug: {
    _type: "slug",
    current: "phamvantins",
  },
  website: "https://tinspham.info, 1",
  zalo: "932535175, 8",
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const object = [
  "email",
  "facebook",
  "instagram",
  "momo",
  "phoneNumber",
  "website",
  "zalo",
  "github",
  "linkedin",
];

arr.forEach((index) => {
  Object.entries(objectData).forEach(([key, value]) => {
    let data = "";
    if (typeof value === "string" && object.includes(key)) {
      data = value.split(",");
      if (data[1] == index) {
        console.log(index);
        console.log(data[1], data[0]);
      }
    }
  });
});
