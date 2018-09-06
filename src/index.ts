import app from "./app";

const PORT: string | number = process.env.PORT || 2019;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
