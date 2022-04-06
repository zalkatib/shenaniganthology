import request from "axios";

export const loadNotionContent = (type, id) => {
  const apiCompletionPromise = request({
    method: "GET",
    url: `https://notion-api.splitbee.io/v1/${type}/${id}`,
  });
  return apiCompletionPromise;
};

