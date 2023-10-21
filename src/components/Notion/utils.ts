import request from "axios";

export const loadNotionContent = (type, id) => {
  const apiCompletionPromise = request({
    method: "GET",
    url: `https://notion-api.splitbee.io/v1/${type}/${id}`,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_NOTION_TOKEN}`,
    },
  });
  return apiCompletionPromise;
};

// export const loadNotionContent = (type, id) => {
//   const notion = new Client({ auth: process.env.NOTION_TOKEN });

//   await notion.databases.
// };
