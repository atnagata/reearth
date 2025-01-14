import { useParams } from "react-router-dom";

import NotFound from "@reearth/beta/components/NotFound";
import Editor from "@reearth/beta/features/Editor";
import { isTab } from "@reearth/beta/features/Navbar";
import { AuthenticationRequiredPage } from "@reearth/services/auth";

type Props = {};

const EditorPage: React.FC<Props> = () => {
  const { sceneId, tab } = useParams<{ sceneId: string; tab: string }>();

  return !sceneId || !tab || !isTab(tab) ? (
    <NotFound />
  ) : (
    <AuthenticationRequiredPage>
      <Editor tab={tab} sceneId={sceneId} />
    </AuthenticationRequiredPage>
  );
};

export default EditorPage;
