// ethers is already injected
console.log("Fetching VotingSystem contract");
const contract = $contracts["VotingSystem"];

const provider = new ethers.providers.JsonRpcProvider('https://rpc.vnet.tenderly.co/devnet/sev/bcc92197-2b7d-41f7-9461-f9628b88427a');

async function deployAndInteract() {
  console.log("Deploying VotingSystem contract");
  const votingSystemContract = await factory.deploy();

  console.log("Casting votes...");
  await votingSystemContract.castVote("Voter1", "CandidateA", Date.now(), "DataHashA");
  await votingSystemContract.castVote("Voter2", "CandidateB", Date.now(), "DataHashB");
  await votingSystemContract.castVote("Voter3", "CandidateC", Date.now(), "DataHashB");

  console.log("Getting total votes");
  const totalVotes = await votingSystemContract.getTotalVotes();
  console.log("Total Votes:", totalVotes);

  console.log("Getting vote information for Voter1");
  const voteInfoVoter1 = await votingSystemContract.getVote("Voter1");
  console.log("Vote Info for Voter1:", voteInfoVoter1);

  console.log("Getting vote information for Voter2");
  const voteInfoVoter2 = await votingSystemContract.getVote("Voter2");
  console.log("Vote Info for Voter2:", voteInfoVoter2);
 
  console.log("Getting vote information for Voter3");
  const voteInfoVoter3 = await votingSystemContract.getVote("Voter3");
  console.log("Vote Info for Voter3:", voteInfoVoter3);
 

}

deployAndInteract();