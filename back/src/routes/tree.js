import { getTree } from "../controllers/tree.js";

export const tree = {
  public: (router) => {
    router.get(`/get_tree`, getTree);       
  }
}