import { Octokit } from 'octokit';

export default function App() {
  const fetching = async () => {
    const octokit = new Octokit();

    // {
    //   auth: ACCESS_TOKEN;
    // }
    const user = {
      owner: 'yonghyeun',
      repo: 'React-study',
    };
    const res = await octokit.request(
      'GET /repos/{owner}/{repo}/contents/9.Manipulating-DOM-With-Refs/src',
      {
        owner: user.owner,
        repo: user.repo,
      },
    );
    const json = await res.data;
    console.log(json);
    return json;
  };

  fetching();
  return <h1>하위 ~ ^^ </h1>;
}
