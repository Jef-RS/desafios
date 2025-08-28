import fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";

interface MangaParams {
  id: string;
}

interface MangaListModel {
  id: number;
  titulo: string;
  autor: string;
}

interface MangaListServiceModel {
  statusCode: number;
  mangas: MangaListModel[] | { message: string };
}

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
});

const PORT = (process.env.PORT && parseInt(process.env.PORT)) || 3000;

let mangas: MangaListModel[] = [
  { id: 1, titulo: "Naruto", autor: "Masashi Kishimoto" },
  { id: 2, titulo: "One Piece", autor: "Eiichiro Oda" },
  { id: 3, titulo: "Death Note", autor: "Tsugumi Ohba" },
];

const mangaListService = async (
  mangas: MangaListModel[]
): Promise<MangaListServiceModel[]> => {
  const content = {
    statusCode: (mangas: MangaListModel[]) => (mangas.length > 0 ? 200 : 404),
    mangas: (mangas: MangaListModel[]) =>
      mangas.length > 0 ? mangas : { message: "No mangas found" },
  };

  return [
    {
      statusCode: content.statusCode(mangas),
      mangas: content.mangas(mangas),
    },
  ];
};

const getMangaList = async (req: FastifyRequest, res: FastifyReply) => {
  const [{ mangas: content, statusCode }] = await mangaListService(mangas);
  res.type("application/json").status(statusCode);
  return content;
};

server.get("/mangas", async (req, res) => await getMangaList(req, res));

server.get<{ Params: MangaParams }>("/mangas/:id", async (req, res) => {
  const id = parseInt(req?.params?.id);

  const found = mangas?.find((m) => m.id === id);
  const manga = found ? [found] : [];

  const [{ mangas: content, statusCode }] = await mangaListService(manga);

  res.type("application/json").status(statusCode);
  return content;
});

server.listen({ port: PORT });
