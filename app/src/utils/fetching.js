import { Octokit } from 'octokit';

const octokit = new Octokit({});

export const fetchIssue = async ({ owner, repo }) => {
  const res = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner,
    repo,
  });

  const body = await res.data;

  return body;
};
