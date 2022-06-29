import { Prisma, PrismaClient, Team } from '@prisma/client';
import members from './data/members.json';
import teams from './data/teams.json';
import roster from './data/roster.json';
import cash_flows from './data/cash_flows.json';
import fixtures from './data/fixtures.json';

const prisma = new PrismaClient({
  log: ['info', 'warn', 'error'],
});

const seed = async () => {
  // Wipe previous data
  await prisma.member.deleteMany({});
  await prisma.team.deleteMany({});
  await prisma.roster.deleteMany({});
  await prisma.cashFlow.deleteMany({});
  await prisma.fixture.deleteMany({});

  await createMembers();
  await createTeams();
  await createRoster();
  await createCashFlows();
  await createFixtures();
};

async function createMembers() {
  const _members: Prisma.MemberCreateInput[] = [];
  members.forEach((member) => {
    _members.push({
      fullName: member.fullName,
      birthdate: new Date(member.birthdate),
      address: member.address,
      postalCode: member.postalCode!,
      location: member.location,
      phone: member.phoneNumber,
      photo: member.photo,
      email: member.email,
    });
  });

  await prisma.member.createMany({
    data: _members,
  });

  return await prisma.member.findMany({});
}

async function createTeams() {
  const _teams: Prisma.TeamCreateInput[] = [];
  teams.forEach((team) => {
    _teams.push({
      step: team.step,
      name: team.name,
      shorthand_name: team.shorthand_name,
      competition: team.competition,
      logo: team.logo,
    });
  });

  await prisma.team.createMany({
    data: _teams,
  });

  return await prisma.team.findMany({});
}

async function createRoster() {
  const _roster: Prisma.RosterCreateInput[] = [];
  roster.forEach((player) => {
    _roster.push({
      firstName: player.firstName,
      secondName: player.secondName!,
      photo: player.photo,
      nationality: player.nationality,
      age: player.age,
      number: player.number,
      position: player.position,
      zerozeroId: player.zerozeroId,
      step: player.step,
    });
  });

  await prisma.roster.createMany({
    data: _roster,
  });

  return await prisma.roster.findMany({});
}

async function createCashFlows() {
  const _cash_flows: Prisma.CashFlowCreateInput[] = [];
  cash_flows.forEach((cash_flow) => {
    _cash_flows.push({
      amount: cash_flow.amount,
      type: cash_flow.type,
      description: cash_flow.description,
      category: cash_flow.category,
    });
  });

  await prisma.cashFlow.createMany({
    data: _cash_flows,
  });

  return await prisma.cashFlow.findMany({});
}

async function createFixtures() {
  const _fixtures: Prisma.FixtureCreateManyInput[] = [];
  fixtures.forEach((fixture) => {
    _fixtures.push({
      date: new Date(fixture.date),
      location: fixture.location,
      venue: fixture.venue,
      homeTeamId: fixture.homeTeamId,
      awayTeamId: fixture.awayTeamId,
      homeTeamGoals: fixture.homeTeamGoals,
      awayTeamGoals: fixture.awayTeamGoals,
      competition: fixture.competition,
      round: fixture.round,
    });
  });

  await prisma.fixture.createMany({
    data: _fixtures,
  });

  return prisma.fixture.findMany({});
}

seed();

export default seed;
