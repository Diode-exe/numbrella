import React, { useEffect, useState } from "react";
import {useRouter, useSearchParams} from 'next/navigation'
import { PrettyChar } from '../../prettyChar'
import { NumberFormatter } from '../../numberFormatter'

const pretty = PrettyChar.allCharacters();


let names = new Map<string, string>();
names.set("One"                     ,"10^0");
names.set("Ten"                     ,"10^1");
names.set("Hundred"                 ,"10^2");
names.set("Thousand"                ,"10^3");
names.set("Million"                 ,"10^6");
names.set("Billion"                 ,"10^9");
names.set("Trillion"                ,"10^12");
names.set("Quadrillion"             ,"10^15");
names.set("Quintillion"             ,"10^18");
names.set("Sextillion"              ,"10^21");
names.set("Septillion"              ,"10^24");
names.set("Octillion"               ,"10^27");
names.set("Nonillion"               ,"10^30");
names.set("Decillion"               ,"10^33");
names.set("Undecillion"             ,"10^36");
names.set("Duodecillion"            ,"10^39");
names.set("Tredecillion"            ,"10^42");
names.set("Quattuordecillion"       ,"10^45");
names.set("Quindecillion"           ,"10^48");
names.set("Sexdecillion"            ,"10^51");
names.set("Septendecillion"         ,"10^54");
names.set("Octodecillion"           ,"10^57");
names.set("Novemdecillion"          ,"10^60");
names.set("Vigintillion"            ,"10^63");
names.set("Unvigintillion"          ,"10^66");
names.set("Duovigintillion"         ,"10^69");
names.set("Trevigintillion"         ,"10^72");
names.set("Quattuorvigintillion"    ,"10^75");
names.set("Quinvigintillion"        ,"10^78");
names.set("Sexvigintillion"         ,"10^81");
names.set("Septenvigintillion"      ,"10^84");
names.set("Octovigintillion"        ,"10^87");
names.set("Novemvigintillion"       ,"10^90");
names.set("Trigintillion"           ,"10^93");
names.set("Untrigintillion"         ,"10^96");
names.set("Duotrigintillion"        ,"10^99");
names.set("Googol"                  ,"10^100");
names.set("Trestrigintillion"       ,"10^102");
names.set("Quarttourtrigintillion"  ,"10^105");
names.set("Quinquatrigintillion"    ,"10^108");
names.set("Sestrigintillion"        ,"10^111");
names.set("Septemtrigintillion"     ,"10^114");
names.set("Octotrigintillion"       ,"10^117");
names.set("Novemtrigintillion"      ,"10^120");
names.set("Quadragintillion"        ,"10^123");
names.set("Unquadragintillion"      ,"10^153");
names.set("Duoquadragintillion"     ,"10^303");
names.set("Trequadragintillion"     ,"10^306");
names.set("Quattuorquadragintillion","10^309");
names.set("Quinquadragintillion"    ,"10^312");
names.set("Sexquadragintillion"     ,"10^315");
names.set("Septenquadragintillion"  ,"10^318");
names.set("Octoquadragintillion"    ,"10^321");
names.set("Novemquadragintillion"   ,"10^324");
names.set("Quinquagintillion"       ,"10^327");
names.set("Unquinquagintillion"     ,"10^330");
names.set("Duoquinquagintillion"    ,"10^333");
names.set("Trequinquagintillion"    ,"10^336");
names.set("Quattuorquinquagintillion","10^339");
names.set("Quinquinquagintillion"   ,"10^342");
names.set("Sexquinquagintillion"    ,"10^345");
names.set("Septenquinquagintillion" ,"10^348");
names.set("Octoquinquagintillion"   ,"10^351");
names.set("Novemquinquagintillion"  ,"10^354");
names.set("Sexagintillion"          ,"10^357");
names.set("Unsexagintillion"        ,"10^360");
names.set("Duosexagintillion"       ,"10^363");
names.set("Tresexagintillion"       ,"10^366");
names.set("Quattuorsexagintillion"  ,"10^369");
names.set("Quinsexagintillion"      ,"10^372");
names.set("Sexsexagintillion"       ,"10^375");
names.set("Septensexagintillion"    ,"10^378");
names.set("Octosexagintillion"      ,"10^381");
names.set("Novemsexagintillion"     ,"10^384");
names.set("Septuagintillion"        ,"10^387");
names.set("Unseptuagintillion"      ,"10^390");
names.set("Duoseptuagintillion"     ,"10^393");
names.set("Treseptuagintillion"     ,"10^396");
names.set("Quattuorseptuagintillion","10^399");
names.set("Quinseptuagintillion"    ,"10^402");
names.set("Sexseptuagintillion"     ,"10^405");
names.set("Septenseptuagintillion"  ,"10^408");
names.set("Octoseptuagintillion"    ,"10^411");
names.set("Novemseptuagintillion"   ,"10^414");
names.set("Octogintillion"          ,"10^417");
names.set("Unoctogintillion"        ,"10^420");
names.set("Duooctogintillion"       ,"10^423");
names.set("Treoctogintillion"       ,"10^426");
names.set("Quattuoroctogintillion"  ,"10^429");
names.set("Quinoctogintillion"      ,"10^432");
names.set("Sexoctogintillion"       ,"10^435");
names.set("Septemoctogintillion"    ,"10^438");
names.set("Octooctogintillion"      ,"10^441");
names.set("Novemoctogintillion"     ,"10^444");
names.set("Nonagintillion"          ,"10^447");
names.set("Unnonagintillion"        ,"10^450");
names.set("Duononagintillion"       ,"10^453");
names.set("Trenonagintillion"       ,"10^456");
names.set("Quattuornonagintillion"  ,"10^459");
names.set("Quinnonagintillion"      ,"10^462");
names.set("Sexnonagintillion"       ,"10^465");
names.set("Septennonagintillion"    ,"10^468");
names.set("Octononagintillion"      ,"10^471");
names.set("Novemnonagintillion"     ,"10^474");
names.set("Centillion"              ,"10^477");

function formatted(expanded: string, bw: boolean): React.ReactElement[] {
  const digitsArray = NumberFormatter.formatNumberWithBreaks(expanded).split("");

  // Create an array of <div> elements to hold each digit
  const elements: React.ReactElement[] = digitsArray.map((digit, index) => {
    const prettyStyle = (bw.toString() == "true")
      ? pretty.filter(n=> n.id == "0")[0].prettyStyle
      : pretty.filter(n=> n.id == digit)[0].prettyStyle;
    const combinedClasses = `${prettyStyle}`;
    return (
      <span className={combinedClasses} key={index}>
        {digit}
      </span>
    );
  });

  return elements;
}

export default function Page() {
  const elements: React.ReactElement[] = [];

  names.forEach((v, k) => {
    elements.push(
      <tr className="m-5 p-5">
        {Formula(k, v, false)}
      </tr>
    );
  });

  return (
  <>
    <table className="table-fixed">
      <thead>
        <tr>
          <th className="text-left">Notation</th>
          <th className="text-left">Short Scale Name</th>
          <th className="text-left">Number</th>
        </tr>
      </thead>
      <tbody>
        {elements}
      </tbody>
    </table>
  </>
  )
}

function Formula(key: string, value: string, bw: boolean) {
  const zeroes = parseInt(value.replace("10^",""));
  const valueBase = value.split("^")[0];
  const valueExpanded = `1${'0'.repeat(zeroes)}`;
  return (
      <>
        <td style={{ margin: '20px' }} className="text-left pr-8 tracking-wide font-mono text-3xl font-black text-gray-500">
          {valueBase}
          <span className="ordinal text-xl align-top">{formatted(zeroes.toString(), bw)}</span>
        </td>
        <td style={{ margin: '20px' }} className="text-left pr-8 tracking-wide font-mono text-3xl font-black">{key}</td>
        <td style={{ margin: '20px' }} className="text-left pr-8 tracking-wide font-mono text-3xl font-black">{formatted(valueExpanded, bw)}</td>
      </>
    )
}
