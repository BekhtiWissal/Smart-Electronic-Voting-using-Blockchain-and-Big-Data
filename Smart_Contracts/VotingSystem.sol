// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingSystem {
    struct Vote {
        string voterID;
        string candidateID;
        uint256 votingTime;
        string dataHash; // Hash of the detailed data stored off-chain
    }

    mapping(string => Vote) public votes; // Mapping voter ID to vote
    uint256 public totalVotes; // Variable to store the total number of votes

    event VoteCasted(string voterID, string candidateID, uint256 votingTime, string dataHash);

    function castVote(string memory _voterID, string memory _candidateID, uint256 _votingTime, string memory _dataHash) public {
        // Additional checks like voter eligibility can be added here
        votes[_voterID] = Vote(_voterID, _candidateID, _votingTime, _dataHash);
        totalVotes++;
        emit VoteCasted(_voterID, _candidateID, _votingTime, _dataHash);
    }

    function getVote(string memory _voterID) public view returns (Vote memory) {
        return votes[_voterID];
    }

    function getTotalVotes() public view returns (uint256) {
        return totalVotes;
    }
}