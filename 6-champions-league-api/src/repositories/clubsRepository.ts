import path from "path";
import fs from "fs";

export const selectClubsRepository = async () => {
  const filePath = path.join(__dirname, "..", "data", "clubsData.json");
  const clubs = fs.readFileSync(filePath, "utf-8");
  const clubsData = await JSON.parse(clubs);

  return clubsData;
};
