a?.b;

a?.b?.c;

a?.b?.c?.d;

a?.[0]?.[1]?.[2];

a?.b?.[0]?.c?.[variable];

a.b?.c?.d;

a.b.c?.d?.e?.f;

a?.[0];

a?.[a[a[a[a[a.b.c]]]]]

a?.[x[x[0]][x[1]]];

function test() {
    return {
        result: items?.[0]?.totalCount || 0,
    };
}
