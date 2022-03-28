import request from "axios";

export const loadNotionContent = (pageId) => {
  const apiCompletionPromise = request({
    method: "GET",
    url: `https://notion-api.splitbee.io/v1/page/${pageId}`,
  });
  return apiCompletionPromise;
};
