const TOPGG_SECRET = "5f1a4826-41ae-401b-bef3-07ed96b4a65b";

const POST = async (req, res) => {
   const { user: userId } = req.body;

   res.status(200).json({ message: `Vote has been recorded for ${userId}.` });
};

const BumpInfo = async (req, res) => {
   const { authorization } = req.headers;

   if (!authorization) {
      return res.status(401).json({ error: "Unauthorized" });
   }

   if (authorization !== TOPGG_SECRET) {
      return res.status(401).json({ error: "Unauthorized" });
   }

   if (req.method === "POST") {
      await POST(req, res);
   } else {
      res.status(405).end();
   }
};

export default BumpInfo;