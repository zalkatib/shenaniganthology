import request from "axios";

export const loadNotionContent = (type, pageId) => {
  const apiCompletionPromise = request({
    method: "GET",
    url: `https://notion-api.splitbee.io/v1/${type}/${pageId}`,
  });
  return apiCompletionPromise;
};

