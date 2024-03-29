(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2782],
  {
    60638: function (e, t, a) {
      'use strict';
      a.d(t, {
        kd: function () {
          return n;
        },
        Oq: function () {
          return l;
        },
        gj: function () {
          return d;
        },
      });
      var i,
        n,
        s = a(61888),
        r = a(45021);
      function o(e, t) {
        var a = e.slice().sort(function (e, t) {
            return e - t;
          }),
          i = t * (a.length - 1),
          n = Math.floor(i),
          s = Math.ceil(i);
        if (n === s) return a[n];
        var r = i - n;
        return (1 - r) * a[n] + r * a[s];
      }
      ((i = n || (n = {})).FirstTokenLatency = 'first_token_lat'),
        (i.TotalRequestTime = 'total_request_time'),
        (i.TokenCount = 'token_count'),
        (i.StdDevTokenLatency = 'std_dev_token_lat'),
        (i.MeanTokenLatency = 'mean_token_lat'),
        (i.MedianTokenLatency = 'median_token_lat'),
        (i.MinTokenLatency = 'min_token_lat'),
        (i.MaxTokenLatency = 'max_token_lat'),
        (i.P95TokenLatency = 'p95_token_lat'),
        (i.P99TokenLatency = 'p99_token_lat');
      var l = function (e) {
          var t,
            a = e.filter(function (e) {
              return e.requestCount > 1;
            }),
            i = e.length ? e[0] : null,
            r = o(
              a.map(function (e) {
                return e.lastTokenDuration;
              }),
              0.95
            ),
            l = o(
              a.map(function (e) {
                return e.lastTokenDuration;
              }),
              0.99
            ),
            d = (0, s.mean)(
              a.map(function (e) {
                return e.lastTokenDuration;
              })
            ),
            c = (function (e) {
              if (0 === e.length) return null;
              var t = e.slice().sort(function (e, t) {
                  return e - t;
                }),
                a = Math.floor(t.length / 2);
              return t.length % 2 == 0 ? (t[a - 1] + t[a]) / 2 : t[a];
            })(
              a.map(function (e) {
                return e.lastTokenDuration;
              })
            ),
            u = a
              .filter(function (e) {
                return 0 !== e.lastTokenDuration;
              })
              .reduce(function (e, t) {
                return Math.min(e, t.lastTokenDuration);
              }, 1 / 0),
            m = a.reduce(function (e, t) {
              return Math.max(e, t.lastTokenDuration);
            }, -1 / 0),
            x = (function (e) {
              var t = e.length;
              if (0 === t) return 0;
              var a =
                (0 === e.length
                  ? null
                  : e.reduce(function (e, t) {
                      return e + t;
                    }, 0) / e.length) || 0;
              return Math.sqrt(
                e.reduce(function (e, t) {
                  return e + Math.pow(t - a, 2);
                }, 0) / t
              );
            })(
              a.map(function (e) {
                return e.lastTokenDuration;
              })
            ),
            g = null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.requestDuration;
          return [
            {
              id: n.FirstTokenLatency,
              name: 'First Token lat.',
              stat: i ? ''.concat(i.lastTokenDuration.toFixed(2), 'ms') : null,
              value: i ? i.lastTokenDuration : null,
              category: 'summary',
            },
            {
              id: n.TotalRequestTime,
              name: 'Total request time',
              stat: g ? ''.concat((g / 1e3).toFixed(2), 's') : null,
              value: g || null,
              category: 'summary',
            },
            { id: n.TokenCount, name: 'Token count', stat: ''.concat(e.length), value: e.length, category: 'summary' },
            {
              id: n.StdDevTokenLatency,
              name: 'Std dev Token lat.',
              stat: ''.concat(x.toFixed(2)),
              value: x,
              category: 'token',
            },
            {
              id: n.MeanTokenLatency,
              name: 'Mean Token lat.',
              stat: d ? ''.concat(d.toFixed(2), 'ms') : null,
              value: null != d ? d : null,
              category: 'aggregate',
            },
            {
              id: n.MedianTokenLatency,
              name: 'Median Token lat.',
              stat: c ? ''.concat(c.toFixed(2), 'ms') : null,
              value: null != c ? c : null,
              category: 'token',
            },
            {
              id: n.MinTokenLatency,
              name: 'Min Token lat.',
              stat: ''.concat(u.toFixed(2), 'ms'),
              value: null != u ? u : null,
              category: 'token',
            },
            {
              id: n.MaxTokenLatency,
              name: 'Max Token lat.',
              stat: ''.concat(m.toFixed(2), 'ms'),
              value: null != m ? m : null,
              category: 'token',
            },
            {
              id: n.P95TokenLatency,
              name: 'p95 Token lat.',
              stat: r ? ''.concat(r.toFixed(2), 'ms') : null,
              value: null != r ? r : null,
              category: 'aggregate',
            },
            {
              id: n.P99TokenLatency,
              name: 'p99 Token lat.',
              stat: l ? ''.concat(l.toFixed(2), 'ms') : null,
              value: null != l ? l : null,
              category: 'aggregate',
            },
          ];
        },
        d = function () {
          var e,
            t = (0, r.JP)(),
            a = (0, r.AA)();
          if (!t || !a) return { stats: [], targetLatencyData: [] };
          var i = t[a],
            n = null !== (e = null == i ? void 0 : i.data) && void 0 !== e ? e : [];
          return { stats: l(n), targetLatencyData: n };
        };
    },
    45021: function (e, t, a) {
      'use strict';
      a.d(t, {
        AA: function () {
          return j;
        },
        Ae: function () {
          return g;
        },
        BC: function () {
          return w;
        },
        F4: function () {
          return x;
        },
        JP: function () {
          return M;
        },
        Q7: function () {
          return y;
        },
        WD: function () {
          return v;
        },
        gL: function () {
          return f;
        },
        iZ: function () {
          return k;
        },
        j7: function () {
          return b;
        },
        kn: function () {
          return p;
        },
      });
      var i = a(96237),
        n = a(39324),
        s = a(71209),
        r = a(64502),
        o = a(86646),
        l = a(78103),
        d = a(60638),
        c = (0, l.ZP)(function () {
          return { messagesDevData: {}, activeNodeId: void 0, ui: { focusedNodeId: void 0 } };
        }),
        u = c.getState,
        m = c.setState,
        x = function (e, t, a, r) {
          m(function (o) {
            return (0, s._)((0, n._)({}, o), {
              activeNodeId: e,
              ui: { focusedNodeId: e },
              messagesDevData: (0, s._)(
                (0, n._)({}, o.messagesDevData),
                (0, i._)({}, e, { status: 'active', data: [], model: t, serverRequestId: a, preflightTime: r })
              ),
            });
          });
        },
        g = function (e, t) {
          m(function (a) {
            var o = a.messagesDevData[e];
            return (0, s._)((0, n._)({}, a), {
              activeNodeId: e,
              messagesDevData: (0, s._)(
                (0, n._)({}, a.messagesDevData),
                (0, i._)({}, e, (0, s._)((0, n._)({}, o), { data: (0, r._)(o.data).concat([t]) }))
              ),
            });
          });
        },
        h = function (e, t) {
          var a;
          return null ===
            (a = t.find(function (t) {
              return t.id === e;
            })) || void 0 === a
            ? void 0
            : a.value;
        },
        f = function (e) {
          var t = M()[e],
            a = (0, d.Oq)(t.data),
            i = t.preflightTime,
            n = {
              model: t.model,
              serverRequestId: t.serverRequestId,
              preflightTime: i,
              countTokens: h(d.kd.TokenCount, a),
              tsFirstToken: h(d.kd.FirstTokenLatency, a),
              tsMaxTokenTime: h(d.kd.MaxTokenLatency, a),
              tsMeanTokenWithoutFirst: h(d.kd.MeanTokenLatency, a),
              tsMedianTokenWithoutFirst: h(d.kd.MedianTokenLatency, a),
              tsMinTokenTime: h(d.kd.MinTokenLatency, a),
              tsStdDevTokenTime: h(d.kd.StdDevTokenLatency, a),
              tsP95TokenWithoutFirst: h(d.kd.P95TokenLatency, a),
              tsP99TokenWithoutFirst: h(d.kd.P99TokenLatency, a),
              tsTotalRequestTime: h(d.kd.TotalRequestTime, a),
            };
          o.ZP.postLatencyTimingEvent(n);
        },
        p = function (e) {
          return m(function (t) {
            var a = (0, s._)((0, n._)({}, t.messagesDevData[e]), { status: 'finished' });
            return (0, s._)((0, n._)({}, t), {
              messagesDevData: (0, s._)((0, n._)({}, t.messagesDevData), (0, i._)({}, e, a)),
            });
          });
        },
        v = function (e) {
          return m(function (t) {
            return (0, s._)((0, n._)({}, t), { ui: (0, s._)((0, n._)({}, t.ui), { focusedNodeId: e }) });
          });
        };
      function y(e) {
        var t = Object.keys(M()),
          a = t.indexOf(e);
        if (-1 === a) throw Error('Key not found in object');
        var i = (a + 1) % t.length;
        return t[i];
      }
      function k(e) {
        var t = Object.keys(M()),
          a = t.indexOf(e);
        if (-1 === a) throw Error('Key not found in object');
        var i = (a - 1 + t.length) % t.length;
        return t[i];
      }
      function b(e) {
        return Object.keys(M()).indexOf(e);
      }
      var w = function () {
          return Object.keys(M()).length;
        },
        M = function () {
          return u().messagesDevData;
        },
        j = function () {
          return u().ui.focusedNodeId;
        };
    },
    22048: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return sg;
        },
        n: function () {
          return sx;
        },
      });
      var i,
        n,
        s,
        r,
        o,
        l,
        d,
        c,
        u,
        m,
        x,
        g,
        h,
        f,
        p,
        v,
        y,
        k = a(39324),
        b = a(71209),
        w = a(10064),
        M = a(4337),
        j = a(35250),
        C = a(19841),
        _ = a(70079),
        T = a(1454),
        N = a(21389),
        I = a(35265),
        S = a(67568),
        P = a(54636),
        R = a(42780),
        F = a(70671),
        E = a(94968),
        A = a(61098),
        L = a(51505),
        D = a(55548),
        Z = a(17944),
        B = a(25687),
        q = a(1491),
        z = a(86925),
        U = a(15066),
        O = a(39368),
        V = a(73779),
        G = a(41955),
        H = a(88903),
        Q = a(418),
        W = a(23234),
        $ = a(80275),
        J = a(87694),
        Y = a(86585),
        K = ['#7989FF'],
        X = function (e) {
          var t = e.children;
          return (0, W.Ml)()
            ? (0, j.jsx)('div', {
                className: 'pt-0.5',
                children: (0, j.jsx)('div', {
                  className:
                    'gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full',
                  children: t,
                }),
              })
            : (0, j.jsx)(j.Fragment, { children: t });
        };
      function ee(e) {
        var t,
          a = e.isCompletionRequestInProgress,
          i = e.messages,
          n = e.clientThreadId,
          s = e.isCompletion,
          r = e.avatarColor,
          o = e.showInlineEmbeddedDisplay,
          l = (0, _.useMemo)(
            function () {
              var e = !0,
                t = !1,
                a = void 0;
              try {
                for (var n, s = i[Symbol.iterator](); !(e = (n = s.next()).done); e = !0) {
                  var r = n.value,
                    o = (0, J.ZC)(r).flagSeverity;
                  if (void 0 !== o) return o;
                }
              } catch (e) {
                (t = !0), (a = e);
              } finally {
                try {
                  e || null == s.return || s.return();
                } finally {
                  if (t) throw a;
                }
              }
            },
            [i]
          ),
          d = null === (w = i[0].message.metadata) || void 0 === w ? void 0 : w.shared_conversation_id,
          c = (0, Z.aF)(),
          u = (0, L.UL)(n),
          m = (0, Z.ec)(function (e) {
            var t;
            return null === (t = e.currentWorkspace) || void 0 === t ? void 0 : t.id;
          }),
          x = (0, W.Ml)(),
          g = (0, V.p_)().playgroundTemplate,
          h = (0, V.QH)(),
          f = h.gizmoTemplate,
          p = h.mode,
          v = (0, j.jsx)(X, {
            children: (0, j.jsx)(H.k$, {
              background: null != r ? r : '#19c37d',
              iconName: 'openai',
              notice: null != l ? l : void 0,
              size: x ? 'gizmoConversation' : void 0,
            }),
          }),
          y = (0, Y.i)(n),
          k = x ? 'gizmoConversation' : void 0;
        if (a && i.length > 0) {
          var b = (function (e, t) {
            var a = (0, z.rH)(t.message);
            if (a === z.Cs.Plugin || a === z.Cs.PluginTool) {
              var i = (0, z.Lx)(a === z.Cs.Plugin ? t.message.recipient : t.message.author.name);
              return e.find(function (e) {
                return e.namespace === (null == i ? void 0 : i.namespace);
              });
            }
          })(y, i[i.length - 1]);
          null != b &&
            (v = (0, j.jsx)(X, {
              children: (0, j.jsx)(H.Ph, { plugin: b, notice: null != l ? l : void 0, iconSize: k }),
            }));
        }
        if (null != m && null != u.conversationTemplateId)
          v = (0, j.jsx)(X, {
            children: (0, j.jsx)(H.Ao, { workspaceId: m, templateId: u.conversationTemplateId, iconSize: k }),
          });
        else if (null != g) v = (0, j.jsx)(H.Py, { iconSize: k, conversationTemplate: g });
        else if (null != f && 'test' === p) {
          var w,
            M,
            C = !!(null === (M = null == f ? void 0 : f.config.tags) || void 0 === M
              ? void 0
              : M.includes($.U9.FirstParty));
          v = (0, j.jsx)(Q.Z, { isFirstParty: C, src: f.profile_pic_permalink, className: 'h-6 w-6' });
        }
        return (0, j.jsx)('div', {
          children: s
            ? v
            : null != d || (void 0 !== o && o)
              ? (0, j.jsx)(X, {
                  children: (0, j.jsx)(H.k$, {
                    background:
                      K[(null !== (t = null == d ? void 0 : d.charCodeAt(0)) && void 0 !== t ? t : 0) % K.length],
                    iconName: 'user',
                    size: x ? 'gizmoConversation' : void 0,
                  }),
                })
              : (0, j.jsx)(X, {
                  children: (0, j.jsx)(H.Yt, {
                    user: c,
                    notice: null != l ? l : void 0,
                    size: x ? 'gizmoConversation' : 'medium',
                  }),
                }),
        });
      }
      var et = a(21722),
        ea = a(96237),
        ei = a(85438),
        en = a(38104),
        es = a(48133),
        er = a(38574),
        eo = a(13464);
      function el() {
        var e = (0, M._)(['bg-black rounded-md']);
        return (
          (el = function () {
            return e;
          }),
          e
        );
      }
      function ed() {
        var e = (0, M._)([
          'flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md',
        ]);
        return (
          (ed = function () {
            return e;
          }),
          e
        );
      }
      function ec() {
        var e = (0, M._)(['p-4 overflow-y-auto']);
        return (
          (ec = function () {
            return e;
          }),
          e
        );
      }
      function eu() {
        var e = (0, M._)(['', '']);
        return (
          (eu = function () {
            return e;
          }),
          e
        );
      }
      var em = N.Z.div(el()),
        ex = N.Z.div(ed()),
        eg = N.Z.div(ec()),
        eh = N.Z.code(eu(), function (e) {
          return e.$shouldWrap ? '!whitespace-pre-wrap' : '!whitespace-pre';
        });
      function ef(e) {
        var t = e.children,
          a = e.className,
          i = e.language,
          n = e.content,
          s = (0, _.useCallback)(
            function () {
              (0, er.S)(n);
            },
            [n]
          );
        return (0, j.jsx)(ep, {
          title: i,
          headerDecoration: (0, j.jsx)(eo.Z, { buttonText: 'Copy code', onCopy: s }),
          codeClassName: a,
          children: t,
        });
      }
      function ep(e) {
        var t = e.children,
          a = e.title,
          i = e.headerDecoration,
          n = e.shouldWrapCode,
          s = e.className,
          r = e.codeContainerClassName,
          o = e.codeClassName;
        return (0, j.jsxs)(em, {
          className: s,
          children: [
            (null != a || null != i) && (0, j.jsxs)(ex, { children: [a && (0, j.jsx)('span', { children: a }), i] }),
            (0, j.jsx)(eg, {
              className: r,
              children: (0, j.jsx)(eh, { $shouldWrap: void 0 !== n && n, className: o, children: t }),
            }),
          ],
        });
      }
      var ev = a(21950),
        ey = a(30769),
        ek = a(18481),
        eb = a(6013),
        ew = a(32004),
        eM = a(8844),
        ej = a(66161);
      function eC(e, t) {
        var a = (0, _.useRef)(e);
        (0, _.useEffect)(
          function () {
            a.current = e;
          },
          [e]
        ),
          (0, _.useEffect)(
            function () {
              if (null !== t) {
                var e = window.setInterval(function () {
                  a.current();
                }, t);
                return function () {
                  return clearInterval(e);
                };
              }
            },
            [t]
          );
      }
      var e_ = a(70737),
        eT = a(97296),
        eN = a(43477),
        eI = a(78103),
        eS = (0, eN.Z)(function () {
          return { delayedRenderingMessageIds: new Set() };
        }),
        eP = (0, eI.ZP)(eS);
      function eR() {
        return eP(function (e) {
          return e.delayedRenderingMessageIds;
        });
      }
      var eF = {
          addDelayedRenderingMessage: function (e) {
            eS.setState(function (t) {
              if (t.delayedRenderingMessageIds.has(e)) return t;
              var a = new Set(t.delayedRenderingMessageIds);
              return a.add(e), { delayedRenderingMessageIds: a };
            });
          },
          removeDelayedRenderingMessage: function (e) {
            eS.setState(function (t) {
              if (!t.delayedRenderingMessageIds.has(e)) return t;
              var a = new Set(t.delayedRenderingMessageIds);
              return a.delete(e), { delayedRenderingMessageIds: a };
            });
          },
        },
        eE = a(59904),
        eA = JSON.parse(
          '{"v":"5.7.5","fr":100,"ip":0,"op":400,"w":20,"h":20,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"dot","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[3.5,3.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":1.75,"ix":2}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[10.00000762939453,9.997123718261719],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":1,"k":[{"t":100,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":160,"s":[410],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":200,"s":[360],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":300,"s":[360],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":360,"s":[770],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":400,"s":[720],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"p":{"a":0,"k":[10,10],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":3,"ty":4,"nm":"compass","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":2,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[3.897755676788864,2.156718939201098],[9.466585676788863,0.04442893920109814],[10.31768567678886,0.895618939201098],[8.205185676788863,6.464308939201097],[6.464305676788864,8.205198939201097],[0.8956156767888639,10.3176989392011],[0.04442567678886356,9.466498939201099],[2.156725676788863,3.897748939201098],[3.897755676788864,2.156718939201098],[3.897755676788864,2.156718939201098],[3.897755676788864,2.156718939201098]],"i":[[0,0],[-1.856276666666666,0.7040966666666666],[0.2018000000000004,-0.5320100000000001],[0.7041666666666675,-1.85623],[0.8026800000000005,-0.3044999999999982],[1.85623,-0.7041666666666657],[-0.2018,0.5320999999999998],[-0.7040999999999995,1.8562499999999993],[-0.80274,0.3044900000000004],[0,0],[0,0]],"o":[[1.856276666666667,-0.7040966666666666],[0.532,-0.20181],[-0.7041666666666675,1.8562299999999992],[-0.3044999999999991,0.8025900000000004],[-1.85623,0.7041666666666693],[-0.5320100000000001,0.2018000000000022],[0.7041,-1.85625],[0.3044800000000008,-0.8027300000000004],[0,0],[0,0],[1.856276666666667,-0.7040966666666666]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-5.181057929992676,-5.181064605712891],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0}],"markers":[]}'
        ),
        eL = JSON.parse(
          '{"v":"5.7.5","fr":100,"ip":0,"op":400,"w":20,"h":20,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10,10],"ix":2},"a":{"a":0,"k":[12,12],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":2,"ty":4,"nm":"Path","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[4.3226,0],[0.8041999999999998,0],[0,0.8041],[0.8041999999999998,1.6081],[4.3226,1.6081],[5.126800000000001,0.8041],[4.3226,0],[4.3226,0],[4.3226,0]],"i":[[0,0],[1.1728000000000005,0],[0,-0.4441000000000006],[-0.4441000000000006,0],[-1.1728000000000005,0],[0,0.4441000000000006],[0.4441999999999986,0],[0,0],[0,0]],"o":[[-1.1728000000000005,0],[-0.4441000000000006,0],[0,0.4441000000000006],[1.1728000000000005,0],[0.4441999999999986,0],[0,-0.4441000000000006],[0,0],[0,0],[-1.1728000000000005,0]]}}},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":0.100515,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":70,"s":[11.79640007019043,13.51219940185547],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":146,"s":[11.79640007019043,16.51219940185547],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":148,"s":[11.79640007019043,9.401088290744358],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":195,"s":[11.79640007019043,13.51219940185547],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":270,"s":[11.79640007019043,13.51219940185547],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":346,"s":[11.79640007019043,16.51219940185547],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":348,"s":[11.79640007019043,9.401088290744358],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":395,"s":[11.79640007019043,13.51219940185547],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":1,"k":[{"t":70,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":146,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":195,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":270,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":346,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":348,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":395,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Path","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[1.28704,0.2207774999999987],[0.2208300000000003,0.2207774999999987],[0.2208300000000003,1.286817499999998],[2.100320000000001,3.165917499999999],[0.2208300000000003,5.045017499999998],[0.2208300000000003,6.111017499999999],[1.28704,6.111017499999999],[3.69972,3.6989174999999985],[3.69972,2.6329175],[1.28704,0.2207774999999987],[1.28704,0.2207774999999987],[1.28704,0.2207774999999987]],"i":[[0,0],[0.2944300000000002,-0.2943700000000007],[-0.2944399999999998,-0.2943799999999985],[-0.6264966666666663,-0.6263666666666676],[0.6264966666666671,-0.6263666666666659],[-0.2944399999999998,-0.2943999999999996],[-0.2944300000000002,0.2943999999999996],[-0.8042266666666666,0.8040333333333329],[0.2943999999999996,0.2942999999999998],[0.8042266666666666,0.8040466666666664],[0,0],[0,0]],"o":[[-0.2944300000000002,-0.2943700000000007],[-0.2944399999999998,0.2943800000000003],[0.6264966666666671,0.6263666666666676],[-0.6264966666666663,0.6263666666666659],[-0.2944399999999998,0.2943999999999996],[0.2944300000000002,0.2943999999999996],[0.8042266666666666,-0.8040333333333329],[0.2943999999999996,-0.2943999999999996],[-0.8042266666666666,-0.8040466666666664],[0,0],[0,0],[-0.2944300000000002,-0.2943700000000007]]}}},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":0.201031,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":76,"s":[7.026679992675781,8.836983680725098],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":136,"s":[13.00268173217773,8.834091186523438],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":138,"s":[2,8.834091186523438],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":200,"s":[7.026679992675781,8.834091186523438],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":276,"s":[7.026679992675781,8.834091186523438],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":336,"s":[13,8.834091186523438],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":338,"s":[2,8.834091186523438],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":400,"s":[7.03,8.834091186523438],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":1,"k":[{"t":136,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":200,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":276,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":76,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":136,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":200,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":276,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":336,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":338,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":400,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0}],"markers":[]}'
        ),
        eD = JSON.parse(
          '{"v":"5.7.5","fr":100,"ip":0,"op":400,"w":20,"h":20,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":1,"k":[{"t":50,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[90],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":150,"s":[180],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":250,"s":[180],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":300,"s":[270],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":350,"s":[360],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"p":{"a":0,"k":[10,10],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":2,"ty":4,"nm":"moon","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[2.66029,2.2502500000000003],[2.94257,2.2253300000000005],[3.16411,2.15946],[3.3642200000000004,2.1007100000000003],[3.4624800000000002,2.13988],[3.5,2.24491],[3.48749,2.3303700000000003],[3.45176,2.4336200000000003],[3.17483,2.87157],[2.79071,3.2080400000000004],[2.32261,3.42523],[1.8027100000000003,3.5],[1.08448,3.36648],[0.5109700000000004,2.9926200000000005],[0.13400000000000034,2.4229400000000005],[0,1.70727],[0.13935999999999993,1.0129700000000001],[0.5306300000000004,0.4290440000000002],[1.1219999999999999,0.03738600000000025],[1.2095500000000001,0.00890100000000027],[1.2881600000000004,2.220446049250313e-16],[1.4007100000000001,0.042726000000000264],[1.4435900000000004,0.14954200000000017],[1.4275099999999998,0.23855500000000018],[1.3864200000000002,0.33290900000000023],[1.3256800000000002,0.49313300000000027],[1.2881600000000004,0.6960800000000003],[1.2756499999999997,0.9150600000000002],[1.3703399999999997,1.4722800000000003],[1.6472699999999998,1.8942000000000003],[2.0832100000000002,2.15946],[2.66029,2.2502500000000003],[2.66029,2.2502500000000003],[2.66029,2.2502500000000003]],"i":[[0,0],[-0.09170999999999996,0.016619999999999635],[-0.05597999999999992,0.027300000000000324],[-0.05837000000000003,0],[-0.02382000000000062,-0.02610999999999919],[0,-0.04390999999999945],[0.00833999999999957,-0.03204999999999991],[0.016680000000000028,-0.03678999999999988],[0.1131599999999997,-0.13056],[0.14412000000000003,-0.09376000000000051],[0.16795000000000027,-0.04985000000000017],[0.17985000000000007,0],[0.21915999999999958,0.08901000000000003],[0.16317999999999966,0.16141999999999967],[0.08932999999999947,0.2183799999999998],[0,0.25873999999999997],[-0.09290999999999983,0.21957000000000004],[-0.16794000000000064,0.16853600000000002],[-0.22510999999999992,0.09138599999999997],[-0.026209999999999845,0.005934999999999913],[-0.025020000000000486,0],[-0.02739000000000047,-0.028484000000000065],[0,-0.04272599999999993],[0.010720000000000063,-0.030856999999999912],[0.017869999999999386,-0.03323100000000001],[0.01666999999999952,-0.06290200000000001],[0.008329999999999949,-0.07357999999999998],[0,-0.07359000000000004],[-0.06312999999999924,-0.16497000000000006],[-0.12029999999999941,-0.11630999999999991],[-0.17032999999999987,-0.06170999999999971],[-0.21321000000000012,0],[0,0],[0,0]],"o":[[0.09647000000000006,0],[0.09172000000000047,-0.016620000000000523],[0.07504000000000044,-0.03915999999999986],[0.041679999999999495,0],[0.025009999999999977,0.026110000000000078],[0,0.02493000000000034],[-0.00714000000000059,0.03204000000000029],[-0.07146000000000008,0.16141000000000005],[-0.11195999999999984,0.1305500000000004],[-0.14412000000000003,0.09493999999999936],[-0.1667500000000004,0.04985000000000017],[-0.2596600000000002,0],[-0.21916000000000047,-0.0878300000000003],[-0.16198000000000068,-0.16141000000000005],[-0.08933000000000035,-0.21838000000000068],[0,-0.24329999999999985],[0.0929000000000002,-0.22075],[0.16913,-0.16971899999999995],[0.03216000000000019,-0.013056000000000068],[0.02738999999999958,-0.005933999999999995],[0.04763999999999946,0],[0.02858999999999945,0.028484999999999983],[0,0.028484000000000065],[-0.009520000000000195,0.02967200000000003],[-0.02382000000000062,0.04391400000000001],[-0.016680000000000028,0.06171700000000002],[-0.008340000000000458,0.07240000000000002],[0,0.20650999999999997],[0.06432000000000038,0.16496999999999984],[0.1203000000000003,0.11512999999999995],[0.1715099999999996,0.06052999999999997],[0,0],[0,0],[0.09647000000000006,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[3.75,5.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-180,"ix":2},"o":{"a":1,"k":[{"t":50,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":140,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":250,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":280,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":350,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"sun","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[3.00708,3.00704],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-2.1999998092651376,-3.507655143737793],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":1,"k":[{"t":50,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":80,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":150,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":250,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":300,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":340,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[18,18],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":2}},{"ty":"fl","c":{"a":0,"k":[1,0.8392156862745098,0.25098039215686274],"ix":2},"o":{"a":0,"k":0,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":1,"k":[{"t":50,"s":[9.999999284744263,10.17067003250122],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[9.999999284744263,11.17067003250122],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":150,"s":[9.999999284744263,10.17067003250122],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":250,"s":[9.999999284744263,10.17067003250122],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":300,"s":[9.999999284744263,11.17067003250122],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":350,"s":[9.999999284744263,10.17067003250122],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":6,"ty":4,"nm":"line","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":5,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,0],[4.18847,0],[4.18847,0.3221899999999991],[0,0.3221899999999991],[0,0],[0,0],[0,0]],"i":[[0,0],[-1.396156666666667,0],[0,-0.1073966666666664],[1.396156666666666,0],[0,0.1073966666666664],[0,0],[0,0]],"o":[[1.396156666666666,0],[0,0.1073966666666664],[-1.396156666666666,0],[0,-0.1073966666666664],[0,0],[0,0],[1.396156666666666,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-2.900433540344238,3.517374992370605],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"small","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":5,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[3.215839629698487,0.4155599999999988],[1.871029629698487,0.4155599999999988],[0.08033652969848645,3.996899999999999],[0.7527406296984864,5.084849999999998],[4.334119629698487,5.084849999999998],[5.006529629698486,3.996899999999999],[3.215839629698487,0.4155599999999988],[3.215839629698487,0.4155599999999988],[3.215839629698487,0.4155599999999988]],"i":[[0,0],[0.2770400000000002,-0.5540800000000004],[0.5968977000000001,-1.19378],[-0.5588519999999999,0],[-1.193793,0],[0.2499200000000004,0.4998400000000003],[0.5968966666666669,1.19378],[0,0],[0,0]],"o":[[-0.27705,-0.5540800000000004],[-0.5968977,1.1937799999999994],[-0.2499269,0.4998400000000003],[1.193793,0],[0.5588600000000001,0],[-0.5968966666666669,-1.19378],[0,0],[0,0],[-0.27705,-0.5540800000000004]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-6.000233173370361,-1.244344711303711],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"big","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":5,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[4.719378057214302,0.41556],[3.374568057214302,0.41556],[0.08033805721430198,7.00394],[0.7527380572143016,8.0919],[7.341158057214302,8.0919],[8.0136580572143,7.00394],[4.719378057214302,0.41556],[4.719378057214302,0.41556],[4.719378057214302,0.41556]],"i":[[0,0],[0.27705,-0.55408],[1.098076666666667,-2.196126666666667],[-0.5588499999999996,0],[-2.196140000000002,0],[0.2499000000000002,0.4998400000000007],[1.098093333333333,2.196126666666667],[0,0],[0,0]],"o":[[-0.2770500000000009,-0.55408],[-1.098076666666667,2.196126666666666],[-0.24993,0.4998400000000007],[2.19614,0],[0.5588999999999995,0],[-1.098093333333332,-2.196126666666666],[0,0],[0,0],[-0.2770500000000009,-0.55408]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-2.093742370605469,-4.256064891815186],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0}],"markers":[]}'
        ),
        eZ = JSON.parse(
          '{"v":"5.7.5","fr":100,"ip":0,"op":350,"w":24,"h":24,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"border","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[22,22],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"st","c":{"a":0,"k":[0.203921568627451,0.207843137254902,0.2509803921568627],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-180,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Path","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[8.6485975,0.1178352687211168],[8.880497499999999,1.074935268721117],[6.6505975,3.304865268721118],[6.6505975,6.016105268721118],[9.3617975,6.016105268721118],[11.5916975,3.786175268721117],[12.5487975,4.018115268721118],[11.1692975,8.727405268721117],[5.5576975,9.820205268721118],[3.272757499999999,12.10510526872112],[0.561517499999999,12.10510526872112],[0.561517499999999,9.393905268721117],[2.8464575,7.109005268721118],[3.9393075,1.497375268721117],[8.6485975,0.1178352687211168],[8.6485975,0.1178352687211168],[8.6485975,0.1178352687211168]],"i":[[0,0],[0.3205000000000009,-0.3204799999999999],[0.7432999999999996,-0.7433100000000001],[-0.7487000000000013,-0.7487000000000013],[-0.7487000000000013,0.7486999999999995],[-0.7433000000000014,0.743310000000001],[-0.09659999999999869,-0.4428200000000011],[1.278300000000002,-1.2783],[1.8610999999999986,0.7885999999999989],[0.7616466666666675,-0.7616333333333323],[0.7486899999999999,0.7486999999999995],[-0.7486899999999999,0.7487000000000013],[-0.7616466666666675,0.7616333333333323],[-1.5171100000000006,1.5171199999999994],[-1.6442,-0.3585899999999995],[0,0],[0,0]],"o":[[0.4428000000000001,0.09658000000000033],[-0.7432999999999996,0.7433100000000001],[-0.7487000000000013,0.7486899999999999],[0.7485999999999997,0.7486999999999995],[0.7432999999999996,-0.743310000000001],[0.3204999999999991,-0.3204799999999999],[0.3585999999999991,1.644189999999998],[-1.5170999999999992,1.5170999999999992],[-0.7616466666666675,0.761633333333334],[-0.7486899999999999,0.7486999999999995],[-0.7486899999999999,-0.7485999999999997],[0.7616466666666666,-0.7616333333333323],[-0.7885500000000008,-1.8611],[1.278289999999998,-1.27829],[0,0],[0,0],[0.4428000000000001,0.09658000000000033]]}}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":0,"s":[13.23,10.77154381752014],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[12,12],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[12,12],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":117,"s":[12,12],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":227,"s":[12,12],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":282,"s":[13.23,10.77],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"a":{"a":1,"k":[{"t":0,"s":[7.559483528137207,5.104858875274658],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[7.559483528137207,5.104858875274658],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"s":{"a":1,"k":[{"t":0,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":60,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":117,"s":[121.15,121.15],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":227,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":282,"s":[100,100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"r":{"a":1,"k":[{"t":0,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[45],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":60,"s":[45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[-45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":117,"s":[-45],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":167,"s":[45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":184,"s":[45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":217,"s":[-45],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":227,"s":[-45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":282,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":1,"k":[{"t":0,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Circle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,-10],[10,0],[0,10],[-10,0],[0,-10]],"i":[[-5.5228475,0],[0,-5.5228475],[5.5228475,0],[0,5.5228475],[-5.5228475,0]],"o":[[5.5228475,0],[0,5.5228475],[-5.5228475,0],[0,-5.5228475],[5.5228475,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.203921568627451,0.207843137254902,0.2509803921568627],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":90,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Circle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[24,24],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-180,"ix":2},"o":{"a":0,"k":25,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0}],"markers":[]}'
        ),
        eB = JSON.parse(
          '{"v":"5.7.5","fr":100,"ip":0,"op":400,"w":24,"h":24,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":2,"ty":4,"nm":"Path\'s solid stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":125,"s":[{"c":false,"v":[[3.5,0],[0,5.8332999999999995],[3.5,5.8332999999999995]],"i":[[0,0],[1.166666666666667,-1.944433333333334],[-1.166666666666667,0]],"o":[[-1.166666666666666,1.944433333333333],[1.166666666666666,0],[0,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":200,"s":[{"c":false,"v":[[5.836999893188477,0],[9.336999893188477,5.83329963684082],[5.9886474609375,5.83329963684082]],"i":[[-1.184650421142578,-1.832367897033691],[0,0],[-1.166666666666667,0]],"o":[[1.184650897979736,1.832367539405823],[0,0],[0,0]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[{"c":false,"v":[[5.836999893188477,0],[9.336999893188477,5.83329963684082],[5.9886474609375,5.83329963684082]],"i":[[-1.184650421142578,-1.832367897033691],[0,0],[-1.166666666666667,0]],"o":[[1.184650897979736,1.832367539405823],[0,0],[0,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":400,"s":[{"c":false,"v":[[3.503000259399414,0],[0.003000259399414062,5.83329963684082],[3.503000259399414,5.83329963684082]],"i":[[0.2074432373046875,-0.3626899719238281],[0,0],[-1.166666666666667,0]],"o":[[-0.2074427604675293,0.3626899123191833],[0,0],[0,0]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2}},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2.33333,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":125,"s":[-4.666999816894531,-4.666650772094727],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":200,"s":[-4.67,-4.666650772094727],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[-4.67,-4.666650772094727],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Path\'s solid stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":125,"s":[{"c":false,"v":[[0,2.3332999999999995],[3.5,0]],"i":[[0,0],[-0.7981999999999996,1.4169]],"o":[[1.4311000000000007,0],[0,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":200,"s":[{"c":false,"v":[[-2.333999633789062,2.333300590515137],[-5.833999633789062,0]],"i":[[1.169005393981934,0],[0.7811636924743652,1.481373190879822]],"o":[[-1.169005155563354,0],[-0.7811641693115234,-1.481372833251953]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[{"c":false,"v":[[-2.333999633789062,2.333300590515137],[-5.833999633789062,0]],"i":[[1.169005393981934,0],[0.7811636924743652,1.481373190879822]],"o":[[-1.169005155563354,0],[-0.7811641693115234,-1.481372833251953]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":400,"s":[{"c":false,"v":[[-0.003000259399414062,2.333300590515137],[3.496999740600586,0]],"i":[[-1.720494270324707,0],[-0.6510887145996094,1.120759010314941]],"o":[[1.720494627952576,0],[0.6510882377624512,-1.120759010314941]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2}},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2.33333,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":200,"s":[1.166999816894531,2.33335018157959],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[1.17,2.33335018157959],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"border","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[22,22],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"st","c":{"a":0,"k":[0.203921568627451,0.207843137254902,0.2509803921568627],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-180,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0}],"markers":[]}'
        ),
        eq = JSON.parse(
          '{"v":"5.7.5","fr":100,"ip":0,"op":400,"w":24,"h":24,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":2,"ty":4,"nm":"Path\'s solid stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":125,"s":[{"c":false,"v":[[3.5,0],[0,5.8332999999999995],[3.5,5.8332999999999995]],"i":[[0,0],[1.166666666666667,-1.9444333333333343],[-1.166666666666667,0]],"o":[[-1.166666666666666,1.9444333333333326],[1.166666666666666,0],[0,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":200,"s":[{"c":false,"v":[[5.836999893188477,0],[9.336999893188477,5.83329963684082],[5.9886474609375,5.83329963684082]],"i":[[-1.1846504211425781,-1.8323678970336914],[0,0],[-1.166666666666667,0]],"o":[[1.1846508979797363,1.8323675394058228],[0,0],[0,0]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[{"c":false,"v":[[5.836999893188477,0],[9.336999893188477,5.83329963684082],[5.9886474609375,5.83329963684082]],"i":[[-1.1846504211425781,-1.8323678970336914],[0,0],[-1.166666666666667,0]],"o":[[1.1846508979797363,1.8323675394058228],[0,0],[0,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":400,"s":[{"c":false,"v":[[3.503000259399414,0],[0.0030002593994140625,5.83329963684082],[3.503000259399414,5.83329963684082]],"i":[[0.2074432373046875,-0.3626899719238281],[0,0],[-1.166666666666667,0]],"o":[[-0.2074427604675293,0.36268991231918335],[0,0],[0,0]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2}},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2.33333,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":125,"s":[-4.666999816894531,-4.666650772094727],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":200,"s":[-4.67,-4.666650772094727],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[-4.67,-4.666650772094727],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Path\'s solid stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":125,"s":[{"c":false,"v":[[0,2.3332999999999995],[3.5,0]],"i":[[0,0],[-0.7981999999999996,1.4169]],"o":[[1.4311000000000007,0],[0,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":200,"s":[{"c":false,"v":[[-2.3339996337890625,2.3333005905151367],[-5.8339996337890625,0]],"i":[[1.1690053939819336,0],[0.7811636924743652,1.4813731908798218]],"o":[[-1.1690051555633545,0],[-0.7811641693115234,-1.4813728332519531]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[{"c":false,"v":[[-2.3339996337890625,2.3333005905151367],[-5.8339996337890625,0]],"i":[[1.1690053939819336,0],[0.7811636924743652,1.4813731908798218]],"o":[[-1.1690051555633545,0],[-0.7811641693115234,-1.4813728332519531]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":400,"s":[{"c":false,"v":[[-0.0030002593994140625,2.3333005905151367],[3.496999740600586,0]],"i":[[-1.720494270324707,0],[-0.6510887145996094,1.1207590103149414]],"o":[[1.7204946279525757,0],[0.6510882377624512,-1.1207590103149414]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2}},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2.33333,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":200,"s":[1.1669998168945312,2.33335018157959],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[1.17,2.33335018157959],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"border","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[22,22],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"st","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-180,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0}],"markers":[]}'
        ),
        ez = JSON.parse(
          '{"v":"5.7.5","fr":100,"ip":0,"op":350,"w":24,"h":24,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"border","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[22,22],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"st","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-180,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Path","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[8.6485975,0.1178352687211168],[8.880497499999999,1.074935268721117],[6.6505975,3.304865268721118],[6.6505975,6.016105268721118],[9.3617975,6.016105268721118],[11.5916975,3.786175268721117],[12.5487975,4.018115268721118],[11.1692975,8.727405268721117],[5.5576975,9.820205268721118],[3.272757499999999,12.10510526872112],[0.561517499999999,12.10510526872112],[0.561517499999999,9.393905268721117],[2.8464575,7.109005268721118],[3.9393075,1.497375268721117],[8.6485975,0.1178352687211168],[8.6485975,0.1178352687211168],[8.6485975,0.1178352687211168]],"i":[[0,0],[0.3205000000000009,-0.3204799999999999],[0.7432999999999996,-0.7433100000000001],[-0.7487000000000013,-0.7487000000000013],[-0.7487000000000013,0.7486999999999995],[-0.7433000000000014,0.743310000000001],[-0.09659999999999869,-0.4428200000000011],[1.278300000000002,-1.2783],[1.8610999999999986,0.7885999999999989],[0.7616466666666675,-0.7616333333333323],[0.7486899999999999,0.7486999999999995],[-0.7486899999999999,0.7487000000000013],[-0.7616466666666675,0.7616333333333323],[-1.5171100000000006,1.5171199999999994],[-1.6442,-0.3585899999999995],[0,0],[0,0]],"o":[[0.4428000000000001,0.09658000000000033],[-0.7432999999999996,0.7433100000000001],[-0.7487000000000013,0.7486899999999999],[0.7485999999999997,0.7486999999999995],[0.7432999999999996,-0.743310000000001],[0.3204999999999991,-0.3204799999999999],[0.3585999999999991,1.644189999999998],[-1.5170999999999992,1.5170999999999992],[-0.7616466666666675,0.761633333333334],[-0.7486899999999999,0.7486999999999995],[-0.7486899999999999,-0.7485999999999997],[0.7616466666666666,-0.7616333333333323],[-0.7885500000000008,-1.8611],[1.278289999999998,-1.27829],[0,0],[0,0],[0.4428000000000001,0.09658000000000033]]}}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":0,"s":[13.23,10.77154381752014],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[12,12],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[12,12],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":117,"s":[12,12],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":227,"s":[12,12],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":282,"s":[13.23,10.77],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"a":{"a":1,"k":[{"t":0,"s":[7.559483528137207,5.104858875274658],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[7.559483528137207,5.104858875274658],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"s":{"a":1,"k":[{"t":0,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":60,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":117,"s":[121.15,121.15],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":227,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":282,"s":[100,100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"r":{"a":1,"k":[{"t":0,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[45],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":60,"s":[45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[-45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":117,"s":[-45],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":167,"s":[45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":184,"s":[45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":217,"s":[-45],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":227,"s":[-45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":282,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":1,"k":[{"t":0,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Circle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,-10],[10,0],[0,10],[-10,0],[0,-10]],"i":[[-5.5228475,0],[0,-5.5228475],[5.5228475,0],[0,5.5228475],[-5.5228475,0]],"o":[[5.5228475,0],[0,5.5228475],[-5.5228475,0],[0,-5.5228475],[5.5228475,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":90,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Circle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[24,24],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-180,"ix":2},"o":{"a":0,"k":25,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0}],"markers":[]}'
        ),
        eU = JSON.parse(
          '{"v":"5.7.5","fr":100,"ip":0,"op":200,"w":20,"h":20,"nm":"Comp 1","ddd":0,"assets":[{"id":"1","layers":[{"ddd":0,"ind":5,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":6,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[14.25,14.25],"ix":2},"a":{"a":0,"k":[8.25,8.25],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":5},{"ddd":0,"ind":7,"ty":4,"nm":"Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":6,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[4.5,4.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":1,"ix":2}},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[2.25,2.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":3,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0}]},{"id":"3","layers":[{"ddd":0,"refId":"2","w":20000,"h":20000,"ind":1,"ty":0,"nm":"Masked Rectangle - mask content","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[10000,10000],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":0,"tt":1,"td":1},{"ddd":0,"refId":"1","w":20000,"h":20000,"ind":1,"ty":0,"nm":"Masked Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[10000,10000],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":0,"tt":1}]},{"id":"2","layers":[{"ddd":0,"ind":8,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10008.250000047683,10008.250000047683],"ix":2},"a":{"a":0,"k":[2.7,2.7],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":9,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[2.7,2.6999999999999993],"ix":2},"a":{"a":0,"k":[2.25,2.25],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":8},{"ddd":0,"ind":10,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[2.25,2.25],"ix":2},"a":{"a":0,"k":[2.25,2.25],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":9},{"ddd":0,"ind":11,"ty":4,"nm":"Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":10,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[4.5,4.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":1,"ix":2}},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[2.25,2.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0}]},{"id":"4","layers":[{"ddd":0,"ind":15,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":16,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[14.25,14.25],"ix":2},"a":{"a":0,"k":[8.25,8.25],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":15},{"ddd":0,"ind":17,"ty":4,"nm":"Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":16,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[4.5,4.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":1,"ix":2}},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[2.25,2.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":3,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0}]},{"id":"6","layers":[{"ddd":0,"refId":"5","w":20000,"h":20000,"ind":1,"ty":0,"nm":"Masked Rectangle - mask content","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[10000,10000],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":0,"tt":1,"td":1},{"ddd":0,"refId":"4","w":20000,"h":20000,"ind":1,"ty":0,"nm":"Masked Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[10000,10000],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":0,"tt":1}]},{"id":"5","layers":[{"ddd":0,"ind":18,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10008.250000047683,10008.250000047683],"ix":2},"a":{"a":0,"k":[2.7,2.7],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":19,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[2.6999999999999993,2.6999999999999993],"ix":2},"a":{"a":0,"k":[2.25,2.25],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":18},{"ddd":0,"ind":20,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[2.25,2.25],"ix":2},"a":{"a":0,"k":[2.25,2.25],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":19},{"ddd":0,"ind":21,"ty":4,"nm":"Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":20,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[4.5,4.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":1,"ix":2}},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[2.25,2.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[4,1.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":1,"k":[{"t":5,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":15,"s":[0.75],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":65,"s":[0.75],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":80,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[10,10.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":1,"k":[{"t":0,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[-360],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":1,"k":[{"t":0,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[180],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"p":{"a":0,"k":[10,10.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":3,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[-4.25,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":2},{"ddd":0,"ind":4,"ty":4,"nm":"Path","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,0.75],[0.75,0],[3,0],[3,1.5],[0.75,1.5],[0,0.75],[0,0.75],[0,0.75],[0,0.75]],"i":[[0,0],[-0.4142099999999997,0],[-0.75,0],[0,-0.5],[0.75,0],[0,0.4141999999999992],[0,0],[0,0],[0,0]],"o":[[0,-0.4141999999999992],[0.75,0],[0,0.5],[-0.75,0],[-0.4142099999999997,0],[0,0],[0,0],[0,0],[0,-0.4141999999999992]]}}},{"ty":"fl","c":{"a":0,"k":[0.9686274509803922,0.9686274509803922,0.9725490196078431],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-0.75,-0.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0},{"ddd":0,"refId":"3","w":20000,"h":20000,"ind":12,"ty":0,"nm":"Masked Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[-8.25,-8.25],"ix":2},"a":{"a":0,"k":[10000,10000],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":3},{"ddd":0,"ind":13,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[4.25,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":2},{"ddd":0,"ind":14,"ty":4,"nm":"Path","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":13,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,0],[2.25,0],[3,0.75],[3,0.75],[2.25,1.5],[0,1.5],[0,0],[0,0],[0,0]],"i":[[0,0],[-0.75,0],[0,-0.4141999999999992],[0,0],[0.414200000000001,0],[0.75,0],[0,0.5],[0,0],[0,0]],"o":[[0.75,0],[0.414200000000001,0],[0,0],[0,0.4141999999999992],[-0.75,0],[0,-0.5],[0,0],[0,0],[0.75,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.9686274509803922,0.9686274509803922,0.9725490196078431],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-2.25,-0.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0},{"ddd":0,"refId":"6","w":20000,"h":20000,"ind":22,"ty":0,"nm":"Masked Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[-8.25,-8.25],"ix":2},"a":{"a":0,"k":[10000,10000],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":13}],"markers":[]}'
        ),
        eO = JSON.parse(
          '{"v":"5.7.5","fr":100,"ip":0,"op":350,"w":20,"h":20,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"bottom","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[3,1.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0.75,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[7.847347463338371,11.1995756149292],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":1,"k":[{"t":180,"s":[0],"i":{"x":[0.8],"y":[1]},"o":{"x":[0.4],"y":[0]}},{"t":200,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":260,"s":[100],"i":{"x":[0.8],"y":[1]},"o":{"x":[0.4],"y":[0]}},{"t":280,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"top","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[4,1.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0.75,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[8.347347344129082,8.7995756149292],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":1,"k":[{"t":165,"s":[0],"i":{"x":[0.8],"y":[1]},"o":{"x":[0.4],"y":[0]}},{"t":185,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":260,"s":[100],"i":{"x":[0.8],"y":[1]},"o":{"x":[0.4],"y":[0]}},{"t":280,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":1,"k":[{"t":80,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":120,"s":[-45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":130,"s":[-45],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":160,"s":[-45],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":270,"s":[-45],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":320,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"p":{"a":0,"k":[10,10],"ix":2},"a":{"a":0,"k":[10,10],"ix":2},"s":{"a":1,"k":[{"t":80,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":120,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":160,"s":[120,120],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":270,"s":[120,120],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":320,"s":[100,100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2}},"ao":0,"ip":0,"op":350,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":4,"ty":4,"nm":"Path\'s solid stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,0],[2.5581,2.5581]],"i":[[0,0],[-0.8527000000000005,-0.8527000000000005]],"o":[[0.8527000000000005,0.8527000000000005],[0,0]]}}},{"ty":"st","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":1.5,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[11.8169002532959,11.81639957427979],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Path\'s solid fill","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,0],[2.5581,2.5581]],"i":[[0,0],[-0.8527000000000005,-0.8527000000000005]],"o":[[0.8527000000000005,0.8527000000000005],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":0,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[11.8169002532959,11.81639957427979],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Rectangle\'s solid stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[7.80233,7.80233],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":3.901165,"ix":2}},{"ty":"st","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":1.5,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[9.026165008544922,9.026165008544922],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":1,"k":[{"t":130,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":171,"s":[-100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}}],"ix":2},"r":{"a":0,"k":-45,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Rectangle\'s solid fill","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[7.80233,7.80233],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":3.90116,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":0,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[9.026165008544922,9.026165008544922],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":45,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Circle\'s solid stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[20,20],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"st","c":{"a":0,"k":[0.9607843137254902,0.9607843137254902,0.9607843137254902],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":1,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[10,10],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":90,"ix":2},"o":{"a":0,"k":0,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Circle\'s solid fill","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[20,20],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":0,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[10,10],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":90,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0}],"markers":[]}'
        ),
        eV = JSON.parse(
          '{"v":"5.7.5","fr":100,"ip":0,"op":400,"w":20,"h":20,"nm":"Comp 1","ddd":0,"assets":[{"id":"2","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"outer","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":0,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":77,"s":[{"c":false,"v":[[4,0.8788999999999998],[4,0.75],[3.25,0],[2.5,0.75],[2.5,0.8499999999999996],[2.482100000000001,1.7741000000000007],[2.4183,2.0905],[2.0905,2.4183],[1.7741000000000007,2.482100000000001],[0.8499999999999996,2.5],[0.75,2.5],[0,3.25],[0.75,4],[0.8788999999999998,4],[1.8963,3.9771],[2.7715,3.7547999999999995],[3.7547999999999995,2.7715],[3.9771,1.8963],[4,0.8788999999999998],[4,0.8788999999999998],[4,0.8788999999999998]],"i":[[0,0],[0,0.0429666666666666],[0.4141999999999992,0],[0,-0.4141999999999992],[0,-0.03333333333333321],[0.01729999999999876,-0.2125000000000004],[0.01879999999999882,-0.03710000000000058],[0.1410999999999998,-0.07200000000000095],[0.2037999999999993,-0.01670000000000016],[0.4324000000000012,0],[0.03333333333333321,0],[0,-0.4141999999999992],[-0.4141999999999992,0],[-0.0429666666666666,0],[-0.2810000000000006,0.02289999999999992],[-0.2837999999999994,0.1446000000000005],[-0.2157999999999998,0.4233000000000011],[-0.02430000000000021,0.2965],[0,0.3954000000000004],[0,0],[0,0]],"o":[[0,-0.0429666666666666],[0,-0.4141999999999992],[-0.4141999999999992,0],[0,0.03333333333333321],[0,0.4324000000000012],[-0.01670000000000016,0.2037999999999993],[-0.07200000000000095,0.1410999999999998],[-0.03710000000000058,0.01879999999999882],[-0.2125000000000004,0.01729999999999876],[-0.03333333333333321,0],[-0.4141999999999992,0],[0,0.4141999999999992],[0.0429666666666666,0],[0.3954000000000004,0],[0.2965,-0.02430000000000021],[0.4233000000000011,-0.2157999999999998],[0.1446000000000005,-0.2837999999999994],[0.02289999999999992,-0.2810000000000006],[0,0],[0,0],[0,-0.0429666666666666]]}],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[{"c":false,"v":[[4,0.8788999999999998],[4,0.75],[3.25,0],[2.5,0.75],[2.5,0.8499999999999996],[2.482100000000001,1.7741000000000007],[2.4183,2.0905],[2.0905,2.4183],[1.7741000000000007,2.482100000000001],[0.8499999999999996,2.5],[0.75,2.5],[0,3.25],[0.75,4],[0.8788999999999998,4],[1.8963,3.9771],[2.7715,3.7547999999999995],[3.7547999999999995,2.7715],[3.9771,1.8963],[4,0.8788999999999998],[4,0.8788999999999998],[4,0.8788999999999998]],"i":[[0,0],[0,0.0429666666666666],[0.4141999999999992,0],[0,-0.4141999999999992],[0,-0.03333333333333321],[0.01729999999999876,-0.2125000000000004],[0.01879999999999882,-0.03710000000000058],[0.1410999999999998,-0.07200000000000095],[0.2037999999999993,-0.01670000000000016],[0.4324000000000012,0],[0.03333333333333321,0],[0,-0.4141999999999992],[-0.4141999999999992,0],[-0.0429666666666666,0],[-0.2810000000000006,0.02289999999999992],[-0.2837999999999994,0.1446000000000005],[-0.2157999999999998,0.4233000000000011],[-0.02430000000000021,0.2965],[0,0.3954000000000004],[0,0],[0,0]],"o":[[0,-0.0429666666666666],[0,-0.4141999999999992],[-0.4141999999999992,0],[0,0.03333333333333321],[0,0.4324000000000012],[-0.01670000000000016,0.2037999999999993],[-0.07200000000000095,0.1410999999999998],[-0.03710000000000058,0.01879999999999882],[-0.2125000000000004,0.01729999999999876],[-0.03333333333333321,0],[-0.4141999999999992,0],[0,0.4141999999999992],[0.0429666666666666,0],[0.3954000000000004,0],[0.2965,-0.02430000000000021],[0.4233000000000011,-0.2157999999999998],[0.1446000000000005,-0.2837999999999994],[0.02289999999999992,-0.2810000000000006],[0,0],[0,0],[0,-0.0429666666666666]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}},{"ty":"fl","c":{"a":1,"k":[{"t":77,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":true},{"ty":"tm","s":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"e":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":77,"s":[2.25,1.25],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[2.25,1.25],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":1,"k":[{"t":77,"s":[0,0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0,0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sk":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sa":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":77,"s":[{"c":false,"v":[[3.121130417391935,4],[3.250000417391935,4],[4.000000417391935,3.25],[3.250000417391935,2.5],[3.150030417391935,2.5],[2.225880417391935,2.482100000000001],[1.909510417391935,2.4183],[1.581750417391936,2.0905],[1.517950417391935,1.7741000000000007],[1.500000417391935,0.8499999999999996],[1.500000417391935,0.75],[0.7500004173919352,0],[4.173919352368216e-7,0.75],[4.173919352368216e-7,0.8788999999999998],[0.02293041739193535,1.8963],[0.2452404173919351,2.7715],[1.228520417391935,3.7547999999999995],[2.103740417391935,3.9771],[3.121130417391935,4],[3.121130417391935,4],[3.121130417391935,4]],"i":[[0,0],[-0.04295666666666698,0],[0,0.4141999999999992],[0.4142099999999997,0],[0.03332333333333359,0],[0.21251,0.01729999999999876],[0.03707999999999956,0.01879999999999882],[0.07189999999999941,0.1410999999999998],[0.01663999999999977,0.2037999999999993],[0,0.4324000000000012],[0,0.03333333333333321],[0.4142099999999997,0],[0,-0.4141999999999992],[0,-0.0429666666666666],[-0.02295000000000025,-0.2810000000000006],[-0.14460000000000006,-0.2837999999999994],[-0.4233599999999997,-0.2157999999999998],[-0.2965100000000005,-0.02430000000000021],[-0.3953800000000003,0],[0,0],[0,0]],"o":[[0.04295666666666698,0],[0.4142099999999997,0],[0,-0.4141999999999992],[-0.03332333333333359,0],[-0.4324200000000005,0],[-0.2037500000000003,-0.01670000000000016],[-0.1411199999999999,-0.07200000000000095],[-0.01890000000000036,-0.03710000000000058],[-0.01736999999999966,-0.2125000000000004],[0,-0.03333333333333321],[0,-0.4141999999999992],[-0.4142099999999997,0],[0,0.0429666666666666],[-0.00001000000000006551,0.3954000000000004],[0.02421999999999969,0.2965],[0.2157100000000005,0.4233000000000011],[0.2837900000000007,0.1446000000000005],[0.2809299999999997,0.02289999999999992],[0,0],[0,0],[0.04295666666666698,0]]}],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[{"c":false,"v":[[3.121130417391935,4],[3.250000417391935,4],[4.000000417391935,3.25],[3.250000417391935,2.5],[3.150030417391935,2.5],[2.225880417391935,2.482100000000001],[1.909510417391935,2.4183],[1.581750417391936,2.0905],[1.517950417391935,1.7741000000000007],[1.500000417391935,0.8499999999999996],[1.500000417391935,0.75],[0.7500004173919352,0],[4.173919352368216e-7,0.75],[4.173919352368216e-7,0.8788999999999998],[0.02293041739193535,1.8963],[0.2452404173919351,2.7715],[1.228520417391935,3.7547999999999995],[2.103740417391935,3.9771],[3.121130417391935,4],[3.121130417391935,4],[3.121130417391935,4]],"i":[[0,0],[-0.04295666666666698,0],[0,0.4141999999999992],[0.4142099999999997,0],[0.03332333333333359,0],[0.21251,0.01729999999999876],[0.03707999999999956,0.01879999999999882],[0.07189999999999941,0.1410999999999998],[0.01663999999999977,0.2037999999999993],[0,0.4324000000000012],[0,0.03333333333333321],[0.4142099999999997,0],[0,-0.4141999999999992],[0,-0.0429666666666666],[-0.02295000000000025,-0.2810000000000006],[-0.14460000000000006,-0.2837999999999994],[-0.4233599999999997,-0.2157999999999998],[-0.2965100000000005,-0.02430000000000021],[-0.3953800000000003,0],[0,0],[0,0]],"o":[[0.04295666666666698,0],[0.4142099999999997,0],[0,-0.4141999999999992],[-0.03332333333333359,0],[-0.4324200000000005,0],[-0.2037500000000003,-0.01670000000000016],[-0.1411199999999999,-0.07200000000000095],[-0.01890000000000036,-0.03710000000000058],[-0.01736999999999966,-0.2125000000000004],[0,-0.03333333333333321],[0,-0.4141999999999992],[-0.4142099999999997,0],[0,0.0429666666666666],[-0.00001000000000006551,0.3954000000000004],[0.02421999999999969,0.2965],[0.2157100000000005,0.4233000000000011],[0.2837900000000007,0.1446000000000005],[0.2809299999999997,0.02289999999999992],[0,0],[0,0],[0.04295666666666698,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}},{"ty":"fl","c":{"a":1,"k":[{"t":77,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":true},{"ty":"tm","s":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"e":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":77,"s":[-6.250000476837158,1.25],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[-6.250000476837158,1.25],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":1,"k":[{"t":77,"s":[0,0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0,0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sk":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sa":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":77,"s":[{"c":false,"v":[[4,3.121090417391934],[4,3.250000417391934],[3.25,4.000000417391934],[2.5,3.250000417391934],[2.5,3.150000417391935],[2.482100000000001,2.225880417391934],[2.4183,1.909510417391934],[2.0905,1.581750417391935],[1.7741000000000007,1.517950417391934],[0.8499999999999996,1.500000417391934],[0.75,1.500000417391934],[0,0.7500004173919343],[0.75,4.173919343486432e-7],[0.8788999999999998,4.173919343486432e-7],[1.8963,0.02293041739193402],[2.7715,0.2452404173919343],[3.7547999999999995,1.228520417391934],[3.9771,2.103730417391934],[4,3.121090417391934],[4,3.121090417391934],[4,3.121090417391934]],"i":[[0,0],[0,-0.0429700000000004],[0.4141999999999992,0],[0,0.4142100000000006],[0,0.03333333333333321],[0.01729999999999876,0.2125000000000004],[0.01879999999999882,0.03707999999999956],[0.1410999999999998,0.07189999999999941],[0.2037999999999993,0.01663999999999977],[0.4324000000000012,0],[0.03333333333333321,0],[0,0.4142099999999997],[-0.4141999999999992,0],[-0.0429666666666666,0],[-0.2810000000000006,-0.0229499999999998],[-0.2837999999999994,-0.1445999999999996],[-0.2157999999999998,-0.4233599999999997],[-0.02430000000000021,-0.2965099999999996],[0,-0.3953599999999993],[0,0],[0,0]],"o":[[0,0.0429700000000004],[0,0.4142100000000006],[-0.4141999999999992,0],[0,-0.03333333333333321],[0,-0.43241],[-0.01670000000000016,-0.2037500000000003],[-0.07200000000000095,-0.1411199999999999],[-0.03710000000000058,-0.01890000000000036],[-0.2125000000000004,-0.01736999999999966],[-0.03333333333333321,0],[-0.4141999999999992,0],[0,-0.4142099999999997],[0.0429666666666666,0],[0.3954000000000004,-0.000009999999999621423],[0.2965,0.02422000000000057],[0.4233000000000011,0.2157100000000005],[0.1446000000000005,0.2837900000000007],[0.02289999999999992,0.2809300000000006],[0,0],[0,0],[0,0.0429700000000004]]}],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[{"c":false,"v":[[4,3.121090417391934],[4,3.250000417391934],[3.25,4.000000417391934],[2.5,3.250000417391934],[2.5,3.150000417391935],[2.482100000000001,2.225880417391934],[2.4183,1.909510417391934],[2.0905,1.581750417391935],[1.7741000000000007,1.517950417391934],[0.8499999999999996,1.500000417391934],[0.75,1.500000417391934],[0,0.7500004173919343],[0.75,4.173919343486432e-7],[0.8788999999999998,4.173919343486432e-7],[1.8963,0.02293041739193402],[2.7715,0.2452404173919343],[3.7547999999999995,1.228520417391934],[3.9771,2.103730417391934],[4,3.121090417391934],[4,3.121090417391934],[4,3.121090417391934]],"i":[[0,0],[0,-0.0429700000000004],[0.4141999999999992,0],[0,0.4142100000000006],[0,0.03333333333333321],[0.01729999999999876,0.2125000000000004],[0.01879999999999882,0.03707999999999956],[0.1410999999999998,0.07189999999999941],[0.2037999999999993,0.01663999999999977],[0.4324000000000012,0],[0.03333333333333321,0],[0,0.4142099999999997],[-0.4141999999999992,0],[-0.0429666666666666,0],[-0.2810000000000006,-0.0229499999999998],[-0.2837999999999994,-0.1445999999999996],[-0.2157999999999998,-0.4233599999999997],[-0.02430000000000021,-0.2965099999999996],[0,-0.3953599999999993],[0,0],[0,0]],"o":[[0,0.0429700000000004],[0,0.4142100000000006],[-0.4141999999999992,0],[0,-0.03333333333333321],[0,-0.43241],[-0.01670000000000016,-0.2037500000000003],[-0.07200000000000095,-0.1411199999999999],[-0.03710000000000058,-0.01890000000000036],[-0.2125000000000004,-0.01736999999999966],[-0.03333333333333321,0],[-0.4141999999999992,0],[0,-0.4142099999999997],[0.0429666666666666,0],[0.3954000000000004,-0.000009999999999621423],[0.2965,0.02422000000000057],[0.4233000000000011,0.2157100000000005],[0.1446000000000005,0.2837900000000007],[0.02289999999999992,0.2809300000000006],[0,0],[0,0],[0,0.0429700000000004]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}},{"ty":"fl","c":{"a":1,"k":[{"t":77,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":true},{"ty":"tm","s":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"e":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":77,"s":[2.25,-5.250000476837158],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[2.25,-5.250000476837158],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":1,"k":[{"t":77,"s":[0,0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0,0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sk":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sa":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":77,"s":[{"c":false,"v":[[3.121090417391935,4.17391936125e-7],[3.250000417391935,4.17391936125e-7],[4.000000417391935,0.7500004173919361],[3.250000417391935,1.500000417391936],[3.150000417391936,1.500000417391936],[2.225880417391935,1.517950417391936],[1.909510417391935,1.581750417391937],[1.581750417391936,1.909510417391936],[1.517950417391935,2.225880417391936],[1.500000417391935,3.150000417391936],[1.500000417391935,3.250000417391936],[0.7500004173919352,4.000000417391936],[4.173919352368216e-7,3.250000417391936],[4.173919352368216e-7,3.121090417391936],[0.02293041739193535,2.103730417391936],[0.2452404173919351,1.228520417391936],[1.228520417391935,0.245240417391936],[2.103730417391935,0.0229304173919358],[3.121090417391935,4.17391936125e-7],[3.121090417391935,4.17391936125e-7],[3.121090417391935,4.17391936125e-7]],"i":[[0,0],[-0.0429700000000004,0],[0,-0.4142099999999997],[0.4142099999999997,0],[0.03333333333333321,0],[0.2125000000000004,-0.01736999999999966],[0.03707999999999956,-0.01890000000000036],[0.07189999999999941,-0.1411199999999999],[0.01663999999999977,-0.2037500000000003],[0,-0.43241],[0,-0.03333333333333321],[0.4142099999999997,0],[0,0.4142100000000006],[0,0.0429700000000004],[-0.02295000000000025,0.2809300000000006],[-0.14460000000000006,0.2837900000000007],[-0.4233599999999997,0.2157100000000005],[-0.2965099999999996,0.02422000000000057],[-0.3953599999999993,-0.000009999999999621423],[0,0],[0,0]],"o":[[0.0429700000000004,0],[0.4142099999999997,0],[0,0.4142099999999997],[-0.03333333333333321,0],[-0.43241,0],[-0.2037500000000003,0.01663999999999977],[-0.1411199999999999,0.07189999999999941],[-0.01890000000000036,0.03707999999999956],[-0.01736999999999966,0.2125000000000004],[0,0.03333333333333321],[0,0.4142100000000006],[-0.4142099999999997,0],[0,-0.0429700000000004],[-0.00001000000000006551,-0.3953599999999993],[0.02421999999999969,-0.2965099999999996],[0.2157100000000005,-0.4233599999999997],[0.2837900000000007,-0.1445999999999996],[0.2809300000000006,-0.0229499999999998],[0,0],[0,0],[0.0429700000000004,0]]}],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[{"c":false,"v":[[3.121090417391935,4.17391936125e-7],[3.250000417391935,4.17391936125e-7],[4.000000417391935,0.7500004173919361],[3.250000417391935,1.500000417391936],[3.150000417391936,1.500000417391936],[2.225880417391935,1.517950417391936],[1.909510417391935,1.581750417391937],[1.581750417391936,1.909510417391936],[1.517950417391935,2.225880417391936],[1.500000417391935,3.150000417391936],[1.500000417391935,3.250000417391936],[0.7500004173919352,4.000000417391936],[4.173919352368216e-7,3.250000417391936],[4.173919352368216e-7,3.121090417391936],[0.02293041739193535,2.103730417391936],[0.2452404173919351,1.228520417391936],[1.228520417391935,0.245240417391936],[2.103730417391935,0.0229304173919358],[3.121090417391935,4.17391936125e-7],[3.121090417391935,4.17391936125e-7],[3.121090417391935,4.17391936125e-7]],"i":[[0,0],[-0.0429700000000004,0],[0,-0.4142099999999997],[0.4142099999999997,0],[0.03333333333333321,0],[0.2125000000000004,-0.01736999999999966],[0.03707999999999956,-0.01890000000000036],[0.07189999999999941,-0.1411199999999999],[0.01663999999999977,-0.2037500000000003],[0,-0.43241],[0,-0.03333333333333321],[0.4142099999999997,0],[0,0.4142100000000006],[0,0.0429700000000004],[-0.02295000000000025,0.2809300000000006],[-0.14460000000000006,0.2837900000000007],[-0.4233599999999997,0.2157100000000005],[-0.2965099999999996,0.02422000000000057],[-0.3953599999999993,-0.000009999999999621423],[0,0],[0,0]],"o":[[0.0429700000000004,0],[0.4142099999999997,0],[0,0.4142099999999997],[-0.03333333333333321,0],[-0.43241,0],[-0.2037500000000003,0.01663999999999977],[-0.1411199999999999,0.07189999999999941],[-0.01890000000000036,0.03707999999999956],[-0.01736999999999966,0.2125000000000004],[0,0.03333333333333321],[0,0.4142100000000006],[-0.4142099999999997,0],[0,-0.0429700000000004],[-0.00001000000000006551,-0.3953599999999993],[0.02421999999999969,-0.2965099999999996],[0.2157100000000005,-0.4233599999999997],[0.2837900000000007,-0.1445999999999996],[0.2809300000000006,-0.0229499999999998],[0,0],[0,0],[0.0429700000000004,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}},{"ty":"fl","c":{"a":1,"k":[{"t":77,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":true},{"ty":"tm","s":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"e":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":77,"s":[-6.250000476837158,-5.250000476837158],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[-6.250000476837158,-5.250000476837158],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":1,"k":[{"t":77,"s":[0,0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0,0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sk":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sa":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}}]},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":77,"s":[9.999999761581421,9.999999761581421],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[9.999999761581421,9.999999761581421],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[60,60],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":137,"s":[107,107],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":167,"s":[100,100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":277,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":307,"s":[60,60],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":337,"s":[107,107],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":367,"s":[99.99999999999999,99.99999999999999],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":167,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":277,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":307,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":367,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"refId":"1","w":20000,"h":20000,"ind":4,"ty":0,"nm":"middle","sr":1,"ks":{"o":{"a":1,"k":[{"t":277,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":307,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10010,10010],"ix":2},"a":{"a":0,"k":[10000,10000],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[50,50],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":148,"s":[100,100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":200,"s":[100,100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":277,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":307,"s":[50,50],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":348,"s":[100,100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false}]},{"id":"1","layers":[{"ddd":0,"ind":2,"ty":4,"nm":"bottom","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,0.75],[0.75,0],[4.25,0],[5,0.75],[4.25,1.5],[0.75,1.5],[0,0.75],[0,0.75],[0,0.75]],"i":[[0,0],[-0.4142099999999997,0],[-1.166666666666668,0],[0,-0.4141999999999992],[0.4141999999999992,0],[1.166666666666668,0],[0,0.4141999999999992],[0,0],[0,0]],"o":[[0,-0.4141999999999992],[1.166666666666666,0],[0.4141999999999992,0],[0,0.4141999999999992],[-1.166666666666666,0],[-0.4142099999999997,0],[0,0],[0,0],[0,-0.4141999999999992]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-3.25,0.625],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":175,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":200,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":277,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":307,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":375,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":400,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"top","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,0.7500000000000009],[0.75,8.881784197001252e-16],[5.75,8.881784197001252e-16],[6.5,0.7500000000000009],[5.75,1.5000000000000009],[0.75,1.5000000000000009],[0,0.7500000000000009],[0,0.7500000000000009],[0,0.7500000000000009]],"i":[[0,0],[-0.4142099999999997,0],[-1.666666666666668,0],[0,-0.4142100000000006],[0.4141999999999992,0],[1.666666666666668,0],[0,0.4142100000000006],[0,0],[0,0]],"o":[[0,-0.4142100000000006],[1.666666666666666,0],[0.4141999999999992,0],[0,0.4142100000000006],[-1.666666666666666,0],[-0.4142099999999997,0],[0,0],[0,0],[0,-0.4142100000000006]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-3.25,-2.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":163,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":188,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":277,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":307,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":363,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":388,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":5,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"p":{"a":1,"k":[{"t":77,"s":[10,10],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[10,10],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":7,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":1,"k":[{"t":77,"s":[45],"i":{"x":[0],"y":[0]},"o":{"x":[0],"y":[0]}},{"t":107,"s":[45],"i":{"x":[0],"y":[0]},"o":{"x":[0],"y":[0]}}],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false,"parent":5},{"ddd":0,"ind":6,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0],"y":[0]},"o":{"x":[0],"y":[0]}},{"t":107,"s":[100,100],"i":{"x":[0],"y":[0]},"o":{"x":[0],"y":[0]}}],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false,"parent":7},{"ddd":0,"refId":"2","w":20000,"h":20000,"ind":8,"ty":0,"nm":"SVG Import 1","sr":1,"ks":{"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":{"a":1,"k":[{"t":77,"s":[-45],"i":{"x":[0],"y":[0]},"o":{"x":[0],"y":[0]}},{"t":107,"s":[-45],"i":{"x":[0],"y":[0]},"o":{"x":[0],"y":[0]}}],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":1,"k":[{"t":77,"s":[10010,10010],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[10010,10010],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false,"parent":6}],"markers":[]}'
        ),
        eG = a(68233),
        eH = a.n(eG),
        eQ = a(77997);
      function eW(e) {
        var t = e.animationData,
          a = e.animationSegmentToPlay,
          i = e.animationLoopCounter,
          n = (0, _.useRef)(null);
        return (
          (0, _.useEffect)(
            function () {
              var e;
              null === (e = n.current) || void 0 === e || e.playSegments(a, !0);
            },
            [i]
          ),
          (0, j.jsx)(eH(), { animationData: t, lottieRef: n, loop: !1, autoplay: !1 })
        );
      }
      function e$(e) {
        var t = e.animationLoopCounter;
        return (0, j.jsx)(eW, { animationData: eA, animationSegmentToPlay: [180, 380], animationLoopCounter: t });
      }
      function eJ(e) {
        var t = e.animationLoopCounter;
        return (0, j.jsx)(eW, { animationData: eV, animationSegmentToPlay: [132, 332], animationLoopCounter: t });
      }
      function eY(e) {
        var t = e.animationLoopCounter;
        return (0, j.jsx)(eW, { animationData: eL, animationSegmentToPlay: [160, 360], animationLoopCounter: t });
      }
      function eK(e) {
        var t = e.animationLoopCounter;
        return (0, j.jsx)(eW, { animationData: eO, animationSegmentToPlay: [0, 350], animationLoopCounter: t });
      }
      function eX(e) {
        var t = e.animationLoopCounter;
        return (0, j.jsx)(eW, { animationData: eD, animationSegmentToPlay: [0, 400], animationLoopCounter: t });
      }
      function e0(e) {
        return (0, j.jsx)(
          eE.A0,
          (0, b._)((0, k._)({ width: '8', height: '9', viewBox: '0 0 8 9', fill: 'none' }, e), {
            children: (0, j.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M7.66607 0.376042C8.01072 0.605806 8.10385 1.07146 7.87408 1.4161L3.54075 7.9161C3.40573 8.11863 3.18083 8.24304 2.93752 8.24979C2.69421 8.25654 2.46275 8.1448 2.31671 7.95008L0.150044 5.06119C-0.098484 4.72982 -0.0313267 4.25972 0.300044 4.01119C0.631415 3.76266 1.10152 3.82982 1.35004 4.16119L2.88068 6.20204L6.62601 0.584055C6.85577 0.239408 7.32142 0.146278 7.66607 0.376042Z',
              fill: 'currentColor',
            }),
          })
        );
      }
      function e9(e) {
        return (0, j.jsxs)(
          eE.A0,
          (0, b._)((0, k._)({ width: '4', height: '12', viewBox: '0 0 4 12', fill: 'none' }, e), {
            children: [
              (0, j.jsx)('mask', {
                id: 'path-1-inside-1_1975_4008',
                fill: 'currentColor',
                children: (0, j.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M1 6.5C1 7.05228 1.44772 7.5 2 7.5C2.55228 7.5 3 7.05228 3 6.5V1.5C3 0.947715 2.55228 0.5 2 0.5C1.44772 0.5 1 0.947715 1 1.5L1 6.5ZM0.75 10.25C0.75 10.9404 1.30964 11.5 2 11.5C2.69036 11.5 3.25 10.9404 3.25 10.25C3.25 9.55964 2.69036 9 2 9C1.30964 9 0.75 9.55964 0.75 10.25Z',
                }),
              }),
              (0, j.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M1 6.5C1 7.05228 1.44772 7.5 2 7.5C2.55228 7.5 3 7.05228 3 6.5V1.5C3 0.947715 2.55228 0.5 2 0.5C1.44772 0.5 1 0.947715 1 1.5L1 6.5ZM0.75 10.25C0.75 10.9404 1.30964 11.5 2 11.5C2.69036 11.5 3.25 10.9404 3.25 10.25C3.25 9.55964 2.69036 9 2 9C1.30964 9 0.75 9.55964 0.75 10.25Z',
                fill: 'currentColor',
              }),
              (0, j.jsx)('path', {
                d: 'M1 6.5H-0.25H1ZM1 1.5L-0.25 1.5L-0.25 1.5L1 1.5ZM2 6.25C2.13807 6.25 2.25 6.36193 2.25 6.5H-0.25C-0.25 7.74264 0.757359 8.75 2 8.75V6.25ZM1.75 6.5C1.75 6.36193 1.86193 6.25 2 6.25V8.75C3.24264 8.75 4.25 7.74264 4.25 6.5H1.75ZM1.75 1.5V6.5H4.25V1.5H1.75ZM2 1.75C1.86193 1.75 1.75 1.63807 1.75 1.5H4.25C4.25 0.257359 3.24264 -0.75 2 -0.75V1.75ZM2.25 1.5C2.25 1.63807 2.13807 1.75 2 1.75V-0.75C0.757359 -0.75 -0.25 0.257359 -0.25 1.5L2.25 1.5ZM2.25 6.5L2.25 1.5L-0.25 1.5L-0.25 6.5L2.25 6.5ZM2 10.25H-0.5C-0.5 11.6307 0.619288 12.75 2 12.75V10.25ZM2 10.25V12.75C3.38071 12.75 4.5 11.6307 4.5 10.25H2ZM2 10.25H2H4.5C4.5 8.86929 3.38071 7.75 2 7.75V10.25ZM2 10.25H2V7.75C0.619288 7.75 -0.5 8.86929 -0.5 10.25H2Z',
                fill: 'currentColor',
                mask: 'url(#path-1-inside-1_1975_4008)',
              }),
            ],
          })
        );
      }
      function e1(e) {
        return (0, j.jsx)(
          eE.A0,
          (0, b._)((0, k._)({ width: '8', height: '9', viewBox: '0 0 8 9', fill: 'none' }, e), {
            children: (0, j.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M7.32256 1.48447C7.59011 1.16827 7.55068 0.695034 7.23447 0.427476C6.91827 0.159918 6.44503 0.199354 6.17748 0.515559L4.00002 3.08892L1.82256 0.515559C1.555 0.199354 1.08176 0.159918 0.765559 0.427476C0.449355 0.695034 0.409918 1.16827 0.677476 1.48447L3.01755 4.25002L0.677476 7.01556C0.409918 7.33176 0.449354 7.805 0.765559 8.07256C1.08176 8.34011 1.555 8.30068 1.82256 7.98447L4.00002 5.41111L6.17748 7.98447C6.44503 8.30068 6.91827 8.34011 7.23447 8.07256C7.55068 7.805 7.59011 7.33176 7.32256 7.01556L4.98248 4.25002L7.32256 1.48447Z',
              fill: 'currentColor',
            }),
          })
        );
      }
      function e2(e) {
        var t = e.animationLoopCounter,
          a = (0, eQ.F)().resolvedTheme;
        return (0, j.jsx)(eW, {
          animationData: 'dark' === a ? eZ : ez,
          animationSegmentToPlay: [0, 300],
          animationLoopCounter: t,
        });
      }
      function e5(e) {
        var t = e.animationLoopCounter,
          a = (0, eQ.F)().resolvedTheme;
        return (0, j.jsx)(eW, {
          animationData: 'dark' === a ? eB : eq,
          animationSegmentToPlay: [0, 400],
          animationLoopCounter: t,
        });
      }
      function e3(e) {
        var t = e.animationLoopCounter;
        return (0, j.jsx)(eW, { animationData: eU, animationSegmentToPlay: [0, 200], animationLoopCounter: t });
      }
      var e6 = a(62682);
      function e4(e) {
        return (0, z.qi)(e) && !(0, z.oH)(e);
      }
      function e7() {
        var e = (0, Z.hz)(),
          t = (0, W.Ml)();
        return e.has(e6.vE) && t;
      }
      function e8(e) {
        var t = e.conversationMessages,
          a = e.icon,
          i = e.status,
          n = e.displayMessage,
          s = e.displayMessageValues,
          r = e.estimatedToolDurationMs,
          o = e.animationLoopDurationMs,
          l = e.shouldPersistAfterFinished,
          d = void 0 !== l && l,
          c = (0, w._)((0, _.useState)(i === u.Running ? m.RunningEnterAnimation : m.SkippingEnterAnimation), 2),
          x = c[0],
          g = c[1],
          h = (0, w._)((0, _.useState)(0), 2),
          f = h[0],
          p = h[1];
        (0, _.useEffect)(
          function () {
            i === u.Error
              ? g(m.ToolError)
              : i === u.Stopped
                ? g(m.ToolStopped)
                : i === u.Paused
                  ? g(m.ToolPaused)
                  : i === u.Finished
                    ? x === m.ToolRunning
                      ? g(m.RunningFillProgressBarAnimation)
                      : g(m.ToolFinished)
                    : i === u.Running &&
                      x === m.ToolPaused &&
                      (g(m.ToolRunning),
                      p(function (e) {
                        return e + 1;
                      }));
          },
          [i]
        );
        var v =
          ta(x) ||
          x === m.RunningFinishAnimation ||
          x === m.FinishAnimationComplete ||
          x === m.RunningHideAnimation ||
          x === m.ToolPaused;
        return ((0, _.useEffect)(
          function () {
            var e = t[0].message.id;
            if (v)
              return (
                eF.addDelayedRenderingMessage(e),
                function () {
                  eF.removeDelayedRenderingMessage(e);
                }
              );
          },
          [v]
        ),
        eC(
          function () {
            ta(x) &&
              p(function (e) {
                return e + 1;
              });
          },
          void 0 === o ? 2e3 : o
        ),
        x !== m.ToolFinished || d)
          ? (0, j.jsxs)('div', {
              className: 'my-2.5 flex items-center gap-2.5',
              children: [
                (0, j.jsx)(te, {
                  icon: a,
                  status: i,
                  uiState: x,
                  estimatedToolDurationMs: r,
                  animationLoopCounter: f,
                  shouldPersistAfterFinished: d,
                  onFillProgressBarAnimationComplete: function () {
                    return g(m.RunningFinishAnimation);
                  },
                  onFinishAnimationComplete: function () {
                    g(m.FinishAnimationComplete),
                      setTimeout(function () {
                        d ? g(m.ToolFinished) : g(m.RunningHideAnimation);
                      }, 500);
                  },
                  onHideAnimationComplete: function () {
                    return g(m.ToolFinished);
                  },
                }),
                (0, j.jsx)(tt, {
                  displayMessage: n,
                  displayMessageValues: s,
                  uiState: x,
                  animationLoopCounter: f,
                  onEnterAnimationComplete: function () {
                    return g(m.ToolRunning);
                  },
                }),
              ],
            })
          : null;
      }
      function te(e) {
        var t,
          a,
          i,
          n = e.icon,
          s = e.status,
          r = e.uiState,
          o = e.estimatedToolDurationMs,
          l = e.animationLoopCounter,
          d = e.shouldPersistAfterFinished,
          c = e.onFillProgressBarAnimationComplete,
          x = e.onFinishAnimationComplete,
          g = e.onHideAnimationComplete,
          h = (0, w._)((0, _.useState)(0), 2),
          f = h[0],
          p = h[1];
        eC(function () {
          ta(r)
            ? p(function (e) {
                return e + 50;
              })
            : r === m.ToolPaused && p(0);
        }, 50),
          ta(r) || r === m.ToolPaused
            ? ((t = 'running'), (a = (0, j.jsx)(n, { animationLoopCounter: l })), (i = 'bg-transparent'))
            : r === m.RunningFinishAnimation || r === m.FinishAnimationComplete || (r === m.ToolFinished && d)
              ? ((t = 'finished'), (a = (0, j.jsx)(e0, {})), (i = 'bg-brand-purple'))
              : s === u.Error
                ? ((t = 'error'), (a = (0, j.jsx)(e9, {})), (i = 'bg-orange-500'))
                : s === u.Stopped && ((t = 'stopped'), (a = (0, j.jsx)(e1, {})), (i = 'bg-gray-300'));
        var v = { opacity: 0, scale: 0, rotate: -180, x: 0 },
          y = { type: 'spring', bounce: 0.3, duration: 0.7 },
          k = { opacity: 0, scale: 0.6, rotate: 0, x: 0 };
        r === m.RunningEnterAnimation
          ? ((v = { opacity: 0, scale: 0.5, rotate: -180, x: -8 }),
            (y = { type: 'spring', bounce: 0.3, duration: 0.5 }))
          : r === m.SkippingEnterAnimation
            ? (v = !1)
            : r === m.FinishAnimationComplete && (k = { opacity: 0, scale: 0, rotate: 0, x: 0 });
        var b = f <= o ? (f / o) * 50 : 50 + 45 * (1 - Math.exp((-(50 / o) / 45) * (f - o)));
        return (0, j.jsx)('div', {
          className: 'relative h-5 w-5 shrink-0',
          children: (0, j.jsx)(e_.M, {
            onExitComplete: function () {
              r === m.RunningHideAnimation && g();
            },
            children:
              null != t &&
              (0, j.jsxs)(
                eT.E.div,
                {
                  className: (0, C.default)(
                    'absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full text-white',
                    i
                  ),
                  initial: v,
                  animate: { opacity: 1, scale: 1, rotate: 0, x: 0 },
                  exit: k,
                  transition: y,
                  onAnimationComplete: function () {
                    r === m.RunningFinishAnimation && x();
                  },
                  children: [
                    a,
                    (ta(r) || r === m.ToolPaused) &&
                      (0, j.jsx)(ej.Z, {
                        percentage: r === m.RunningFillProgressBarAnimation ? 100 : b,
                        thickness: 1.5 / 23,
                        className:
                          'absolute left-1/2 top-1/2 h-[23px] w-[23px] -translate-x-1/2 -translate-y-1/2 text-brand-purple',
                        backgroundStrokeClassName: 'stroke-brand-purple/25 dark:stroke-brand-purple/50',
                        transitionDuration:
                          r === m.RunningFillProgressBarAnimation ? ''.concat(((100 - b) / 100) * 2, 's') : void 0,
                        transitionTimingFunction:
                          r === m.RunningFillProgressBarAnimation ? 'cubic-bezier(0.55, 0, 1, 1)' : void 0,
                        onTransitionEnd: function () {
                          r === m.RunningFillProgressBarAnimation && c();
                        },
                      }),
                  ],
                },
                t
              ),
          }),
        });
      }
      function tt(e) {
        var t = e.displayMessage,
          a = e.displayMessageValues,
          i = e.uiState,
          n = e.animationLoopCounter,
          s = e.onEnterAnimationComplete,
          r = (0, F.Z)(),
          o = (0, w._)((0, _.useState)({ message: t, values: a }), 2),
          l = o[0],
          d = o[1];
        (0, _.useEffect)(
          function () {
            i === m.ToolRunning && d({ message: t, values: a });
          },
          [n]
        ),
          (0, _.useEffect)(
            function () {
              ta(i) || d({ message: t, values: a });
            },
            [i, t, a]
          );
        var c = { opacity: 0, x: 0, y: 15 },
          u = { type: 'spring', bounce: 0.3, opacity: { duration: 0.15 }, y: { duration: 0.3 } };
        i === m.RunningEnterAnimation
          ? ((c = { opacity: 0, x: -8, y: 0 }), (u = { type: 'spring', bounce: 0.3, duration: 0.5, delay: 0.15 }))
          : i === m.SkippingEnterAnimation && (c = !1);
        var x = null != l.message ? r.formatMessage(l.message, l.values) : void 0;
        return (0, j.jsx)('div', {
          className: (0, C.default)(
            'relative h-5 w-full leading-5',
            '-mt-[0.75px]',
            i === m.ToolError || i === m.ToolStopped ? 'text-token-text-tertiary' : 'text-token-text-secondary'
          ),
          children: (0, j.jsx)(e_.M, {
            children:
              null != x &&
              (0, j.jsx)(
                eT.E.div,
                {
                  className: 'absolute left-0 top-0 line-clamp-1',
                  initial: c,
                  animate: { opacity: 1, x: 0, y: 0 },
                  exit: { opacity: 0, x: 0, y: -15 },
                  transition: u,
                  onAnimationComplete: function () {
                    i === m.RunningEnterAnimation && s();
                  },
                  children: x,
                },
                x.toString()
              ),
          }),
        });
      }
      function ta(e) {
        return e === m.RunningEnterAnimation || e === m.ToolRunning || e === m.RunningFillProgressBarAnimation;
      }
      function ti(e) {
        var t,
          a,
          i = e.messages,
          n = e.clientThreadId,
          s = e.isLastTurnInConversation,
          r = e.onRequestCompletion,
          o = (0, ei._)(i),
          l = o[0],
          d = o.slice(1),
          c = (0, F.Z)(),
          m = e4(l.message),
          x = (0, S.Wq)(n);
        (x.kind === A.OL.GizmoInteraction || x.kind === A.OL.GizmoMagicCreate || x.kind === A.OL.GizmoTest) &&
          (L = x.gizmo);
        var g = (0, z.Lx)(l.message.recipient);
        if ((null == g ? void 0 : g.functionName) != null && (null == L ? void 0 : L.config.enabled_tools) != null) {
          var h = !0,
            f = !1,
            p = void 0;
          try {
            for (
              var v, y, w, M, C, _, T, N, I, P, R, E, L, D, Z, B = L.config.enabled_tools[Symbol.iterator]();
              !(h = (Z = B.next()).done);
              h = !0
            ) {
              var q = Z.value;
              if (
                (function (e, t) {
                  if ((null === (a = e.data) || void 0 === a ? void 0 : a.json_schema) == null) return !1;
                  var a,
                    i = !1;
                  return (
                    !(function e(a) {
                      for (var n in a)
                        'operationId' === n && a[n] === t && (i = !0), a[n] && 'object' == typeof a[n] && e(a[n]);
                    })(e.data.json_schema),
                    i
                  );
                })(q, g.functionName)
              ) {
                D = q;
                break;
              }
            }
          } catch (e) {
            (f = !0), (p = e);
          } finally {
            try {
              h || null == B.return || B.return();
            } finally {
              if (f) throw p;
            }
          }
        }
        var U =
            (null == D
              ? void 0
              : null === (v = D.data) || void 0 === v
                ? void 0
                : null === (y = v.auth) || void 0 === y
                  ? void 0
                  : y.type) === A.Jv.OAuth,
          O = (0, ev.Wd)(null == L ? void 0 : L.id, U),
          V = O.data,
          G = O.isLoading;
        if (null == L || (U && G)) return null;
        var H =
            null ===
              (w =
                null ===
                  (M = d.find(function (e) {
                    var t, a;
                    return (
                      (null === (t = e.message.metadata) || void 0 === t
                        ? void 0
                        : null === (a = t.jit_plugin_data) || void 0 === a
                          ? void 0
                          : a.from_server) != null
                    );
                  })) || void 0 === M
                  ? void 0
                  : M.message.metadata) || void 0 === w
              ? void 0
              : null === (C = w.jit_plugin_data) || void 0 === C
                ? void 0
                : C.from_server,
          Q =
            null ===
              (_ =
                null ===
                  (T = d.find(function (e) {
                    var t, a;
                    return (
                      (null === (t = e.message.metadata) || void 0 === t
                        ? void 0
                        : null === (a = t.jit_plugin_data) || void 0 === a
                          ? void 0
                          : a.from_client) != null
                    );
                  })) || void 0 === T
                  ? void 0
                  : T.message.metadata) || void 0 === _
              ? void 0
              : null === (N = _.jit_plugin_data) || void 0 === N
                ? void 0
                : N.from_client,
          W =
            null !==
              (t = d.find(function (e) {
                var t;
                return (null === (t = e.message.metadata) || void 0 === t ? void 0 : t.invoked_plugin) != null;
              })) && void 0 !== t
              ? t
              : null,
          $ = d.some(function (e) {
            return e.message.content.content_type === A.PX.SystemError;
          }),
          J =
            (null ===
              (I =
                null == V
                  ? void 0
                  : V.settings.find(function (e) {
                      var t;
                      return (
                        e.action_id ===
                        (null == D ? void 0 : null === (t = D.data) || void 0 === t ? void 0 : t.action_id)
                      );
                    })) || void 0 === I
              ? void 0
              : I.oauth_status) === 'valid',
          Y = (null == H ? void 0 : H.type) === 'confirm_action' && !Q && s,
          K = (null == H ? void 0 : H.type) === 'oauth_required',
          X = K && !J && s,
          ee = (null == Q ? void 0 : null === (P = Q.user_action) || void 0 === P ? void 0 : P.type) === A._X.Deny,
          er =
            null !== (a = null == D ? void 0 : null === (R = D.data) || void 0 === R ? void 0 : R.domain) &&
            void 0 !== a
              ? a
              : null == H
                ? void 0
                : H.body.domain,
          eo = null == D ? void 0 : null === (E = D.data) || void 0 === E ? void 0 : E.privacy_policy_url,
          el = u.Running,
          ed = to.running,
          ec = { domain: er };
        if (K && J) (el = u.Finished), (ed = to.signedIn);
        else if (Y || X) {
          (el = u.Paused), (ed = to.confirming);
          var eu = c.formatMessage(to.confirmParamsTitle, { gizmoName: L.name, domain: er });
          ec = {
            domain: er,
            params: function (e) {
              return (0, j.jsx)(tr, { title: eu, assistantMessage: l, privacyPolicyUrl: eo, children: e });
            },
          };
        } else if (null != W) {
          (el = u.Finished), (ed = to.finished);
          var em = c.formatMessage(to.sentParamsTitle, { gizmoName: L.name, domain: er });
          ec = {
            domain: er,
            params: function (e) {
              return (0, j.jsx)(tr, { title: em, assistantMessage: l, privacyPolicyUrl: eo, children: e });
            },
          };
        } else
          $
            ? ((el = u.Error), (ed = to.error))
            : (m || ee || !s) && ((el = u.Stopped), (ed = ee ? to.declined : to.stopped));
        return (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsx)(e8, {
              conversationMessages: i,
              icon: e3,
              status: el,
              displayMessage: ed,
              displayMessageValues: ec,
              estimatedToolDurationMs: 2e3,
              shouldPersistAfterFinished: !0,
            }),
            Y &&
              (0, j.jsxs)('div', {
                className: 'mb-2 flex gap-2',
                children: [
                  (0, j.jsx)(es.z, {
                    color: 'dark',
                    className: 'h-8',
                    onClick: function () {
                      tn(A._X.Allow, l, i, n, x, r);
                    },
                    children: (0, j.jsx)(ew.Z, (0, k._)({}, to.allow)),
                  }),
                  !H.body.is_consequential &&
                    (0, j.jsx)(es.z, {
                      color: 'neutral',
                      className: 'h-8',
                      onClick: (0, et._)(function () {
                        return (0, en.Jh)(this, function (e) {
                          return (
                            tn(A._X.Allow, l, i, n, x, r),
                            ey.U.upsertUserActionSettings(
                              H.body.gizmo_action_id,
                              H.body.domain,
                              (0, ea._)({}, H.body.operation_hash, 'always_allow')
                            ),
                            [2]
                          );
                        });
                      }),
                      children: (0, j.jsx)(ew.Z, (0, k._)({}, to.alwaysAllow)),
                    }),
                  (0, j.jsx)(es.z, {
                    color: 'neutral',
                    className: 'h-8',
                    onClick: function () {
                      tn(A._X.Deny, l, i, n, x, r);
                    },
                    children: (0, j.jsx)(ew.Z, (0, k._)({}, to.decline)),
                  }),
                ],
              }),
            X &&
              (0, j.jsx)('div', {
                className: 'mb-2',
                children: (0, j.jsx)(es.z, {
                  color: 'dark',
                  className: 'h-8',
                  onClick: function () {
                    !(function (e, t, a, i) {
                      ts.apply(this, arguments);
                    })(H.body, n, L, x.kind);
                  },
                  children: (0, j.jsx)(ew.Z, (0, b._)((0, k._)({}, to.signInButton), { values: { domain: er } })),
                }),
              }),
          ],
        });
      }
      function tn(e, t, a, i, n, s) {
        var r = {
          id: (0, eM.Z)(),
          author: { role: A.uU.Tool, name: t.message.recipient },
          content: {
            content_type: A.PX.Text,
            parts: [
              e === A._X.Deny
                ? 'The user just clicked on a Decline button to disallow the jit_plugin action. DO NOT try using the jit_plugin again unless the user asks you to again.'
                : '',
            ],
          },
          recipient: 'all',
          metadata: { jit_plugin_data: { from_client: { user_action: { type: e, target_message_id: t.message.id } } } },
        };
        L.tQ.updateTree(i, function (e) {
          e.addNode(r.id, r, a[a.length - 1].message.id, A.uU.Tool, { completionSampleFinishTime: Date.now() });
        }),
          L.tQ.setThreadCurrentLeafId(i, r.id),
          s({
            type: A.Os.Next,
            promptId: r.id,
            eventMetadata: { eventSource: 'mouse' },
            cancelActiveRequests: !1,
            completionMetadata: { conversationMode: n },
          });
      }
      function ts() {
        return (ts = (0, et._)(function (e, t, a, i) {
          var n, s;
          return (0, en.Jh)(this, function (r) {
            return (
              (n = L.tQ.getServerThreadId(t)),
              (s = window.location.href),
              n && (s = (0, ek.ZV)(n, a)),
              ey.U.doOAuthRedirect(e.gizmo_id, e.gizmo_action_id, e.domain, s, i === A.OL.GizmoTest),
              [2]
            );
          });
        })).apply(this, arguments);
      }
      function tr(e) {
        var t = e.title,
          a = e.children,
          i = e.assistantMessage,
          n = e.privacyPolicyUrl,
          s = (0, z.RR)(i.message);
        try {
          s = JSON.stringify(JSON.parse(s), null, 2);
        } catch (e) {}
        return (0, j.jsxs)(eb.fC, {
          children: [
            (0, j.jsx)(eb.xz, {
              children: (0, j.jsxs)('div', {
                className: 'inline-flex items-center gap-1',
                children: [a, (0, j.jsx)(I.ud, {})],
              }),
            }),
            (0, j.jsx)(eb.h_, {
              children: (0, j.jsx)(eb.VY, {
                side: 'bottom',
                sideOffset: 8,
                align: 'start',
                children: (0, j.jsxs)('div', {
                  className:
                    'max-w-sm rounded-lg bg-token-surface-primary p-2 shadow-[0_0_24px_0_rgba(0,0,0,0.05),inset_0_0.5px_0_0_rgba(0,0,0,0.05),0_2px_8px_0_rgba(0,0,0,0.05)]',
                  children: [
                    (0, j.jsx)('div', { className: 'mb-2 text-sm font-medium', children: t }),
                    (0, j.jsx)(ep, {
                      className: 'bg-token-surface-secondary text-xs text-token-text-primary',
                      codeContainerClassName: 'max-h-32 p-2',
                      children: s,
                    }),
                    null != n &&
                      (0, j.jsx)('div', {
                        className: 'mt-2 flex text-sm',
                        children: (0, j.jsxs)('a', {
                          href: n,
                          target: '_blank',
                          rel: 'noreferrer',
                          className:
                            'flex items-center gap-1 text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
                          children: [(0, j.jsx)(ew.Z, (0, k._)({}, to.privacyPolicyLink)), (0, j.jsx)(T.AlO, {})],
                        }),
                      }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      ((i = u || (u = {}))[(i.Running = 0)] = 'Running'),
        (i[(i.Finished = 1)] = 'Finished'),
        (i[(i.Error = 2)] = 'Error'),
        (i[(i.Stopped = 3)] = 'Stopped'),
        (i[(i.Paused = 4)] = 'Paused'),
        ((n = m || (m = {}))[(n.RunningEnterAnimation = 0)] = 'RunningEnterAnimation'),
        (n[(n.SkippingEnterAnimation = 1)] = 'SkippingEnterAnimation'),
        (n[(n.ToolRunning = 2)] = 'ToolRunning'),
        (n[(n.RunningFillProgressBarAnimation = 3)] = 'RunningFillProgressBarAnimation'),
        (n[(n.RunningFinishAnimation = 4)] = 'RunningFinishAnimation'),
        (n[(n.FinishAnimationComplete = 5)] = 'FinishAnimationComplete'),
        (n[(n.RunningHideAnimation = 6)] = 'RunningHideAnimation'),
        (n[(n.ToolFinished = 7)] = 'ToolFinished'),
        (n[(n.ToolError = 8)] = 'ToolError'),
        (n[(n.ToolStopped = 9)] = 'ToolStopped'),
        (n[(n.ToolPaused = 10)] = 'ToolPaused');
      var to = (0, E.vU)({
          confirming: {
            id: 'jitPluginMessage.confirmingV2',
            defaultMessage: '<params>Some info will be sent to {domain}, only do this for sites you trust</params>',
            description: 'Status message when a custom action is showing a user confirmation',
          },
          running: {
            id: 'jitPluginMessage.runningV4',
            defaultMessage: 'Talking to {domain}',
            description: 'Status message when a custom action is running',
          },
          finished: {
            id: 'jitPluginMessage.finishedV3',
            defaultMessage: '<params>Talked to {domain}</params>',
            description: 'Status message when a custom action is finished',
          },
          stopped: {
            id: 'jitPluginMessage.stoppedV4',
            defaultMessage: 'Stopped talking to {domain}',
            description: 'Status message when a custom action was stopped by the user',
          },
          error: {
            id: 'jitPluginMessage.errorV5',
            defaultMessage: 'Error talking to {domain}',
            description: 'Status message when a custom action ran into an error',
          },
          declined: {
            id: 'jitPluginMessage.declined',
            defaultMessage: 'You declined this action',
            description: 'Status message when a custom action was declined by the user',
          },
          alwaysAllow: {
            id: 'jitPluginMessage.alwaysAllow',
            defaultMessage: 'Always allow',
            description: 'Button text for the user to always allow the custom action',
          },
          allow: {
            id: 'jitPluginMessage.allow',
            defaultMessage: 'Allow',
            description: 'Button text for the user to allow the custom action',
          },
          decline: {
            id: 'jitPluginMessage.decline',
            defaultMessage: 'Decline',
            description: 'Button text for the user to decline the custom action',
          },
          confirmParamsTitle: {
            id: 'jitPluginMessage.confirmParamsTitleV2',
            defaultMessage: '{gizmoName} needs to send this info to {domain}',
            description: 'Title describing data that will be sent to the external website',
          },
          sentParamsTitle: {
            id: 'jitPluginMessage.sentParamsTitleV2',
            defaultMessage: '{gizmoName} sent this info to {domain}',
            description: 'Title describing data that was sent to the external website',
          },
          signInButton: {
            id: 'jitPluginMessage.signInButton',
            defaultMessage: 'Sign in with {domain}',
            description: 'Button text for the user to sign in with an external website',
          },
          signedIn: {
            id: 'jitPluginMessage.signedIn',
            defaultMessage: 'Signed in with {domain}',
            description: 'Status text when the user successfully signed in with an external website',
          },
          privacyPolicyLink: {
            id: 'jitPluginMessage.privacyPolicyLinkV2',
            defaultMessage: 'Privacy policy',
            description: 'Text for the privacy policy link',
          },
        }),
        tl = a(42786),
        td = a(5053),
        tc = a(86646),
        tu = a(98486),
        tm = a(61236),
        tx = a(21988),
        tg = a.n(tx),
        th = a(17130),
        tf = a(44675);
      function tp(e) {
        var t = (0, w._)((0, _.useState)(!1), 2),
          a = t[0],
          i = t[1];
        return (0, j.jsx)(
          tg(),
          (0, b._)((0, k._)({}, e), {
            alt: e.alt,
            onLoadingComplete: function (t) {
              var a;
              i(!0), null === (a = e.onLoadingComplete) || void 0 === a || a.call(e, t);
            },
            unoptimized: !0,
            className: (0, C.default)(e.className, 'transition-opacity duration-300', a ? 'opacity-100' : 'opacity-0'),
          })
        );
      }
      function tv(e) {
        var t = (0, _.useContext)(B.gB),
          a = null == t ? void 0 : t.serverSharedThreadId;
        return (0, tu.h)({
          queries: e.map(function (e) {
            var t = (0, th.Iy)(e.asset_pointer);
            return {
              queryKey: ['getFileDownloadLink', t],
              queryFn: (0, et._)(function () {
                var i;
                return (0, en.Jh)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (!(null != a)) return [3, 1];
                      return [2, (0, b._)((0, k._)({}, e), { url: ty(a, t) })];
                    case 1:
                      return [
                        4,
                        tc.ZP.getFileDownloadLink(t).catch(function (e) {
                          throw (
                            (console.error('Could not fetch file with ID '.concat(t, ' from file service'), e.message),
                            e)
                          );
                        }),
                      ];
                    case 2:
                      if ((i = n.sent()).status !== td.KF.Success)
                        throw (
                          (console.error('Could not fetch file with ID '.concat(t, ' from file service'), i),
                          Error('Could not fetch file with ID '.concat(t, ' from file service')))
                        );
                      return [2, (0, b._)((0, k._)({}, e), { url: i.download_url })];
                    case 3:
                      return [2];
                  }
                });
              }),
            };
          }),
        });
      }
      function ty(e, t) {
        var a,
          i = null !== (a = tf.env.CDN_IMAGE_BASE_URL) && void 0 !== a ? a : '',
          n = ''.concat(e, '/image/').concat(t);
        return i ? ''.concat(i, '/').concat(n) : ''.concat(tc.B, '/share/').concat(n);
      }
      function tk(e) {
        var t = e.messages,
          a = tv(
            t.flatMap(function (e) {
              return 'multimodal_text' === e.message.content.content_type
                ? e.message.content.parts.filter(function (e) {
                    return 'object' == typeof e && 'asset_pointer' in e;
                  })
                : [];
            })
          );
        return (0, j.jsx)('div', {
          children: a.map(function (e, a) {
            var i = e.isLoading,
              n = e.data,
              s = e.error;
            if (i)
              return (0, j.jsx)(
                e8,
                {
                  conversationMessages: t,
                  icon: e5,
                  status: u.Finished,
                  displayMessage: tj.generatedProfilePic,
                  estimatedToolDurationMs: 13e3,
                  animationLoopDurationMs: 4e3,
                },
                a
              );
            if (null != s || (null == n ? void 0 : n.url) == null)
              return (0, j.jsx)(
                e8,
                {
                  conversationMessages: t,
                  icon: e2,
                  status: u.Error,
                  displayMessage: tj.failedProfilePic,
                  estimatedToolDurationMs: 0,
                  animationLoopDurationMs: 3500,
                },
                a
              );
            var r = n.url,
              o = n.width,
              l = n.height;
            return (0, j.jsx)(
              'div',
              {
                className: 'flex items-center justify-center p-4',
                children: (0, j.jsx)(tp, {
                  className: 'gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500',
                  alt: 'Profile Picture',
                  src: r,
                  width: o,
                  height: l,
                }),
              },
              a
            );
          }),
        });
      }
      function tb(e) {
        var t = e.messages;
        return 0 === t.length
          ? null
          : (0, j.jsx)(e8, {
              conversationMessages: t,
              icon: e5,
              status: u.Running,
              displayMessage: tj.generatingProfilePic,
              estimatedToolDurationMs: 13e3,
              animationLoopDurationMs: 4e3,
            });
      }
      function tw(e) {
        var t = e.messages;
        return t.some(function (e) {
          return 'in_progress' === e.message.status;
        })
          ? (0, j.jsx)(e8, {
              conversationMessages: t,
              icon: e2,
              status: u.Running,
              displayMessage: tj.updating,
              estimatedToolDurationMs: 1e4,
              animationLoopDurationMs: 3500,
            })
          : (0, j.jsx)(e8, {
              conversationMessages: t,
              icon: e2,
              status: u.Finished,
              displayMessage: tj.updated,
              estimatedToolDurationMs: 1e4,
              animationLoopDurationMs: 3500,
            });
      }
      var tM = _.memo(function (e) {
          var t = e.messages,
            a = [],
            i = [],
            n = [],
            s = !0,
            r = !1,
            o = void 0;
          try {
            for (var l, d = t[Symbol.iterator](); !(s = (l = d.next()).done); s = !0) {
              var c = l.value;
              'gizmo_editor.generate_profile_pic' === c.message.recipient
                ? a.push(c)
                : 'gizmo_editor.generate_profile_pic' === c.message.author.name
                  ? i.push(c)
                  : 'gizmo_editor.update_behavior' === c.message.recipient && n.push(c);
            }
          } catch (e) {
            (r = !0), (o = e);
          } finally {
            try {
              s || null == d.return || d.return();
            } finally {
              if (r) throw o;
            }
          }
          return (0, j.jsxs)(j.Fragment, {
            children: [
              a.length > 0 && 0 === i.length && (0, j.jsx)(tb, { messages: a }),
              i.length > 0 && (0, j.jsx)(tk, { messages: i }),
              n.length > 0 && (0, j.jsx)(tw, { messages: n }),
            ],
          });
        }),
        tj = (0, E.vU)({
          updating: {
            id: 'message.gizmo.updating',
            defaultMessage: 'Updating GPT...',
            description: 'Message displayed when the GPT editor is updating',
          },
          updated: {
            id: 'message.gizmo.finished',
            defaultMessage: 'GPT Behavior updated.',
            description: 'Message displayed when the GPT editor is finished updating',
          },
          generatingProfilePic: {
            id: 'message.gizmo.generatingProfilePic',
            defaultMessage: 'Generating profile picture...',
            description: 'Message displayed when the GPT editor is generating a profile picture',
          },
          generatedProfilePic: {
            id: 'message.gizmo.generatedProfilePic',
            defaultMessage: 'Generated profile picture prompt.',
            description: 'Message displayed when the GPT editor is finished generating a profile picture',
          },
          failedProfilePic: {
            id: 'message.gizmo.failed',
            defaultMessage: 'Failed to generate profile picture.',
            description: 'Message displayed when the GPT editor failed to generate a profile picture',
          },
        }),
        tC = a(58438),
        t_ = a(7184),
        tT = _.memo(function (e) {
          var t = e.message,
            a = e.className,
            i = (0, w._)((0, _.useState)(!1), 2),
            n = i[0],
            s = i[1],
            r = (0, _.useMemo)(
              function () {
                var e,
                  a,
                  i,
                  n = null === (e = t.message.metadata) || void 0 === e ? void 0 : e.orig_convo;
                if (!n) return null;
                var s = JSON.parse(n).messages.find(function (e) {
                  return e.author.role === A.uU.Assistant && e.content.content_type === A.PX.ModelEditableContext;
                });
                return null !==
                  (i = null === (a = null == s ? void 0 : s.content) || void 0 === a ? void 0 : a.repository) &&
                  void 0 !== i
                  ? i
                  : null;
              },
              [t]
            ),
            o = (0, z.RR)(t.message);
          if (
            [A.PX.UserEditableContext, A.PX.ModelEditableContext, A.PX.SystemContent].includes(
              t.message.content.content_type
            )
          )
            return null;
          var l = t.message.recipient;
          return (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsxs)('div', {
                className: (0, C.default)(
                  a,
                  'flex flex-col items-start gap-3 overflow-x-auto whitespace-pre-wrap break-words'
                ),
                children: [
                  (0, j.jsxs)('div', {
                    className: 'text-xs',
                    children: [
                      (0, j.jsx)('div', { className: 'uppercase text-red-500', children: 'debug message' }),
                      !!r &&
                        (0, j.jsxs)('button', {
                          onClick: function () {
                            return s(!0);
                          },
                          className: 'flex cursor-pointer items-center gap-1',
                          children: [
                            (0, j.jsx)(tC.Z, { className: 'icon-sm' }),
                            (0, j.jsx)('div', { className: 'underline', children: 'View all model memories' }),
                          ],
                        }),
                    ],
                  }),
                  (0, j.jsx)('div', {
                    className: 'flex w-full items-start justify-between',
                    children: (0, j.jsxs)('div', {
                      className: 'text-xs text-gray-500',
                      children: [
                        (0, j.jsxs)('div', { children: ['From: ', t.message.author.name || t.message.author.role] }),
                        !!l && 'all' !== l && (0, j.jsxs)('div', { children: ['To: ', l] }),
                      ],
                    }),
                  }),
                  (0, j.jsx)('div', { className: 'whitespace-pre-wrap font-mono text-sm', children: o }),
                ],
              }),
              (0, j.jsx)(t_.Z, {
                title: 'All Model Memories',
                type: 'success',
                isOpen: n,
                onClose: function () {
                  return s(!1);
                },
                children: (0, j.jsx)('div', {
                  className: 'max-h-[80vh] overflow-auto whitespace-pre-wrap font-mono text-sm',
                  children: r,
                }),
              }),
            ],
          });
        }),
        tN = a(70216);
      function tI(e) {
        return (0, j.jsxs)(
          eE.A0,
          (0, b._)((0, k._)({ width: '19', height: '15', viewBox: '0 0 19 15', fill: 'none' }, e), {
            children: [
              (0, j.jsx)('path', {
                d: 'M4.42 0.75H2.8625H2.75C1.64543 0.75 0.75 1.64543 0.75 2.75V11.65C0.75 12.7546 1.64543 13.65 2.75 13.65H2.8625C2.8625 13.65 2.8625 13.65 2.8625 13.65C2.8625 13.65 4.00751 13.65 4.42 13.65M13.98 13.65H15.5375H15.65C16.7546 13.65 17.65 12.7546 17.65 11.65V2.75C17.65 1.64543 16.7546 0.75 15.65 0.75H15.5375H13.98',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, j.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M6.16045 7.41534C5.32257 7.228 4.69638 6.47988 4.69638 5.58551C4.69638 4.54998 5.53584 3.71051 6.57136 3.71051C7.60689 3.71051 8.44635 4.54998 8.44635 5.58551C8.44635 5.8965 8.37064 6.1898 8.23664 6.448C8.22998 6.48984 8.21889 6.53136 8.20311 6.57208L6.77017 10.2702C6.63182 10.6272 6.18568 10.7873 5.7737 10.6276C5.36172 10.468 5.13991 10.0491 5.27826 9.69206L6.16045 7.41534ZM11.4177 7.41534C10.5798 7.228 9.95362 6.47988 9.95362 5.58551C9.95362 4.54998 10.7931 3.71051 11.8286 3.71051C12.8641 3.71051 13.7036 4.54998 13.7036 5.58551C13.7036 5.8965 13.6279 6.1898 13.4939 6.448C13.4872 6.48984 13.4761 6.53136 13.4604 6.57208L12.0274 10.2702C11.8891 10.6272 11.4429 10.7873 11.0309 10.6276C10.619 10.468 10.3971 10.0491 10.5355 9.69206L11.4177 7.41534Z',
                fill: 'currentColor',
              }),
            ],
          })
        );
      }
      function tS(e) {
        return (0, j.jsxs)(
          eE.A0,
          (0, b._)((0, k._)({ width: '19', height: '15', viewBox: '0 0 19 15', fill: 'none' }, e), {
            children: [
              (0, j.jsx)('path', {
                d: 'M4.42 0.75H2.8625H2.75C1.64543 0.75 0.75 1.64543 0.75 2.75V11.65C0.75 12.7546 1.64543 13.65 2.75 13.65H2.8625C2.8625 13.65 2.8625 13.65 2.8625 13.65C2.8625 13.65 4.00751 13.65 4.42 13.65M13.98 13.65H15.5375H15.65C16.7546 13.65 17.65 12.7546 17.65 11.65V2.75C17.65 1.64543 16.7546 0.75 15.65 0.75H15.5375H13.98',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, j.jsx)('path', {
                d: 'M5.55283 4.21963C5.25993 3.92674 4.78506 3.92674 4.49217 4.21963C4.19927 4.51252 4.19927 4.9874 4.49217 5.28029L6.36184 7.14996L4.49217 9.01963C4.19927 9.31252 4.19927 9.7874 4.49217 10.0803C4.78506 10.3732 5.25993 10.3732 5.55283 10.0803L7.95283 7.68029C8.24572 7.3874 8.24572 6.91252 7.95283 6.61963L5.55283 4.21963Z',
                fill: 'currentColor',
                stroke: 'currentColor',
                strokeWidth: '0.2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, j.jsx)('path', {
                d: 'M9.77753 8.75003C9.3357 8.75003 8.97753 9.10821 8.97753 9.55003C8.97753 9.99186 9.3357 10.35 9.77753 10.35H13.2775C13.7194 10.35 14.0775 9.99186 14.0775 9.55003C14.0775 9.10821 13.7194 8.75003 13.2775 8.75003H9.77753Z',
                fill: 'currentColor',
                stroke: 'currentColor',
                strokeWidth: '0.1',
              }),
            ],
          })
        );
      }
      var tP = a(94705),
        tR = a(72871),
        tF = a(71573),
        tE = a(47567),
        tA = a(61110),
        tL = a(55975),
        tD = a(46050),
        tZ = a(29874),
        tB = a(8449),
        tq = a(15472),
        tz = {
          tokenize: function (e, t, a) {
            var i = function (t) {
                return t === tL.q.eof || (0, tZ.Ch)(t)
                  ? n(t)
                  : (e.enter('mathFlowFenceMeta'),
                    e.enter(tq.V.chunkString, { contentType: tB._.contentTypeString }),
                    (function t(i) {
                      return i === tL.q.eof || (0, tZ.Ch)(i)
                        ? (e.exit(tq.V.chunkString), e.exit('mathFlowFenceMeta'), n(i))
                        : i === tL.q.rightSquareBracket
                          ? a(i)
                          : (e.consume(i), t);
                    })(t));
              },
              n = function (a) {
                return (
                  e.exit('mathFlowFence'),
                  o.interrupt
                    ? t(a)
                    : (function t(a) {
                        return a === tL.q.eof
                          ? s(a)
                          : (0, tZ.Ch)(a)
                            ? e.attempt(
                                tU,
                                e.attempt(
                                  { tokenize: r, partial: !0 },
                                  s,
                                  d ? (0, tD.f)(e, t, tq.V.linePrefix, d + 1) : t
                                ),
                                s
                              )(a)
                            : (e.enter('mathFlowValue'),
                              (function a(i) {
                                return i === tL.q.eof || (0, tZ.Ch)(i)
                                  ? (e.exit('mathFlowValue'), t(i))
                                  : (e.consume(i), a);
                              })(a));
                      })(a)
                );
              },
              s = function (a) {
                return e.exit('mathFlow'), t(a);
              },
              r = function (e, t, a) {
                var i = [];
                return (0, tD.f)(
                  e,
                  function (t) {
                    return (
                      e.enter('mathFlowFence'),
                      e.enter('mathFlowFenceSequence'),
                      (function t(s) {
                        return (s === tL.q.backslash && 0 === i.length) ||
                          (s === tL.q.rightSquareBracket && i[0] === tL.q.backslash)
                          ? (e.consume(s), i.push(s), t)
                          : i < c
                            ? a(s)
                            : (e.exit('mathFlowFenceSequence'), (0, tD.f)(e, n, tq.V.whitespace)(s));
                      })(t)
                    );
                  },
                  tq.V.linePrefix,
                  tB._.tabSize
                );
                function n(i) {
                  return i === tL.q.eof || (0, tZ.Ch)(i) ? (e.exit('mathFlowFence'), t(i)) : a(i);
                }
              },
              o = this,
              l = this.events[this.events.length - 1],
              d = l && l[1].type === tq.V.linePrefix ? l[2].sliceSerialize(l[1], !0).length : 0,
              c = [];
            return function (t) {
              return (
                tL.q.backslash,
                e.enter('mathFlow'),
                e.enter('mathFlowFence'),
                e.enter('mathFlowFenceSequence'),
                (function t(n) {
                  return n === tL.q.backslash || (n === tL.q.leftSquareBracket && c[0] === tL.q.backslash)
                    ? (e.consume(n), c.push(n), t)
                    : (e.exit('mathFlowFenceSequence'), c.length < 2 ? a(n) : (0, tD.f)(e, i, tq.V.whitespace)(n));
                })(t)
              );
            };
          },
          concrete: !0,
        },
        tU = {
          tokenize: function (e, t, a) {
            var i = function (e) {
                return n.parser.lazy[n.now().line] ? a(e) : t(e);
              },
              n = this;
            return function (t) {
              return e.enter(tq.V.lineEnding), e.consume(t), e.exit(tq.V.lineEnding), i;
            };
          },
          partial: !0,
        },
        tO = {
          tokenize: function (e, t, a) {
            var i = function (t) {
                return t === tL.q.eof || (0, tZ.Ch)(t)
                  ? n(t)
                  : (e.enter('mathFlowFenceMeta'),
                    e.enter(tq.V.chunkString, { contentType: tB._.contentTypeString }),
                    (function t(i) {
                      return i === tL.q.eof || (0, tZ.Ch)(i)
                        ? (e.exit(tq.V.chunkString), e.exit('mathFlowFenceMeta'), n(i))
                        : i === tL.q.dollarSign
                          ? a(i)
                          : (e.consume(i), t);
                    })(t));
              },
              n = function (a) {
                return (
                  e.exit('mathFlowFence'),
                  o.interrupt
                    ? t(a)
                    : (function t(a) {
                        return a === tL.q.eof
                          ? s(a)
                          : (0, tZ.Ch)(a)
                            ? e.attempt(
                                tV,
                                e.attempt(
                                  { tokenize: r, partial: !0 },
                                  s,
                                  d ? (0, tD.f)(e, t, tq.V.linePrefix, d + 1) : t
                                ),
                                s
                              )(a)
                            : (e.enter('mathFlowValue'),
                              (function a(i) {
                                return i === tL.q.eof || (0, tZ.Ch)(i)
                                  ? (e.exit('mathFlowValue'), t(i))
                                  : (e.consume(i), a);
                              })(a));
                      })(a)
                );
              },
              s = function (a) {
                return e.exit('mathFlow'), t(a);
              },
              r = function (e, t, a) {
                var i = 0;
                return (0, tD.f)(
                  e,
                  function (t) {
                    return (
                      e.enter('mathFlowFence'),
                      e.enter('mathFlowFenceSequence'),
                      (function t(s) {
                        return s === tL.q.dollarSign
                          ? (e.consume(s), i++, t)
                          : i < c
                            ? a(s)
                            : (e.exit('mathFlowFenceSequence'), (0, tD.f)(e, n, tq.V.whitespace)(s));
                      })(t)
                    );
                  },
                  tq.V.linePrefix,
                  tB._.tabSize
                );
                function n(i) {
                  return i === tL.q.eof || (0, tZ.Ch)(i) ? (e.exit('mathFlowFence'), t(i)) : a(i);
                }
              },
              o = this,
              l = o.events[o.events.length - 1],
              d = l && l[1].type === tq.V.linePrefix ? l[2].sliceSerialize(l[1], !0).length : 0,
              c = 0;
            return function (t) {
              return (
                tL.q.dollarSign,
                e.enter('mathFlow'),
                e.enter('mathFlowFence'),
                e.enter('mathFlowFenceSequence'),
                (function t(n) {
                  return n === tL.q.dollarSign
                    ? (e.consume(n), c++, t)
                    : (e.exit('mathFlowFenceSequence'), c < 2 ? a(n) : (0, tD.f)(e, i, tq.V.whitespace)(n));
                })(t)
              );
            };
          },
          concrete: !0,
        },
        tV = {
          tokenize: function (e, t, a) {
            var i = function (e) {
                return n.parser.lazy[n.now().line] ? a(e) : t(e);
              },
              n = this;
            return function (t) {
              return (0, tZ.Ch)(t), e.enter(tq.V.lineEnding), e.consume(t), e.exit(tq.V.lineEnding), i;
            };
          },
          partial: !0,
        };
      function tG(e) {
        var t,
          a,
          i = e.length - 4,
          n = 3;
        if (
          (e[3][1].type === tq.V.lineEnding || 'space' === e[n][1].type) &&
          (e[i][1].type === tq.V.lineEnding || 'space' === e[i][1].type)
        ) {
          for (t = n; ++t < i; )
            if ('mathTextData' === e[t][1].type) {
              (e[i][1].type = 'mathTextPadding'), (e[n][1].type = 'mathTextPadding'), (n += 2), (i -= 2);
              break;
            }
        }
        for (t = n - 1, i++; ++t <= i; )
          void 0 === a
            ? t !== i && e[t][1].type !== tq.V.lineEnding && (a = t)
            : (t === i || e[t][1].type === tq.V.lineEnding) &&
              ((e[a][1].type = 'mathTextData'),
              t !== a + 2 &&
                ((e[a][1].end = e[t - 1][1].end), e.splice(a + 2, t - a - 2), (i -= t - a - 2), (t = a + 2)),
              (a = void 0));
        return e;
      }
      function tH(e) {
        return e !== tL.q.backslash || this.events[this.events.length - 1][1].type === tq.V.characterEscape;
      }
      function tQ(e) {
        var t,
          a,
          i = e.length - 4,
          n = 3;
        if (
          (e[3][1].type === tq.V.lineEnding || 'space' === e[n][1].type) &&
          (e[i][1].type === tq.V.lineEnding || 'space' === e[i][1].type)
        ) {
          for (t = n; ++t < i; )
            if ('mathTextData' === e[t][1].type) {
              (e[i][1].type = 'mathTextPadding'), (e[n][1].type = 'mathTextPadding'), (n += 2), (i -= 2);
              break;
            }
        }
        for (t = n - 1, i++; ++t <= i; )
          void 0 === a
            ? t !== i && e[t][1].type !== tq.V.lineEnding && (a = t)
            : (t === i || e[t][1].type === tq.V.lineEnding) &&
              ((e[a][1].type = 'mathTextData'),
              t !== a + 2 &&
                ((e[a][1].end = e[t - 1][1].end), e.splice(a + 2, t - a - 2), (i -= t - a - 2), (t = a + 2)),
              (a = void 0));
        return e;
      }
      function tW(e) {
        return e !== tL.q.dollarSign || this.events[this.events.length - 1][1].type === tq.V.characterEscape;
      }
      function t$(e) {
        var t,
          a,
          i = e.length - 4,
          n = 3;
        if (
          (e[3][1].type === tq.V.lineEnding || 'space' === e[n][1].type) &&
          (e[i][1].type === tq.V.lineEnding || 'space' === e[i][1].type)
        ) {
          for (t = n; ++t < i; )
            if ('mathTextData' === e[t][1].type) {
              (e[i][1].type = 'mathTextPadding'), (e[n][1].type = 'mathTextPadding'), (n += 2), (i -= 2);
              break;
            }
        }
        for (t = n - 1, i++; ++t <= i; )
          void 0 === a
            ? t !== i && e[t][1].type !== tq.V.lineEnding && (a = t)
            : (t === i || e[t][1].type === tq.V.lineEnding) &&
              ((e[a][1].type = 'mathTextData'),
              t !== a + 2 &&
                ((e[a][1].end = e[t - 1][1].end), e.splice(a + 2, t - a - 2), (i -= t - a - 2), (t = a + 2)),
              (a = void 0));
        return e;
      }
      function tJ(e) {
        return e !== tL.q.backslash || this.events[this.events.length - 1][1].type === tq.V.characterEscape;
      }
      var tY = a(67726),
        tK = a(63395),
        tX = a(93362),
        t0 = a(45369),
        t9 = a(42426),
        t1 = a(65028),
        t2 = a(88366),
        t5 = a(82473),
        t3 = a(15635),
        t6 = a(42798),
        t4 = a(72290),
        t7 = 'sandbox:';
      function t8(e) {
        var t,
          a,
          i,
          n = e.messageId,
          s = e.clientThreadId,
          r = e.href,
          o = (0, tN._)(e, ['messageId', 'clientThreadId', 'href']),
          l = null !== (0, _.useContext)(B.gB),
          d = (0, t5.NL)(),
          c = (0, w._)((0, _.useState)(!1), 2),
          u = c[0],
          m = c[1],
          x = r.substring(t7.length),
          g = L.tQ.getServerThreadId(s),
          h = (0, F.Z)(),
          f = (0, _.useCallback)(function (e) {
            var t = document.createElement('a');
            (t.href = e), t.click(), m(!1);
          }, []),
          p = ((t = (0, _.useCallback)(function (e) {
            m(!1), t4.m.danger(e);
          }, [])),
          (a = (0, th.VF)()),
          (0, tm.a)({
            queryKey: at(n, x),
            queryFn: function () {
              return tc.ZP.downloadFromInterpreter(n, g, x)
                .then(function (e) {
                  return (null == e ? void 0 : e.status) === 'success' && f(e.download_url), e;
                })
                .catch(function (e) {
                  var i = a('default_download_link_error', { fileName: x });
                  throw (void 0 !== e.code && (i = a(e.code)), null == t || t(i), e);
                });
            },
            enabled: !!(u && !l && n && g && x),
          })).data,
          v = (0, _.useCallback)(
            ((i = (0, et._)(function (e) {
              return (0, en.Jh)(this, function (t) {
                return (
                  void 0 !== s &&
                    (e.preventDefault(),
                    (void 0 === p || (null == p ? void 0 : p.status) === 'error') &&
                      d.invalidateQueries({ queryKey: at(n, x) }),
                    (null == p ? void 0 : p.status) == 'success' && (null == p ? void 0 : p.download_url)
                      ? f(p.download_url)
                      : m(!0)),
                  [2]
                );
              });
            })),
            function (e) {
              return i.apply(this, arguments);
            }),
            [s, p, d, n, x, f]
          );
        return (0, j.jsx)(t3.u, {
          closeOnOutsideClick: !1,
          delayDuration: 0,
          label: (0, j.jsxs)('span', {
            className: 'flex items-center gap-1',
            children: [
              u ? h.formatMessage(aa.startingDownload) : h.formatMessage(aa.downloadFile),
              u && (0, j.jsx)(t6.Z, {}),
            ],
          }),
          side: 'top',
          sideOffset: 4,
          children: (0, j.jsx)(
            'a',
            (0, b._)((0, k._)({}, o), {
              className: 'cursor-pointer',
              onClick: function (e) {
                return !u && v(e);
              },
            })
          ),
        });
      }
      function ae(e) {
        return (0, j.jsx)(t3.u, {
          closeOnOutsideClick: !1,
          delayDuration: 0,
          label: (0, j.jsx)('span', {
            className: 'flex items-center gap-1',
            children: (0, j.jsx)(ew.Z, (0, k._)({}, aa.downloadUnavailable)),
          }),
          side: 'top',
          sideOffset: 4,
          children: (0, j.jsx)(
            'span',
            (0, b._)((0, k._)({}, e), { className: 'font-semibold text-gray-500 underline dark:text-gray-300' })
          ),
        });
      }
      function at(e, t) {
        return ['downloadSandboxLink', e, t];
      }
      var aa = (0, E.vU)({
          downloadFile: {
            id: 'SandboxDownload.downloadFile',
            defaultMessage: 'Download file',
            description: 'Tooltip label for downloading a file button',
          },
          startingDownload: {
            id: 'SandboxDownload.startingDownload',
            defaultMessage: 'Starting download',
            description: 'Tooltip label for downloading started for file button',
          },
          downloadUnavailable: {
            id: 'SandboxDownload.downloadUnavailable',
            defaultMessage: 'File download not supported in a shared chat',
            description: 'Tooltip label indicating file is unavailable to download for shared conversations',
          },
        }),
        ai = function (e) {
          return e.startsWith(t7) ? e : (0, tK.A)(e);
        },
        an = [
          t1.Z,
          [
            function () {
              var e,
                t,
                a = function (e, t) {
                  (i[e] ? i[e] : (i[e] = [])).push(t);
                },
                i = this.data();
              a('micromarkExtensions', {
                flow: ((e = {}), (0, ea._)(e, tL.q.dollarSign, tO), (0, ea._)(e, tL.q.backslash, tz), e),
                text:
                  ((t = {}),
                  (0, ea._)(t, tL.q.dollarSign, {
                    tokenize: function (e, t, a) {
                      var i,
                        n,
                        s = 0;
                      return function (t) {
                        return (
                          e.enter('mathText'),
                          e.enter('mathTextSequence'),
                          (function t(i) {
                            return i === tL.q.dollarSign
                              ? (e.consume(i), s++, t)
                              : s < 2
                                ? a(i)
                                : (e.exit('mathTextSequence'), r(i));
                          })(t)
                        );
                      };
                      function r(l) {
                        return l === tL.q.eof
                          ? a(l)
                          : l === tL.q.dollarSign
                            ? ((n = e.enter('mathTextSequence')),
                              (i = 0),
                              (function a(r) {
                                return r === tL.q.dollarSign
                                  ? (e.consume(r), i++, a)
                                  : i === s
                                    ? (e.exit('mathTextSequence'), e.exit('mathText'), t(r))
                                    : ((n.type = 'mathTextData'), o(r));
                              })(l))
                            : l === tL.q.space
                              ? (e.enter('space'), e.consume(l), e.exit('space'), r)
                              : (0, tZ.Ch)(l)
                                ? (e.enter(tq.V.lineEnding), e.consume(l), e.exit(tq.V.lineEnding), r)
                                : (e.enter('mathTextData'), o(l));
                      }
                      function o(t) {
                        return t === tL.q.eof || t === tL.q.space || t === tL.q.dollarSign || (0, tZ.Ch)(t)
                          ? (e.exit('mathTextData'), r(t))
                          : (e.consume(t), o);
                      }
                    },
                    resolve: tQ,
                    previous: tW,
                  }),
                  (0, ea._)(t, tL.q.backslash, [
                    {
                      tokenize: function (e, t, a) {
                        var i,
                          n = [],
                          s = [],
                          r = this;
                        return function (t) {
                          return (
                            tL.q.backslash,
                            tH.call(r, r.previous) && r.previous,
                            e.enter('mathText'),
                            e.enter('mathTextSequence'),
                            (function t(i) {
                              return (n.join(','),
                              (i === tL.q.backslash && 0 === n.length) ||
                                (i === tL.q.leftParenthesis && 1 === n.length))
                                ? (e.consume(i), n.push(i), t)
                                : n.length < 2
                                  ? a(i)
                                  : (e.exit('mathTextSequence'), o(i));
                            })(t)
                          );
                        };
                        function o(r) {
                          return r === tL.q.eof
                            ? a(r)
                            : r === tL.q.backslash
                              ? ((i = e.enter('mathTextSequence')),
                                (s = []),
                                (function a(r) {
                                  return (n.join(','),
                                  (r === tL.q.backslash && 0 === s.length) ||
                                    (r === tL.q.rightParenthesis && 1 === s.length))
                                    ? (e.consume(r), s.push(r), a)
                                    : s.length === n.length
                                      ? (e.exit('mathTextSequence'), e.exit('mathText'), t(r))
                                      : ((i.type = 'mathTextData'), l(r));
                                })(r))
                              : r === tL.q.space
                                ? (e.enter('space'), e.consume(r), e.exit('space'), o)
                                : (0, tZ.Ch)(r)
                                  ? (e.enter(tq.V.lineEnding), e.consume(r), e.exit(tq.V.lineEnding), o)
                                  : (e.enter('mathTextData'), l(r));
                        }
                        function l(t) {
                          return t === tL.q.eof || t === tL.q.space || t === tL.q.backslash || (0, tZ.Ch)(t)
                            ? (e.exit('mathTextData'), o(t))
                            : (e.consume(t), l);
                        }
                      },
                      resolve: tG,
                      previous: tH,
                    },
                    {
                      tokenize: function (e, t, a) {
                        var i,
                          n = [],
                          s = [],
                          r = this;
                        return function (t) {
                          return (
                            tL.q.backslash,
                            tJ.call(r, r.previous) && r.previous,
                            e.enter('mathText'),
                            e.enter('mathTextSequence'),
                            (function t(i) {
                              return (n.join(','),
                              (i === tL.q.backslash && 0 === n.length) ||
                                (i === tL.q.leftSquareBracket && 1 === n.length))
                                ? (e.consume(i), n.push(i), t)
                                : n.length < 2
                                  ? a(i)
                                  : (e.exit('mathTextSequence'), o(i));
                            })(t)
                          );
                        };
                        function o(r) {
                          return r === tL.q.eof
                            ? a(r)
                            : r === tL.q.backslash
                              ? ((i = e.enter('mathTextSequence')),
                                (s = []),
                                (function a(r) {
                                  return (n.join(','),
                                  (r === tL.q.backslash && 0 === s.length) ||
                                    (r === tL.q.rightSquareBracket && 1 === s.length))
                                    ? (e.consume(r), s.push(r), a)
                                    : s.length === n.length
                                      ? (e.exit('mathTextSequence'), e.exit('mathText'), t(r))
                                      : ((i.type = 'mathTextData'), l(r));
                                })(r))
                              : r === tL.q.space
                                ? (e.enter('space'), e.consume(r), e.exit('space'), o)
                                : (0, tZ.Ch)(r)
                                  ? (e.enter(tq.V.lineEnding), e.consume(r), e.exit(tq.V.lineEnding), o)
                                  : (e.enter('mathTextData'), l(r));
                        }
                        function l(t) {
                          return t === tL.q.eof || t === tL.q.space || t === tL.q.backslash || (0, tZ.Ch)(t)
                            ? (e.exit('mathTextData'), o(t))
                            : (e.consume(t), l);
                        }
                      },
                      resolve: t$,
                      previous: tJ,
                    },
                  ]),
                  t),
              }),
                a('fromMarkdownExtensions', (0, tA.N)()),
                a('toMarkdownExtensions', (0, tA.O)());
            },
            { singleDollarTextMath: !1 },
          ],
        ],
        as = [
          [
            tX.Z,
            {
              languages: { mathematica: tY.Z },
              detect: !0,
              subset: [
                'arduino',
                'bash',
                'c',
                'cpp',
                'csharp',
                'css',
                'diff',
                'go',
                'graphql',
                'java',
                'javascript',
                'json',
                'kotlin',
                'latex',
                'less',
                'lua',
                'makefile',
                'makefile',
                'markdown',
                'matlab',
                'mathematica',
                'nginx',
                'objectivec',
                'perl',
                'pgsql',
                'php-template',
                'php',
                'plaintext',
                'python-repl',
                'python',
                'r',
                'ruby',
                'rust',
                'scss',
                'shell',
                'sql',
                'swift',
                'typescript',
                'vbnet',
                'wasm',
                'xml',
                'yaml',
              ],
              ignoreMissing: !0,
              aliases: { mathematica: 'wolfram' },
            },
          ],
          t0.Z,
          [t9.Z, { newlines: !0 }],
        ],
        ar = {
          code: function (e) {
            var t = e.inline,
              a = e.node,
              i = e.className,
              n = e.children,
              s = (0, tN._)(e, ['inline', 'node', 'className', 'children']),
              r = (0, _.useContext)(aI);
            if (t) {
              if (null != r) {
                var o = (function (e) {
                    var t = e.match(/【oaicite:(\d+)】/);
                    if (t)
                      try {
                        return parseInt(t[1], 10);
                      } catch (e) {}
                    return -1;
                  })((0, t2.B)(a)),
                  l = r.displayedCitations;
                if (o >= 0 && o < l.length) return (0, j.jsx)(aR, { displayInfo: l[o] });
              }
              return (0, j.jsx)('code', (0, b._)((0, k._)({ className: i }, s), { children: n }));
            }
            var d,
              c =
                null ===
                  (d =
                    null == i
                      ? void 0
                      : i.split(' ').filter(function (e) {
                          return e.startsWith('language-');
                        })) || void 0 === d
                  ? void 0
                  : d[0],
              u = c ? c.split('-')[1] : '';
            return (0, j.jsx)(ef, { language: u, className: i, content: (0, t2.B)(a), children: n });
          },
        };
      function ao(e) {
        var t = e.size,
          a = e.children,
          i = e.className,
          n = e.clientThreadId,
          s = e.messageId,
          r = (0, eQ.F)().resolvedTheme,
          o = (0, tR.H)().isAdvancedDataAnalysisAvailable,
          l = null !== (0, _.useContext)(B.gB),
          d = (0, _.useMemo)(
            function () {
              return (0, b._)((0, k._)({}, ar), {
                a: function (e) {
                  var t = e.node,
                    a = (0, tN._)(e, ['node']);
                  return t.properties.href.startsWith(t7)
                    ? l
                      ? (0, j.jsx)(ae, (0, k._)({}, a))
                      : o && null != n && null != s
                        ? (0, j.jsx)(t8, (0, k._)({ clientThreadId: n, messageId: s }, a))
                        : null
                    : (0, j.jsx)('a', (0, k._)({}, a));
                },
                img: function (e) {
                  var t = e.node,
                    a = (0, tN._)(e, ['node']),
                    i = t.properties.src;
                  return i.startsWith(t7) || i.startsWith('attachment:') ? null : (0, j.jsx)('img', (0, k._)({}, a));
                },
              });
            },
            [n, o, l, s]
          );
        return (0, j.jsx)(tF.S, {
          name: 'formatted_text_error',
          fallback: function () {
            return (0, j.jsx)(j.Fragment, { children: a });
          },
          children: (0, j.jsx)(tE.D, {
            rehypePlugins: as,
            remarkPlugins: an,
            linkTarget: '_new',
            className: (0, C.default)(
              i,
              'markdown prose w-full break-words dark:prose-invert',
              'dark' === r ? 'dark' : 'light',
              'small' === (void 0 === t ? 'medium' : t) && 'prose-xs'
            ),
            transformLinkUri: ai,
            components: d,
            children: a,
          }),
        });
      }
      var al = a(45048);
      function ad() {
        var e = (0, M._)(['flex flex-col items-start']);
        return (
          (ad = function () {
            return e;
          }),
          e
        );
      }
      function ac() {
        var e = (0, M._)(['flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ', '']);
        return (
          (ac = function () {
            return e;
          }),
          e
        );
      }
      function au() {
        var e = (0, M._)([
          'max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800',
        ]);
        return (
          (au = function () {
            return e;
          }),
          e
        );
      }
      var am = _.memo(function (e) {
          var t = e.children,
            a = e.isComplete,
            i = e.expanderClosedLabel,
            n = e.expanderOpenLabel,
            s = e.resultsPreview,
            r = e.results,
            o = e.initialExpanded,
            l = e.onExpand,
            d = (0, w._)((0, _.useState)(void 0 !== o && o), 2),
            c = d[0],
            u = d[1],
            m = (0, _.useCallback)(
              function () {
                u(function (e) {
                  return !e;
                }),
                  null == l || l();
              },
              [l]
            );
          return (0, j.jsxs)(ax, {
            children: [
              (0, j.jsxs)(ag, {
                $complete: a,
                children: [
                  (0, j.jsx)('div', { children: t }),
                  !a && (0, j.jsx)(t6.Z, { className: (0, C.default)('shrink-0', null != r ? 'ml-1' : 'ml-12') }),
                  null != r &&
                    (0, j.jsxs)('div', {
                      className: 'ml-12 flex items-center gap-2',
                      role: 'button',
                      onClick: m,
                      children: [
                        null != n &&
                          null != i &&
                          (0, j.jsx)('div', { className: 'text-xs text-gray-600', children: c ? n : i }),
                        !c && s,
                        c ? (0, j.jsx)(T.rH8, { className: 'icon-sm' }) : (0, j.jsx)(T.bTu, { className: 'icon-sm' }),
                      ],
                    }),
                ],
              }),
              c && r,
            ],
          });
        }),
        ax = N.Z.div(ad()),
        ag = N.Z.div(ac(), function (e) {
          return e.$complete && 'bg-gray-100';
        }),
        ah = N.Z.div(au()),
        af = {},
        ap = {};
      function av(e) {
        var t = function (e, t) {
          return '```'.concat(t, '\n').concat(e, '\n```');
        };
        if ('code' === e.content.content_type) return t(e.content.text, 'python');
        if ('python' === e.recipient) {
          if ('text' !== e.content.content_type) throw Error('Unexpected content type for code message');
          var a = e.content.parts;
          if (1 !== a.length || 'string' != typeof a[0]) throw Error('Unexpected parts for code message');
          return t(a[0], 'python');
        }
        throw Error('Unexpected code message format');
      }
      function ay(e) {
        var t = e.message,
          a = e.outputMessage,
          i = e.clientThreadId,
          n = e.isComplete,
          s = (0, F.Z)(),
          r = (0, eQ.F)().resolvedTheme;
        (0, _.useEffect)(
          function () {
            af[t.message.id] ||
              (P.A.logEvent(R.M.renderTool2Message, { id: t.message.id, finishedExecuting: n }),
              (af[t.message.id] = !0));
          },
          [t, n]
        );
        var o = (0, _.useCallback)(
            function () {
              ap[t.message.id] ||
                (P.A.logEvent(R.M.expandTool2Message, { id: t.message.id, finishedExecuting: n }),
                (ap[t.message.id] = !0));
            },
            [t, n]
          ),
          l = (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsx)('div', {
                className: 'mt-3 self-stretch',
                children: (0, j.jsx)(ao, {
                  clientThreadId: i,
                  messageId: t.message.id,
                  className: (0, C.default)(
                    'markdown prose w-full break-words dark:prose-invert',
                    'dark' === r ? 'dark' : 'light'
                  ),
                  children: av(t.message),
                }),
              }),
              a &&
                (0, j.jsx)('div', {
                  className: 'self-stretch',
                  children: (0, j.jsx)(al.ZP, { message: a, isCollapsed: !0 }),
                }),
            ],
          });
        return (0, j.jsx)(am, {
          expanderClosedLabel: s.formatMessage(ak.expanderClosedLabel),
          expanderOpenLabel: s.formatMessage(ak.expanderOpenLabel),
          isComplete: n,
          results: l,
          onExpand: o,
          children: n ? (0, j.jsx)(ew.Z, (0, k._)({}, ak.finishedWorking)) : (0, j.jsx)(ew.Z, (0, k._)({}, ak.working)),
        });
      }
      var ak = (0, E.vU)({
        expanderClosedLabel: {
          id: 'CodeMessage.expanderClosedLabel',
          defaultMessage: 'Show work',
          description: 'Label for the button to expand and show the code execution details',
        },
        expanderOpenLabel: {
          id: 'CodeMessage.expanderOpenLabel',
          defaultMessage: 'Hide work',
          description: 'Label for the button to collapse and hide the code execution details',
        },
        finishedWorking: {
          id: 'CodeMessage.finishedWorking',
          defaultMessage: 'Finished working',
          description: 'Status text indicating the code execution has completed',
        },
        working: {
          id: 'CodeMessage.working',
          defaultMessage: 'Working...',
          description: 'Status text indicating the code execution is in progress',
        },
      });
      function ab(e) {
        var t,
          a = e.messages,
          i = e.isRequestActive,
          n = (0, w._)(a, 2),
          s = n[0],
          r = n[1],
          o = (0, w._)((0, _.useState)(!1), 2),
          l = o[0],
          d = o[1],
          c = (0, w._)((0, _.useState)(!1), 2),
          m = c[0],
          x = c[1],
          g = e4(s.message),
          h = null === (t = null == r ? void 0 : r.message.metadata) || void 0 === t ? void 0 : t.aggregate_result,
          f = u.Running,
          p = aC.running;
        return (
          (null == h ? void 0 : h.status) === 'success'
            ? ((f = u.Finished), (p = m ? aC.finished : void 0))
            : (null != r && r.message.content.content_type !== A.PX.ExecutionOutput) ||
                (null != h && 'running' !== h.status)
              ? ((f = u.Error), (p = aC.error))
              : (g || !i) && ((f = u.Stopped), (p = aC.stopped)),
          (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsx)(e8, {
                conversationMessages: a,
                icon: eY,
                status: f,
                displayMessage: p,
                displayMessageValues: {
                  expander: function (e) {
                    return (0, j.jsxs)('button', {
                      className: 'inline-flex items-center gap-1',
                      onClick: function () {
                        d(function (e) {
                          return !e;
                        }),
                          l || x(!0);
                      },
                      children: [e, (0, j.jsx)(I.ud, {})],
                    });
                  },
                },
                estimatedToolDurationMs: 15e3,
                shouldPersistAfterFinished: m,
              }),
              l &&
                (0, j.jsxs)('div', {
                  className: 'mb-3 mt-0.5 overflow-hidden rounded-xl bg-black',
                  children: [
                    (0, j.jsx)(aw, { message: s.message }),
                    null != r && (0, j.jsx)(aM, { message: r.message }),
                  ],
                }),
            ],
          })
        );
      }
      function aw(e) {
        var t = e.message,
          a = (0, eQ.F)().resolvedTheme;
        return (0, j.jsx)(ao, {
          className: (0, C.default)(
            'markdown prose w-full break-words dark:prose-invert',
            'dark' === a ? 'dark' : 'light'
          ),
          children: av(t),
        });
      }
      function aM(e) {
        var t,
          a = e.message,
          i = (0, F.Z)();
        if (a.content.content_type !== A.PX.ExecutionOutput) return null;
        var n = null === (t = a.metadata) || void 0 === t ? void 0 : t.aggregate_result;
        if (!n) return console.error('Corrupt code execution result message'), null;
        var s = n.messages.filter(al.M),
          r = s.length > 0,
          o = null != n.final_expression_output;
        return (0, j.jsxs)(j.Fragment, {
          children: [
            r &&
              (0, j.jsx)(aj, {
                label: 'STDOUT/STDERR',
                output: s.map(function (e, t) {
                  return (0, j.jsx)(
                    'span',
                    { className: 'stderr' === e.stream_name ? 'text-red-500' : '', children: e.text },
                    ''.concat(t)
                  );
                }),
              }),
            o && (0, j.jsx)(aj, { label: i.formatMessage(aC.resultLabel), output: n.final_expression_output }),
          ],
        });
      }
      function aj(e) {
        var t = e.label,
          a = e.output;
        return (0, j.jsxs)('div', {
          className: 'bg-gray-700 p-4 text-xs',
          children: [
            (0, j.jsx)('div', { className: 'mb-1 text-gray-400', children: t }),
            (0, j.jsx)('div', {
              className: 'prose flex flex-col-reverse text-white',
              children: (0, j.jsx)('pre', { className: 'shrink-0', children: a }),
            }),
          ],
        });
      }
      var aC = (0, E.vU)({
        running: {
          id: 'codeInterpreterMessage.runningV2',
          defaultMessage: '<expander>Analyzing</expander>',
          description: 'Status message when code interpreter is running',
        },
        finished: {
          id: 'codeInterpreterMessage.finished',
          defaultMessage: '<expander>Finished analyzing</expander>',
          description: 'Status message when code interpreter is finished',
        },
        stopped: {
          id: 'codeInterpreterMessage.stoppedV2',
          defaultMessage: '<expander>Stopped analyzing</expander>',
          description: 'Status message when code interpreter was stopped by the user',
        },
        error: {
          id: 'codeInterpreterMessage.errorV2',
          defaultMessage: '<expander>Error analyzing</expander>',
          description: 'Status message when code interpreter ran into an error',
        },
        resultLabel: {
          id: 'codeInterpreterMessage.resultLabel',
          defaultMessage: 'Result',
          description: 'Label shown with the code execution result output',
        },
      });
      function a_(e) {
        var t = e.codeMessage,
          a = e.codeExecutionOutputMessage,
          i = e.onDismiss,
          n = (0, F.Z)();
        return (0, j.jsx)(tP.ZP.Root, {
          isOpen: !0,
          onClose: i,
          children: (0, j.jsx)(tP.ZP.Overlay, {
            children: (0, j.jsxs)(tP.ZP.Content, {
              className: 'flex max-h-[75vh] max-w-lg flex-col overflow-hidden',
              children: [
                (0, j.jsx)(tP.ZP.Header, {
                  title: n.formatMessage(aT.title),
                  type: 'success',
                  closeButton: (0, j.jsx)(tP.ZP.CloseButton, { onClose: i }),
                }),
                (0, j.jsxs)('div', {
                  className: 'flex flex-1 flex-col overflow-auto bg-black',
                  children: [
                    (0, j.jsx)('div', { children: (0, j.jsx)(aw, { message: t }) }),
                    (0, j.jsx)('div', { children: (0, j.jsx)(aM, { message: a }) }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var aT = (0, E.vU)({
        title: {
          id: 'CodeExecutionOutputModal.title',
          defaultMessage: 'Analysis',
          description: 'Title of the code execution output modal',
        },
      });
      function aN(e) {
        var t,
          a = e.url,
          i = e.size,
          n = void 0 === i ? 16 : i,
          s = e.className;
        try {
          t = new URL(a);
        } catch (e) {
          return console.error(e), null;
        }
        return (0, j.jsx)('img', {
          src: 'https://icons.duckduckgo.com/ip3/'.concat(t.hostname, '.ico'),
          alt: 'Favicon',
          width: n,
          height: n,
          className: s,
        });
      }
      ((s = x || (x = {}))[(s.Standard = 0)] = 'Standard'), (s[(s.CodeExecution = 1)] = 'CodeExecution');
      var aI = (0, _.createContext)(void 0),
        aS = '&#8203;';
      function aP(e) {
        return ''.concat(aS, '``【oaicite:').concat(e, '】``').concat(aS);
      }
      function aR(e) {
        var t = e.displayInfo;
        return t.type === x.Standard ? (0, j.jsx)(aF, { displayInfo: t }) : (0, j.jsx)(aE, { displayInfo: t });
      }
      function aF(e) {
        var t,
          a = e.displayInfo,
          i = e7(),
          n = (0, th.O6)(),
          s = (0, _.useContext)(aI),
          r = (0, S.WA)(null !== (t = null == s ? void 0 : s.clientThreadId) && void 0 !== t ? t : A.Zq),
          o = a.metadata,
          l = (null == o ? void 0 : o.type) === 'file';
        if (l && (r.kind === A.OL.GizmoInteraction || r.kind == A.OL.GizmoTest)) return null;
        var d = i
          ? (0, j.jsx)(tI, { className: '-mt-0.5 ml-0.5 inline-block text-link-base hover:text-link-hover' })
          : (0, j.jsx)('sup', { children: a.number });
        return (0, j.jsx)(t3.u, {
          label: (0, j.jsx)(aA, { citationMetadata: o, invalidReason: a.invalid_reason }),
          side: 'top',
          sideOffset: 4,
          withArrow: !1,
          delayDuration: 150,
          interactive: !0,
          wide: !0,
          children: l
            ? (0, j.jsx)('button', {
                onClick: function () {
                  return n(o.id, o.name);
                },
                className: 'px-0.5 text-green-600',
                children: d,
              })
            : (0, j.jsx)('a', {
                href: null == o ? void 0 : o.url,
                target: '_blank',
                rel: 'noreferrer',
                className: 'px-0.5 text-green-600 !no-underline',
                children: d,
              }),
        });
      }
      function aE(e) {
        var t = e.displayInfo,
          a = (0, w._)((0, _.useState)(!1), 2),
          i = a[0],
          n = a[1],
          s = (0, F.Z)();
        return e7()
          ? (0, j.jsxs)(j.Fragment, {
              children: [
                (0, j.jsx)(t3.u, {
                  label: s.formatMessage(aD.viewAnalysis),
                  side: 'top',
                  sideOffset: 4,
                  withArrow: !1,
                  delayDuration: 150,
                  children: (0, j.jsx)('button', {
                    onClick: function () {
                      return n(!0);
                    },
                    children: (0, j.jsx)(tS, {
                      className: '-mt-0.5 ml-0.5 inline-block text-link-base hover:text-link-hover',
                    }),
                  }),
                }),
                i &&
                  (0, j.jsx)(a_, {
                    codeMessage: t.codeMessage,
                    codeExecutionOutputMessage: t.codeExecutionOutputMessage,
                    onDismiss: function () {
                      return n(!1);
                    },
                  }),
              ],
            })
          : null;
      }
      function aA(e) {
        var t = e.citationMetadata,
          a = e.invalidReason,
          i = e.onClick,
          n = (0, th.O6)(),
          s = (null == t ? void 0 : t.type) === 'file',
          r = t
            ? (0, j.jsxs)('div', {
                className: 'flex items-center gap-2',
                children: [
                  (0, j.jsx)('div', {
                    className: 'flex shrink-0 items-center justify-center',
                    children: s ? (0, j.jsx)(T.NOg, {}) : (0, j.jsx)(aN, { url: t.url, className: 'my-0' }),
                  }),
                  (0, j.jsx)('div', { className: 'max-w-xs truncate', children: s ? t.name : t.title }),
                  (0, j.jsx)('div', { className: 'shrink-0', children: (0, j.jsx)(T.AlO, { className: 'icon-xs' }) }),
                ],
              })
            : (0, j.jsx)('div', {
                className: 'text-red-500',
                children: null != a ? a : (0, j.jsx)(ew.Z, (0, k._)({}, aD.invalid)),
              });
        return s
          ? (0, j.jsx)('button', {
              onClick: function () {
                n(t.id, t.name), null == i || i();
              },
              className: 'text-xs',
              children: r,
            })
          : (0, j.jsx)('a', {
              href: null == t ? void 0 : t.url,
              target: '_blank',
              rel: 'noreferrer',
              className: 'text-xs !no-underline',
              onClick: i,
              children: r,
            });
      }
      function aL(e) {
        return 'file' === e.type ? e.id : e.url;
      }
      var aD = (0, E.vU)({
          invalid: {
            id: 'citations.invalid',
            description: 'Text when citation is invalid',
            defaultMessage: 'Invalid citation',
          },
          viewAnalysis: {
            id: 'citations.viewAnalysis',
            description: 'Tooltip text for a citation link to analysis',
            defaultMessage: 'View analysis',
          },
        }),
        aZ = a(10558),
        aB = a(98135),
        aq = a(2827);
      function az() {
        var e = (0, M._)(['text-center mt-2 flex justify-center']);
        return (
          (az = function () {
            return e;
          }),
          e
        );
      }
      function aU() {
        var e = (0, M._)(['flex gap-2 flex-wrap']);
        return (
          (aU = function () {
            return e;
          }),
          e
        );
      }
      var aO = (0, E.vU)({
          saveAndSubmit: {
            id: 'NodeEditor.saveAndSubmit',
            defaultMessage: 'Save & Submit',
            description: 'Save and submit button label in the NodeEditor component.',
          },
          cancel: {
            id: 'NodeEditor.cancel',
            defaultMessage: 'Cancel',
            description: 'Cancel button label in the NodeEditor component.',
          },
        }),
        aV = N.Z.div(az());
      function aG(e) {
        var t = e.initialText,
          a = e.clientThreadId,
          i = e.currentLeaf,
          n = e.onChangeItemInView,
          s = e.onExitEdit,
          r = e.onRequestCompletion,
          o = e.disabled,
          l = e.attachments,
          d = (0, _.useId)(),
          c = ''.concat(i, '-').concat(d),
          u = (0, w._)((0, _.useState)(null != t ? t : ''), 2),
          m = u[0],
          x = u[1],
          g = (0, _.useRef)(null),
          h = (0, _.useCallback)(function (e) {
            x(e.currentTarget.value);
          }, []),
          f = (0, S.WA)(a),
          p = (0, _.useCallback)(
            function () {
              L.tQ.updateTree(a, function (e) {
                var t = e.getParentId(i);
                e.addNode(c, m, t, A.uU.User, void 0, l ? { attachments: l } : void 0);
              }),
                n(c),
                r({
                  type: A.Os.Next,
                  promptId: c,
                  eventMetadata: { eventSource: 'mouse' },
                  cancelActiveRequests: !0,
                  completionMetadata: { conversationMode: f },
                }),
                s(),
                P.A.logEvent(R.M.changeNode, { intent: 'edit_save' });
            },
            [l, a, i, c, m, n, r, s, f]
          ),
          v = (0, _.useCallback)(
            function () {
              n(i),
                P.A.logEvent(R.M.changeNode, { intent: 'edit_cancel' }),
                s(),
                P.A.logEvent(R.M.cancelEditPrompt, { threadId: L.tQ.getServerThreadId(a) });
            },
            [i, n, s, a]
          );
        (0, _.useEffect)(
          function () {
            var e = g.current,
              t = function (e) {
                'Enter' === e.key && e.metaKey ? p() : 'Escape' === e.key && v();
              };
            return (
              e && e.addEventListener('keydown', t),
              function () {
                e && e.removeEventListener('keydown', t);
              }
            );
          },
          [v, p]
        );
        var y = l && l.length > 0;
        return (0, j.jsxs)(j.Fragment, {
          children: [
            y &&
              (0, j.jsx)(aH, {
                children: l.map(function (e) {
                  return (0, j.jsx)(aB.Z, { file: e.name }, e.id);
                }),
              }),
            (0, j.jsx)(aq.ZP, {
              ref: g,
              value: m,
              onChange: h,
              className: 'm-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0',
            }),
            (0, j.jsxs)(aV, {
              children: [
                (0, j.jsx)(es.z, {
                  as: 'button',
                  onClick: p,
                  className: 'mr-2',
                  disabled: o,
                  children: (0, j.jsx)(ew.Z, (0, k._)({}, aO.saveAndSubmit)),
                }),
                (0, j.jsx)(es.z, {
                  as: 'button',
                  color: 'neutral',
                  onClick: v,
                  children: (0, j.jsx)(ew.Z, (0, k._)({}, aO.cancel)),
                }),
              ],
            }),
          ],
        });
      }
      var aH = N.Z.div(aU()),
        aQ = a(47635),
        aW = a(13246);
      function a$() {
        var e = (0, M._)(['text-xs text-black\n', '']);
        return (
          (a$ = function () {
            return e;
          }),
          e
        );
      }
      function aJ() {
        var e = (0, M._)(['relative w-full overflow-hidden pt-[67%]']);
        return (
          (aJ = function () {
            return e;
          }),
          e
        );
      }
      function aY(e) {
        var t,
          a = e.title,
          i = e.url,
          n = e.imageUrl,
          s = e.logoUrl,
          r = e.className,
          o = e.mini,
          l = (0, F.Z)(),
          d = !!n,
          c = (0, _.useCallback)(
            function () {
              P.A.logEvent(R.M.carouselCardClick, { content: i });
            },
            [i]
          );
        try {
          t = aQ.get(new URL(i).hostname);
        } catch (e) {
          return console.error('Invalid card url: ', e), null;
        }
        return (0, j.jsxs)(i ? 'a' : 'div', {
          className: (0, C.default)(
            'flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]',
            r
          ),
          href: i,
          target: i ? '_blank' : '',
          onClick: c,
          children: [
            d &&
              (0, j.jsx)(aX, {
                children: (0, j.jsx)('div', {
                  className: 'absolute inset-0',
                  children: (0, j.jsx)('img', {
                    src: n,
                    alt: l.formatMessage(a0.imageAlt, { title: a }),
                    className: 'h-full w-full border-b border-black/10 object-cover',
                  }),
                }),
              }),
            (0, j.jsxs)('div', {
              className: 'flex flex-1 flex-col justify-between gap-1.5 p-3',
              children: [
                (0, j.jsx)(aK, { $clamp: (void 0 !== o && o) || d, children: a }),
                (0, j.jsxs)('div', {
                  className: 'flex items-center gap-1',
                  children: [
                    s ? (0, j.jsx)(aW.Z, { url: s, name: t, size: 13 }) : (0, j.jsx)(aN, { url: i, size: 13 }),
                    (0, j.jsx)('div', { className: 'text-[10px] leading-3 text-gray-500 line-clamp-1', children: t }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var aK = N.Z.div(a$(), function (e) {
          return e.$clamp && 'line-clamp-2';
        }),
        aX = N.Z.div(aJ()),
        a0 = (0, E.vU)({
          imageAlt: {
            id: 'Card.imageAlt',
            description: 'Alt text for the image, describing the content of the image',
            defaultMessage: 'image of {title}',
          },
        }),
        a9 = a(33554),
        a1 = a(46244),
        a2 = a(95182),
        a5 = a.n(a2);
      function a3(e) {
        var t = e.disabled,
          a = e.onClick,
          i = e.left,
          n = e.children;
        return (0, j.jsx)('button', {
          disabled: t,
          onClick: a,
          'aria-disabled': t,
          className: (0, C.default)(
            'flex h-6 w-[30px] items-center justify-center rounded-full',
            'bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white',
            'transition-opacity disabled:opacity-20',
            'cursor-pointer disabled:cursor-auto',
            'absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2',
            void 0 !== i && i
              ? 'left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full'
              : 'left-1/2 translate-x-1 lg:-right-3 lg:left-auto lg:translate-x-full',
            t && 'lg:hidden'
          ),
          children: n,
        });
      }
      var a6 = function (e) {
          var t = e.x,
            a = e.children,
            i = e.className;
          return (0, j.jsx)(eT.E.div, {
            className: (0, C.default)(
              'mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]',
              i
            ),
            style: { x: t },
            children: a,
          });
        },
        a4 = { type: 'spring', bounce: 0 },
        a7 = (0, _.forwardRef)(function (e, t) {
          return (0, j.jsx)('div', {
            ref: t,
            className: (0, C.default)('relative flex h-full w-full overflow-hidden', e.className),
            children: e.children,
          });
        });
      a7.displayName = 'CarouselContainer';
      var a8 =
        ((g = {}),
        (0, ea._)(g, q._G.Mobile, 1),
        (0, ea._)(g, q._G.Small, 2),
        (0, ea._)(g, q._G.Medium, 2),
        (0, ea._)(g, q._G.Large, 3),
        (0, ea._)(g, q._G.XLarge, 3),
        g);
      function ie(e) {
        var t = e.children,
          a = e.loop,
          i = void 0 === a || a,
          n = e.className,
          s = (0, a9.c)(0),
          r = (0, _.useRef)(null),
          o = (0, w._)((0, _.useState)(0), 2),
          l = o[0],
          d = o[1],
          c = a8[(0, q.dQ)()] || 1,
          u = _.Children.count(t) > c,
          m = _.Children.toArray(t),
          x = (0, _.useCallback)(
            function () {
              var e,
                t = null === (e = r.current) || void 0 === e ? void 0 : e.clientWidth;
              return t ? -Math.floor(l / c) * (t + 12) : 0;
            },
            [c, l]
          ),
          g = (0, _.useCallback)(
            function (e) {
              var t = c * e;
              i
                ? d(function (e) {
                    return ((e + t) % m.length) - 1;
                  })
                : d(function (e) {
                    return a5()(e + t, 0, m.length - 1);
                  });
            },
            [m.length, i, c]
          ),
          h = (0, _.useCallback)(
            function () {
              g(1);
            },
            [g]
          ),
          f = (0, _.useCallback)(
            function () {
              g(-1);
            },
            [g]
          ),
          p = (0, w._)(
            (0, _.useMemo)(
              function () {
                if (i) return [!0, !0];
                var e = l < m.length - c;
                return [l > 0, e];
              },
              [m.length, l, i, c]
            ),
            2
          ),
          v = p[0],
          y = p[1];
        return (
          (0, _.useEffect)(
            function () {
              return (0, a1.j)(s, x(), a4).stop;
            },
            [x, l, s]
          ),
          (0, j.jsxs)('div', {
            className: (0, C.default)('relative h-full w-full', n, u && 'mb-12 lg:mb-0'),
            children: [
              (0, j.jsx)(a7, {
                ref: r,
                children: m.map(function (e, t) {
                  return (0, j.jsx)(a6, { x: s, children: e }, t);
                }),
              }),
              u &&
                (0, j.jsxs)(j.Fragment, {
                  children: [
                    (0, j.jsx)(a3, {
                      onClick: f,
                      left: !0,
                      disabled: !v,
                      children: (0, j.jsx)(T.YFh, { className: 'icon-sm' }),
                    }),
                    (0, j.jsx)(a3, { onClick: h, disabled: !y, children: (0, j.jsx)(T.Tfp, { className: 'icon-sm' }) }),
                  ],
                }),
            ],
          })
        );
      }
      var it = new Set(['og:site_name', 'og:title', 'og:description', 'og:image', 'og:url']),
        ia = {
          'og:site_name': 'metadataTitle',
          'og:title': 'title',
          'og:description': 'description',
          'og:image': 'imageUrl',
          'og:url': 'url',
        },
        ii = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        is = _.memo(function (e) {
          var t,
            a = e.clientThreadId,
            i = e.urls,
            n = (0, Y.i)(a),
            s =
              ((t = (0, tu.h)({
                queries: i.map(function (e) {
                  return {
                    queryKey: ['opengraph', e],
                    queryFn: (0, et._)(function () {
                      return (0, en.Jh)(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return [4, tc.ZP.getPageMetadata({ url: e })];
                          case 1:
                            return [2, t.sent()];
                        }
                      });
                    }),
                    enabled: !!e,
                    retry: !1,
                  };
                }),
              })),
              (0, _.useMemo)(
                function () {
                  return t
                    .map(function (e, t) {
                      var a = e.data,
                        n = e.isError,
                        s = e.isLoading,
                        r = i[t];
                      if (n || s) return null;
                      var o = a.tags.reduce(function (e, t) {
                        return it.has(t.type) && (e[ia[t.type]] = t.value), e;
                      }, {});
                      try {
                        var l,
                          d = r.split(/[#?]/)[0],
                          c = null === (l = o.url) || void 0 === l ? void 0 : l.endsWith('/login'),
                          u = o.url && '/' === new URL(o.url || '').pathname;
                        if (d !== o.url && (c || u)) return null;
                      } catch (e) {
                        return null;
                      }
                      return (o.url = r), o;
                    })
                    .filter(Boolean);
                },
                [t, i]
              )),
            r = (0, _.useMemo)(
              function () {
                return !s.some(function (e) {
                  return !!(null == e ? void 0 : e.imageUrl);
                });
              },
              [s]
            ),
            o = (0, _.useMemo)(
              function () {
                return n.reduce(function (e, t) {
                  return (e[aQ.get(t.domain)] = t.manifest.logo_url), e;
                }, {});
              },
              [n]
            ),
            l = (0, _.useMemo)(
              function () {
                return s.map(function (e) {
                  var t, a;
                  if (!e) return null;
                  try {
                    t = aQ.get(new URL(e.url).hostname);
                  } catch (e) {
                    return console.error('Invalid card url: ', e), null;
                  }
                  return (
                    t in o && (a = o[t]),
                    (0, j.jsx)(
                      aY,
                      { title: e.title || '', url: e.url, imageUrl: e.imageUrl, logoUrl: a, mini: r },
                      e.url
                    )
                  );
                });
              },
              [s, r, o]
            );
          return 0 === s.length ? null : (0, j.jsx)(ie, { loop: !1, children: l });
        }),
        ir = a(51217),
        io = (function () {
          function e(t) {
            (0, ir._)(this, e),
              (this.updateReactComponentDisplay = t),
              (this.textMessageParts = []),
              (this.textMessagePartsTextLength = 0),
              (this.displayedTextLength = 0),
              (this.displayNextCharDelayMs = e.MAX_BUFFERING_MS_PER_CHAR);
          }
          var t = e.prototype;
          return (
            (t.displayNextChar = function () {
              var e = this;
              (this.displayNextCharTimeout = void 0),
                this.isBuffering() &&
                  (this.displayedTextLength++,
                  this.updateReactComponentDisplay(i9(this.textMessageParts, this.displayedTextLength)),
                  (this.displayNextCharTimeout = window.setTimeout(function () {
                    return e.displayNextChar();
                  }, this.displayNextCharDelayMs)));
            }),
            (t.isBuffering = function () {
              return this.displayedTextLength < this.textMessagePartsTextLength;
            }),
            (t.onMessagePartsUpdated = function (t) {
              (this.textMessageParts = t), (this.textMessagePartsTextLength = i0(this.textMessageParts).length);
              var a = this.textMessagePartsTextLength - this.displayedTextLength;
              if (a > 0) {
                var i = e.MAX_BUFFERING_LAG_MS / a;
                this.displayNextCharDelayMs = Math.min(i, e.MAX_BUFFERING_MS_PER_CHAR);
              }
              null == this.displayNextCharTimeout && this.displayNextChar();
            }),
            (t.destroy = function () {
              window.clearTimeout(this.displayNextCharTimeout);
            }),
            e
          );
        })();
      (io.MAX_BUFFERING_LAG_MS = 500), (io.MAX_BUFFERING_MS_PER_CHAR = 30);
      var il = (function () {
        function e(t) {
          (0, ir._)(this, e),
            (this.updateReactComponentDisplay = t),
            (this.textMessageParts = []),
            (this.textMessagePartsTextLength = 0),
            (this.displayedTextLength = 0),
            (this.chunkLength = 0);
        }
        var t = e.prototype;
        return (
          (t.displayNextChunk = function () {
            var t = this;
            (this.displayNextChunkTimeout = void 0),
              this.isBuffering() &&
                ((this.displayedTextLength = Math.min(
                  this.displayedTextLength + this.chunkLength,
                  this.textMessagePartsTextLength
                )),
                this.updateReactComponentDisplay(i9(this.textMessageParts, this.displayedTextLength)),
                (this.displayNextChunkTimeout = window.setTimeout(function () {
                  return t.displayNextChunk();
                }, e.UPDATE_FREQUENCY_MS)));
          }),
          (t.isBuffering = function () {
            return this.displayedTextLength < this.textMessagePartsTextLength;
          }),
          (t.onMessagePartsUpdated = function (t) {
            (this.textMessageParts = t), (this.textMessagePartsTextLength = i0(this.textMessageParts).length);
            var a = this.textMessagePartsTextLength - this.displayedTextLength;
            a >= e.MIN_CHARS_BEHIND_TO_CATCHUP
              ? ((this.chunkLength = Math.ceil((a * e.UPDATE_FREQUENCY_MS) / e.CATCHUP_TIME_MS)),
                null == this.displayNextChunkTimeout && this.displayNextChunk())
              : ((this.displayNextChunkTimeout = void 0),
                window.clearTimeout(this.displayNextChunkTimeout),
                (this.displayedTextLength = this.textMessagePartsTextLength),
                this.updateReactComponentDisplay(i9(this.textMessageParts, this.displayedTextLength)));
          }),
          (t.destroy = function () {
            window.clearTimeout(this.displayNextChunkTimeout);
          }),
          e
        );
      })();
      (il.MIN_CHARS_BEHIND_TO_CATCHUP = 20), (il.CATCHUP_TIME_MS = 300), (il.UPDATE_FREQUENCY_MS = 30);
      var id = a(64502),
        ic = a(8874),
        iu = a(13002),
        im = a(55068),
        ix = a(61491),
        ig = a(44539),
        ih = a(62853),
        ip = a(77421);
      function iv() {
        var e = (0, M._)(['0px 1px 12px 0px rgba(162, 107, 247, ', ')']);
        return (
          (iv = function () {
            return e;
          }),
          e
        );
      }
      function iy() {
        var e = (0, M._)(['1px solid rgba(171, 97, 253, ', ')']);
        return (
          (iy = function () {
            return e;
          }),
          e
        );
      }
      var ik = im._.apply(void 0, (0, id._)([0.28, 0.52, 0.83, 0.67])),
        ib = function (e, t) {
          return function (a) {
            var i = a % 2150;
            return i < 250
              ? e
              : ((e - t) * (1 - Math.sin((2 * (1900 * ik((i - 250) / 1900)) * Math.PI) / 1900 - Math.PI / 2))) / 2 + t;
          };
        },
        iw = _.memo(function (e) {
          var t = e.children,
            a = e.isComplete,
            i = e.results,
            n = e.initialExpanded,
            s = e.onExpand,
            r = (0, w._)((0, _.useState)(void 0 !== n && n), 2),
            o = r[0],
            l = r[1],
            d = (0, w._)((0, _.useState)(t), 2),
            c = d[0],
            u = d[1],
            m = (0, F.Z)(),
            x = (0, C.default)(
              'bg-white dark:bg-gray-600 rounded-xl max-w-full overflow-hidden',
              a ? 'border-black/10 border-[0.5px] shadow-xxs' : ''
            ),
            g = (0, j.jsx)(ij, {
              className: (0, C.default)(x, 'w-[280px]'),
              onNewLoop: function () {
                u(t);
              },
              isComplete: a,
              children: (0, j.jsxs)('div', {
                className: 'flex items-center justify-between',
                children: [
                  (0, j.jsx)('div', { className: 'min-w-0', children: a ? t : c }),
                  a &&
                    null != i &&
                    (0, j.jsx)('div', {
                      className: 'mr-3 flex w-5 justify-center text-gray-600/50',
                      children: o
                        ? (0, j.jsx)(T.rH8, { className: 'icon-sm' })
                        : (0, j.jsx)(T.bTu, { className: 'icon-sm' }),
                    }),
                ],
              }),
            });
          return (
            a &&
              null != i &&
              (g = (0, j.jsx)('button', {
                className: o ? 'group/tool-expander-open' : 'group/tool-expander-closed',
                onClick: function () {
                  l(function (e) {
                    return !e;
                  }),
                    null == s || s();
                },
                'aria-label': m.formatMessage(o ? i_.collapse : i_.expand),
                children: g,
              })),
            (0, j.jsxs)('div', {
              className: 'flex flex-col items-start gap-2',
              children: [
                g,
                null != i &&
                  a &&
                  o &&
                  (0, j.jsx)('div', { className: (0, C.default)(x, 'min-w-[280px]'), children: i }),
              ],
            })
          );
        });
      function iM(e) {
        var t = e.icon,
          a = e.title,
          i = e.subtitle;
        return (0, j.jsxs)('div', {
          className: 'flex h-14 items-center gap-2.5 px-3 py-2',
          children: [
            (0, j.jsx)('div', {
              className: 'flex h-[34px] w-[34px] shrink-0 items-center justify-center',
              children: t,
            }),
            (0, j.jsxs)('div', {
              className: 'flex min-w-0 flex-1 flex-col items-start text-sm leading-[18px]',
              children: [
                null != a && (0, j.jsx)('div', { className: 'truncate font-medium', children: a }),
                null != i && (0, j.jsx)('div', { className: 'max-w-full truncate opacity-70', children: i }),
              ],
            }),
          ],
        });
      }
      var ij = function (e) {
          var t = e.children,
            a = e.className,
            i = e.isComplete,
            n = e.onNewLoop;
          return i
            ? (0, j.jsx)('div', { className: a, children: t })
            : (0, j.jsx)(iC, { className: a, onNewLoop: n, children: t });
        },
        iC = function (e) {
          var t = e.children,
            a = e.className,
            i = e.onNewLoop,
            n = (0, w._)((0, _.useState)(0), 2),
            s = n[0],
            r = n[1],
            o = (0, ix.r)(),
            l = (0, ig.H)(o, ib(0.05, 0.2)),
            d = (0, ih.Y)(iv(), l),
            c = (0, ig.H)(o, ib(0.33, 1)),
            u = (0, ih.Y)(iy(), c);
          return (
            (0, ip.W)(o, 'change', function (e) {
              r(e);
              var t = Math.floor(e / 2150);
              Math.floor(s / 2150) !== t && i(t);
            }),
            (0, j.jsx)(eT.E.div, { className: a, style: { boxShadow: d, border: u }, children: t })
          );
        },
        i_ = (0, E.vU)({
          expand: {
            id: 'NewToolMessage.expand',
            defaultMessage: 'Expand',
            description: 'Aria-label for the expand button',
          },
          collapse: {
            id: 'NewToolMessage.collapse',
            defaultMessage: 'Collapse',
            description: 'Aria-label for the collapse button',
          },
        }),
        iT = (0, E.vU)({
          startingBrowsing: {
            id: 'browsingMessage.startingBrowsingV2',
            defaultMessage: 'Starting up',
            description: 'Status message when browsing is starting',
          },
          startingFileSearch: {
            id: 'browsingMessage.startingFileSearch',
            defaultMessage: 'Searching files...',
            description: 'Status message when searching files is starting',
          },
          finishedFileSearch: {
            id: 'browsingMessage.finishedFileSearch',
            defaultMessage: 'Finished searching files',
            description: 'Status message when searching files is finished',
          },
          searchInProgressTitle: {
            id: 'browsingMessage.searchInProgressTitle',
            defaultMessage: 'Browsing...',
            description: 'Browsing command title when in progress',
          },
          searchFinishedTitle: {
            id: 'browsingMessage.searchFinishedTitle',
            defaultMessage: 'Finished browsing',
            description: 'Browsing command title when finished',
          },
          searchInProgressWeb: {
            id: 'browsingMessage.command.search.inProgress.web',
            defaultMessage: 'Browsing',
            description: 'Browsing command to search Bing is in progress',
          },
          searchInProgressFiles: {
            id: 'browsingMessage.command.search.inProgress.files',
            defaultMessage: 'Searching files: <bold>“{searchQuery}”</bold>',
            description: 'Browsing command to search files is in progress',
          },
          searchFinishedWeb: {
            id: 'browsingMessage.command.search.finished.web',
            defaultMessage: 'Searched Bing: <bold>“<link>{searchQuery}</link>”</bold>',
            description: 'Browsing command to search Bing finished',
          },
          searchFinishedFiles: {
            id: 'browsingMessage.command.search.finished.files',
            defaultMessage: 'Searched files: <bold>“{searchQuery}”</bold>',
            description: 'Browsing command to search files finished',
          },
          searchError: {
            id: 'browsingMessage.command.search.error',
            defaultMessage: 'Search failed',
            description: 'Browsing command to search the web failed',
          },
          clickInProgressForUrl: {
            id: 'browsingMessage.command.click.inProgressForUrl',
            defaultMessage: 'Clicking on {url}',
            description: 'Browsing command to click on a link is in progress',
          },
          clickInProgress: {
            id: 'browsingMessage.command.click.inProgress',
            defaultMessage: 'Clicking…',
            description: 'Browsing command to click on a link is in progress',
          },
          openFileInProgress: {
            id: 'browsingMessage.command.openFile.inProgress',
            defaultMessage: 'Opening a file...',
            description: 'Browsing command to click into a file is in progress',
          },
          clickFinished: {
            id: 'browsingMessage.command.click.finished',
            defaultMessage: 'Clicked on a link',
            description: 'Browsing command to click on a link finished',
          },
          openFileFinished: {
            id: 'browsingMessage.command.openFile.finished',
            defaultMessage: 'Opened a file',
            description: 'Browsing command to click into a file finished',
          },
          clickFinishedWithLink: {
            id: 'browsingMessage.command.click.finishedWithLink',
            defaultMessage: 'Clicked on:',
            description:
              'Browsing command to click on a link finished. The link that was clicked will be displayed after the :',
          },
          openFileFinishedWithLink: {
            id: 'browsingMessage.command.openFile.finishedWithLink',
            defaultMessage: 'Opened:',
            description:
              'Browsing command to click into a file finished. The file that was opened will be displayed after the :',
          },
          clickError: {
            id: 'browsingMessage.command.click.error',
            defaultMessage: 'Click failed',
            description: 'Browsing command to click on a link failed',
          },
          openFileError: {
            id: 'browsingMessage.command.openFile.error',
            defaultMessage: 'Opening file failed',
            description: 'Browsing command to click on a link failed',
          },
          quote: {
            id: 'browsingMessage.command.quote',
            defaultMessage: 'Reading content',
            description: 'Browsing command to read a specific quote from a page',
          },
          quoteWithTitle: {
            id: 'browsingMessage.command.quoteWithTitle',
            defaultMessage: 'Reading “{pageTitle}”',
            description: 'Browsing command to read a specific quote from a page (with the page title included)',
          },
          quoteError: {
            id: 'browsingMessage.command.quote.error',
            defaultMessage: 'Reading content failed',
            description: 'Browsing command to read a specific quote from a page failed',
          },
          error: {
            id: 'browsingMessage.command.error',
            defaultMessage: 'Trying something new',
            description: 'Browsing command when there was an error',
          },
          back: {
            id: 'browsingMessage.command.back',
            defaultMessage: 'Going back',
            description: 'Browsing command to go back to the last page',
          },
          backError: {
            id: 'browsingMessage.command.back.error',
            defaultMessage: 'Going back failed',
            description: 'Browsing command to go back to the last page failed',
          },
          scroll: {
            id: 'browsingMessage.command.scroll',
            defaultMessage: 'Scrolling page',
            description: 'Browsing command to scroll down on a page',
          },
          scrollError: {
            id: 'browsingMessage.command.scroll.error',
            defaultMessage: 'Scroll failed',
            description: 'Browsing command to scroll down on a page failed',
          },
          showSteps: {
            id: 'browsingMessage.showSteps',
            defaultMessage: 'Show work',
            description: 'Button label for showing the steps of a browsing session',
          },
          hideSteps: {
            id: 'browsingMessage.hideSteps',
            defaultMessage: 'Hide work',
            description: 'Button label for hiding the steps of a browsing session',
          },
        }),
        iN = _.memo(function (e) {
          var t = e.messages,
            a = e.isComplete,
            i = e.isRetrieval,
            n = iO(
              t.map(function (e) {
                return e.message;
              })
            ),
            s = [(0, j.jsx)(iD, { isRetrieval: i }, 'starting')].concat(
              (0, id._)(
                n.map(function (e, t) {
                  return (0, j.jsx)(iI, { command: e, citationMetadata: iG(n, t), isRetrieval: i }, t);
                })
              )
            ),
            r = null;
          return (
            a
              ? (s.push((0, j.jsx)(iZ, { isRetrieval: i }, 'finished')),
                (r = (0, j.jsx)(iZ, { isRetrieval: i, isPreview: !0 })))
              : (r =
                  0 === n.length
                    ? (0, j.jsx)(iD, { isRetrieval: i, isPreview: !0 })
                    : (0, j.jsx)(iI, {
                        command: n[n.length - 1],
                        citationMetadata: iG(n, n.length - 1),
                        isRetrieval: i,
                        isPreview: !0,
                      })),
            i
              ? (0, j.jsx)(am, {
                  isComplete: a,
                  results: (0, j.jsx)(ah, { className: 'text-xs', children: s }),
                  children: r,
                })
              : (0, j.jsx)(iw, { isComplete: a, children: r })
          );
        });
      function iI(e) {
        var t = e.command,
          a = e.citationMetadata,
          i = e.isRetrieval,
          n = e.isPreview;
        if (t.didError) return (0, j.jsx)(iA, { isRetrieval: i, commandType: t.type, citationMetadata: a });
        switch (t.type) {
          case 'search':
            var s,
              r,
              o,
              l,
              d =
                'browser_one_box' === t.message.author.name
                  ? null === (s = t.message.metadata) || void 0 === s
                    ? void 0
                    : null === (r = s._cite_metadata) || void 0 === r
                      ? void 0
                      : r.original_query
                  : null === (o = t.message.metadata) || void 0 === o
                    ? void 0
                    : null === (l = o.args) || void 0 === l
                      ? void 0
                      : l[0];
            if (null == d) return null;
            return (0, j.jsx)(iS, {
              searchQuery: d,
              isComplete: t.status === A.L5.Finished,
              isRetrieval: i,
              isPreview: n,
            });
          case 'click':
          case 'open_url':
            return (0, j.jsx)(iP, { isRetrieval: i, citationMetadata: a, isPreview: n });
          case 'quote':
          case 'quote_full':
          case 'quote_lines':
            return (0, j.jsx)(iR, { isRetrieval: i, isPreview: n, citationMetadata: a });
          case 'back':
            return (0, j.jsx)(iF, { isRetrieval: i, isPreview: n, citationMetadata: a });
          case 'scroll':
            return (0, j.jsx)(iE, { isRetrieval: i, isPreview: n, citationMetadata: a });
          default:
            return null;
        }
      }
      function iS(e) {
        var t = e.searchQuery,
          a = e.isComplete,
          i = e.isRetrieval,
          n = e.isPreview,
          s = tc.ZP.getBingLink({ query: t });
        if (!i)
          return (0, j.jsxs)(iq, {
            isRetrieval: i,
            icon: eE.ol,
            isPreview: n,
            iconBase: (0, j.jsx)(eE.jE, { className: 'absolute -left-1 -top-1 h-[21px] w-[21px]' }),
            link: s,
            children: ['“', t, '”'],
          });
        var r = iT.searchInProgressFiles,
          o = iT.searchFinishedFiles;
        return (0, j.jsx)(iU, {
          icon: eE.ol,
          isPreview: n,
          children: a
            ? (0, j.jsx)(
                ew.Z,
                (0, b._)((0, k._)({}, o), {
                  values: {
                    bold: function (e) {
                      return (0, j.jsx)('span', { className: 'font-medium', children: e });
                    },
                    searchQuery: t,
                  },
                })
              )
            : (0, j.jsx)(
                ew.Z,
                (0, b._)((0, k._)({}, r), {
                  values: {
                    bold: function (e) {
                      return (0, j.jsx)('span', { className: 'font-medium', children: e });
                    },
                    searchQuery: t,
                  },
                })
              ),
        });
      }
      function iP(e) {
        var t = e.isRetrieval,
          a = e.citationMetadata,
          i = e.isPreview,
          n = t ? iT.openFileInProgress : iT.clickInProgress;
        if (!t) {
          var s = a ? (0, j.jsx)(iB, { citationMetadata: a, size: 18 }) : null,
            r = (function (e) {
              if (null != e) {
                var t = iH(e);
                try {
                  return new URL(t).hostname;
                } catch (e) {
                  return;
                }
              }
            })(a);
          return (
            null != r && (n = iT.clickInProgressForUrl),
            (0, j.jsx)(iq, {
              isRetrieval: t,
              icon: eE.G$,
              iconBase: s,
              isPreview: i,
              link: a ? iH(a) : void 0,
              children: (0, j.jsx)(ew.Z, (0, b._)((0, k._)({}, n), { values: { url: r } })),
            })
          );
        }
        var o = t ? iT.openFileFinished : iT.clickFinished,
          l = t ? iT.openFileFinishedWithLink : iT.clickFinishedWithLink;
        return (0, j.jsx)(iU, {
          icon: T.NOg,
          isPreview: i,
          children: a
            ? !0 === i
              ? (0, j.jsx)(ew.Z, (0, k._)({}, o))
              : (0, j.jsxs)('div', {
                  className: 'flex items-center gap-2',
                  children: [
                    (0, j.jsx)(ew.Z, (0, k._)({}, l)),
                    (0, j.jsx)('div', {
                      className: 'rounded border border-black/10 bg-white px-2 py-1',
                      children: (0, j.jsx)(aA, {
                        citationMetadata: a,
                        onClick: function () {
                          if (void 0 === a.type || 'webpage' === a.type) {
                            var e, t;
                            ic.m9.logEvent('chatgpt_browsing_click_link', a.url, {
                              domain: null !== (e = aQ.get(new URL(a.url).hostname)) && void 0 !== e ? e : '',
                            }),
                              P.A.logEvent(R.M.browsingClickLink, {
                                url: a.url,
                                domain: null !== (t = aQ.get(new URL(a.url).hostname)) && void 0 !== t ? t : '',
                              });
                          }
                        },
                      }),
                    }),
                  ],
                })
            : (0, j.jsx)(ew.Z, (0, k._)({}, n)),
        });
      }
      function iR(e) {
        var t = e.isPreview,
          a = e.citationMetadata,
          i = e.isRetrieval,
          n = a ? (0, j.jsx)(iB, { citationMetadata: a }) : void 0,
          s = iT.quote,
          r = (null == a ? void 0 : a.type) === 'webpage' ? a.title : void 0;
        return (
          null != r && (s = iT.quoteWithTitle),
          (0, j.jsx)(iq, {
            iconBase: n,
            icon: i ? T.SnF : void 0,
            isPreview: t,
            isRetrieval: i,
            children: (0, j.jsx)(ew.Z, (0, b._)((0, k._)({}, s), { values: { pageTitle: r } })),
          })
        );
      }
      function iF(e) {
        var t = e.isPreview,
          a = e.citationMetadata,
          i = e.isRetrieval,
          n = a ? (0, j.jsx)(iB, { citationMetadata: a, size: 18 }) : null;
        return (0, j.jsx)(iq, {
          isRetrieval: i,
          icon: i ? T.cww : iu.LVY,
          isPreview: t,
          iconBase: n,
          children: (0, j.jsx)(ew.Z, (0, k._)({}, iT.back)),
        });
      }
      function iE(e) {
        var t = e.isPreview,
          a = e.citationMetadata,
          i = e.isRetrieval,
          n = a ? (0, j.jsx)(iB, { citationMetadata: a, size: 18 }) : null;
        return (0, j.jsx)(iq, {
          icon: i ? T.nlg : eE.NV,
          isPreview: t,
          iconBase: n,
          isRetrieval: i,
          children: (0, j.jsx)(ew.Z, (0, k._)({}, iT.scroll)),
        });
      }
      function iA(e) {
        var t,
          a = e.commandType,
          i = e.isPreview,
          n = e.citationMetadata,
          s = e.isRetrieval;
        if (!s) return (0, j.jsx)(iL, { isPreview: i, citationMetadata: n, isRetrieval: s });
        switch (a) {
          case 'search':
            t = iT.searchError;
            break;
          case 'click':
          case 'open_url':
            t = iT.clickError;
            break;
          case 'quote':
          case 'quote_full':
          case 'quote_lines':
            t = iT.quoteError;
            break;
          case 'back':
            t = iT.backError;
            break;
          case 'scroll':
            t = iT.scrollError;
            break;
          default:
            return null;
        }
        return (0, j.jsx)(iU, { icon: T.bcx, isPreview: i, children: (0, j.jsx)(ew.Z, (0, k._)({}, t)) });
      }
      function iL(e) {
        var t = e.isPreview,
          a = e.citationMetadata,
          i = e.isRetrieval,
          n = a ? (0, j.jsx)(iB, { citationMetadata: a, size: 18 }) : null;
        return (0, j.jsx)(iq, {
          icon: iu.LVY,
          isPreview: t,
          iconBase: n,
          isRetrieval: i,
          children: (0, j.jsx)(ew.Z, (0, k._)({}, iT.error)),
        });
      }
      function iD(e) {
        var t = e.isRetrieval,
          a = e.isPreview,
          i = t ? iT.startingFileSearch : iT.startingBrowsing;
        return (0, j.jsx)(iq, {
          isPreview: a,
          iconBase: (0, j.jsx)(eE.Wp, { className: 'icon-2xl text-brand-purple' }),
          isRetrieval: t,
          children: (0, j.jsx)(ew.Z, (0, k._)({}, i)),
        });
      }
      function iZ(e) {
        var t = e.isRetrieval,
          a = e.isPreview;
        return (0, j.jsx)(iq, {
          iconBase: (0, j.jsx)(eE.aS, { className: 'icon-2xl' }),
          icon: t ? T._rq : void 0,
          isPreview: a,
          isComplete: !0,
          isRetrieval: t,
          children: t
            ? (0, j.jsx)(ew.Z, (0, k._)({}, iT.finishedFileSearch))
            : (0, j.jsxs)(j.Fragment, {
                children: [
                  (0, j.jsx)('div', {
                    className: 'hidden group-hover/tool-expander-closed:block',
                    children: (0, j.jsx)(ew.Z, (0, k._)({}, iT.showSteps)),
                  }),
                  (0, j.jsx)('div', {
                    className: 'hidden group-hover/tool-expander-open:block',
                    children: (0, j.jsx)(ew.Z, (0, k._)({}, iT.hideSteps)),
                  }),
                ],
              }),
        });
      }
      var iB = function (e) {
        var t = e.citationMetadata,
          a = e.size,
          i = void 0 === a ? 24 : a;
        return (0, j.jsx)('div', {
          className: 'overflow-hidden rounded-sm bg-[rgba(30,203,239,0.07)]',
          style: { width: i, height: i },
          children: (0, j.jsx)(aN, { url: iH(t), size: i }),
        });
      };
      function iq(e) {
        var t = e.isRetrieval,
          a = (0, tN._)(e, ['isRetrieval']);
        return t ? (0, j.jsx)(iU, (0, k._)({}, a)) : (0, j.jsx)(iz, (0, k._)({}, a));
      }
      function iz(e) {
        var t = e.children,
          a = e.icon,
          i = e.isPreview,
          n = e.iconBase,
          s = e.link,
          r = e.isComplete,
          o =
            null != a
              ? null != n
                ? (0, j.jsxs)('div', {
                    className: 'relative h-full w-full text-gray-600 dark:text-gray-200',
                    children: [
                      (0, j.jsx)('div', { className: 'absolute left-1 top-1', children: n }),
                      (0, j.jsx)(a, { className: 'absolute bottom-1 right-1 h-4 w-4 stroke-white', strokeWidth: 0.5 }),
                    ],
                  })
                : (0, j.jsx)(a, {
                    className: 'h-4 w-4 stroke-white text-gray-600 dark:text-gray-200',
                    strokeWidth: 0.5,
                  })
              : (0, j.jsx)('div', {
                  className: 'flex h-full w-full items-center justify-center text-gray-600 dark:text-gray-200',
                  children: n,
                }),
          l = (0, j.jsx)(iM, {
            icon: o,
            title: r
              ? (0, j.jsx)(ew.Z, (0, k._)({}, iT.searchFinishedTitle))
              : i
                ? (0, j.jsx)(ew.Z, (0, k._)({}, iT.searchInProgressTitle))
                : null,
            subtitle: t,
          });
        return (
          i ||
            null == s ||
            (l = (0, j.jsx)('a', {
              href: s,
              target: '_blank',
              rel: 'noreferrer',
              className: 'block hover:bg-gray-50 dark:hover:bg-gray-800',
              children: (0, j.jsxs)('div', {
                className: 'flex items-center justify-between',
                children: [
                  (0, j.jsx)('div', { className: 'min-w-0', children: l }),
                  (0, j.jsx)('div', {
                    className: 'mr-3 text-gray-600/50',
                    children: (0, j.jsx)(T.AlO, { className: 'icon-sm' }),
                  }),
                ],
              }),
            })),
          (0, j.jsx)('div', {
            className: 'border-b-[0.5px] border-black/10 border-opacity-75 last:border-b-0',
            children: l,
          })
        );
      }
      function iU(e) {
        var t = e.children,
          a = e.icon,
          i = e.isPreview;
        return (0, j.jsxs)('div', {
          className: (0, C.default)('flex items-center gap-2', !0 !== i && 'min-h-[24px]'),
          children: [null != a && (0, j.jsx)(a, { className: 'icon-sm shrink-0' }), (0, j.jsx)('div', { children: t })],
        });
      }
      function iO(e) {
        return e
          .map(function (t, a) {
            if (t.author.role !== A.uU.Tool || (a > 0 && iV(t) && iV(e[a - 1]))) return null;
            if ('browser_one_box' === t.author.name)
              return { type: 'search', didError: 'system_error' === t.content.content_type, message: t };
            var i = t.metadata;
            if (!i) return null;
            var n = i.command,
              s = i.status;
            return n ? { type: n, status: s, didError: 'system_error' === t.content.content_type, message: t } : null;
          })
          .filter(Boolean);
      }
      function iV(e) {
        var t, a, i;
        return (
          (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) === 'quote' ||
          (null === (a = e.metadata) || void 0 === a ? void 0 : a.command) === 'quote_full' ||
          (null === (i = e.metadata) || void 0 === i ? void 0 : i.command) === 'quote_lines'
        );
      }
      function iG(e, t) {
        for (var a = t; a >= 0; a--) {
          var i,
            n,
            s =
              null === (i = e[a].message.metadata) || void 0 === i
                ? void 0
                : null === (n = i._cite_metadata) || void 0 === n
                  ? void 0
                  : n.metadata_list[0];
          if (null != s) return s;
        }
      }
      function iH(e) {
        return (null == e ? void 0 : e.type) !== 'file' ? e.url : '';
      }
      function iQ() {
        var e = (0, M._)(['flex gap-2 flex-wrap mt-1']);
        return (
          (iQ = function () {
            return e;
          }),
          e
        );
      }
      var iW = _.memo(function (e) {
        var t,
          a,
          i,
          n = e.message,
          s = e.isEditing,
          r = e.format,
          o = e.isCompletionInProgress,
          l = e.className,
          d = e.isCompletion,
          c = e.isResponseToPluginMessage,
          u = e.prevBrowsingMessages,
          m = e.prevCodeMessages,
          x = (0, tN._)(e, [
            'message',
            'isEditing',
            'format',
            'isCompletionInProgress',
            'className',
            'isCompletion',
            'isResponseToPluginMessage',
            'prevBrowsingMessages',
            'prevCodeMessages',
          ]),
          g = (0, _.useMemo)(
            function () {
              return 'parts' in n.message.content ? n.message.content.parts : [(0, z.RR)(n.message)];
            },
            [n]
          );
        return s
          ? (0, j.jsx)(
              aG,
              (0, k._)(
                {
                  currentLeaf: n.nodeId,
                  initialText: (0, z.RR)(n.message),
                  attachments: null === (i = n.message.metadata) || void 0 === i ? void 0 : i.attachments,
                },
                x
              )
            )
          : (0, j.jsx)(i$, {
              parts: g,
              messages: [n],
              isCompletionInProgress: o,
              format: r,
              className: l,
              citations: null === (t = n.message.metadata) || void 0 === t ? void 0 : t.citations,
              attachments: null === (a = n.message.metadata) || void 0 === a ? void 0 : a.attachments,
              isCompletion: d,
              id: n.nodeId,
              onRequestMoreCompletions: x.onRequestMoreCompletions,
              clientThreadId: x.clientThreadId,
              showExtractedLinkCards: c,
              prevBrowsingMessages: u,
              prevCodeMessages: m,
            });
      });
      function i$(e) {
        var t = (0, Z.hz)(),
          a = e7(),
          i = e.messages.length > 1,
          n = 'danger' !== (0, J.ZC)(i ? void 0 : e.messages[0]).flagSeverity && e.isCompletionInProgress,
          s = !e.parts.some(function (e) {
            return '' !== e;
          });
        return (0, w._)(
          (0, _.useState)(function () {
            return (t.has(e6.Nj) || a) && e.isCompletion && (e.isCompletionInProgress || s);
          }),
          1
        )[0]
          ? (0, j.jsx)(iJ, (0, b._)((0, k._)({}, e), { isActivelyStreaming: n }))
          : (0, j.jsx)(iY, (0, b._)((0, k._)({}, e), { displayParts: i9(e.parts), isActivelyStreaming: n }));
      }
      function iJ(e) {
        var t,
          a = e.isActivelyStreaming,
          i = (0, tN._)(e, ['isActivelyStreaming']),
          n = (0, Z.hz)(),
          s = e.messages[e.messages.length - 1].message.id,
          r = (0, w._)((0, _.useState)([]), 2),
          o = r[0],
          l = r[1],
          d = (0, _.useRef)();
        return (
          void 0 === d.current && (d.current = n.has(e6.Nj) ? new io(l) : new il(l)),
          (0, _.useEffect)(
            function () {
              null != d.current &&
                (d.current.onMessagePartsUpdated(e.parts), d.current.isBuffering() && eF.addDelayedRenderingMessage(s));
            },
            [e.parts, s]
          ),
          (0, _.useEffect)(
            function () {
              null == d.current || d.current.isBuffering() || eF.removeDelayedRenderingMessage(s);
            },
            [o, s]
          ),
          (0, _.useEffect)(
            function () {
              return function () {
                return eF.removeDelayedRenderingMessage(s);
              };
            },
            [s]
          ),
          (0, _.useEffect)(function () {
            return function () {
              null != d.current && (d.current.destroy(), (d.current = void 0));
            };
          }, []),
          (0, j.jsx)(
            iY,
            (0, b._)((0, k._)({}, i), {
              displayParts: o,
              isActivelyStreaming: a || (null === (t = d.current) || void 0 === t ? void 0 : t.isBuffering()),
            })
          )
        );
      }
      function iY(e) {
        var t,
          a,
          i,
          n,
          s = e.attachments,
          r = e.citations,
          o = e.className,
          l = e.clientThreadId,
          d = e.displayParts,
          c = e.format,
          u = e.id,
          m = e.isActivelyStreaming,
          g = e.isCompletion,
          h = e.isCompletionInProgress,
          f = e.messages,
          p = e.onRequestMoreCompletions,
          v = e.parts,
          y = e.prevBrowsingMessages,
          b = e.prevCodeMessages,
          w = e.showExtractedLinkCards,
          M = e.size,
          T = void 0 === M ? 'medium' : M,
          N = (0, Z.hz)(),
          I = (0, F.Z)(),
          S = f.length > 1,
          P = (0, J.ZC)(S ? void 0 : f[0]),
          R = P.flagSeverity,
          E = P.shouldHideContent,
          L = !v.some(function (e) {
            return '' !== e;
          }),
          D =
            ((a = (t = { text: i0(v), isCompletionInProgress: h }).text),
            (i = t.isCompletionInProgress),
            (0, _.useMemo)(
              function () {
                if (i) return [];
                var e = a.match(ii);
                return Array.from(new Set(e));
              },
              [i, a]
            )),
          B = null === (n = f[0].message.metadata) || void 0 === n ? void 0 : n.targeted_reply,
          q = v.filter(function (e) {
            return 'string' != typeof e;
          }),
          U = new Set(
            q.map(function (e) {
              return (0, th.Iy)(e.asset_pointer);
            })
          ),
          O = (null != s ? s : []).filter(function (e) {
            return null != e.id && !U.has(e.id);
          }),
          V = O.length > 0 && !g;
        return (0, j.jsxs)('div', {
          'data-message-author-role': f[0].message.author.role,
          'data-message-id': f[0].message.id,
          className: (0, C.default)(
            o,
            'text-message peer flex flex-col items-start gap-3 whitespace-pre-wrap break-words peer-[.text-message]:mt-5',
            'danger' === R && 'text-red-500',
            'warning' === R && 'text-orange-500',
            !L && 'overflow-x-auto'
          ),
          children: [
            B &&
              (0, j.jsxs)('div', {
                className: 'mt-2 flex flex-col border-l-2 border-token-border-heavy px-3 text-token-text-primary',
                children: [
                  (0, j.jsx)('div', {
                    className: 'text-sm text-token-text-tertiary',
                    children: (0, j.jsx)(ew.Z, (0, k._)({}, i1.targetedReply)),
                  }),
                  (0, j.jsx)('div', { className: 'overflow-y-auto whitespace-pre-wrap break-words', children: B }),
                ],
              }),
            V &&
              (0, j.jsx)(iK, {
                children: O.map(function (e) {
                  return (0, j.jsx)(aB.Z, { file: e.name, fileId: e.id, width: 'wide', alwaysShowData: !0 }, e.id);
                }),
              }),
            d.map(function (e, t) {
              if ('text' === e.type) {
                var a = E ? null : e.text;
                if (!L && !E && c) {
                  var i = (function (e, t, a) {
                      var i = [];
                      if (null != t) {
                        for (
                          var n = t.filter(function (t) {
                              return t.end_ix <= e.length;
                            }),
                            s = 1,
                            r = {},
                            o = {},
                            l = 0;
                          l < n.length;
                          l++
                        ) {
                          var d = n[l],
                            c = d.citation_format_type,
                            u = d.metadata,
                            m = d.invalid_reason;
                          if ('tether_markdown' !== c) {
                            if (u) {
                              var g = aL(u);
                              null == r[g] && ((r[g] = s), s++), (o[l] = r[g]);
                            } else null != m && ((o[l] = s), s++);
                          }
                        }
                        for (var h = n.length - 1; h >= 0; h--) {
                          var f = n[h],
                            p = f.citation_format_type,
                            v = f.start_ix,
                            y = f.end_ix,
                            k = f.metadata,
                            b = f.invalid_reason;
                          if ('tether_markdown' === p) {
                            if (k && 'file' !== k.type) {
                              var w = e.slice(v, y).replace(/\[(.*?)\]\((\d+)\)/g, '[$1]('.concat(k.url, ')'));
                              e = e.slice(0, v) + w + e.slice(y);
                            }
                          } else {
                            var M = { type: x.Standard, number: o[h] };
                            k ? (M.metadata = k) : null != b && (M.invalid_reason = b);
                            var j = !1;
                            if (h > 0) {
                              var C = n[h - 1];
                              null != C.metadata &&
                                null != k &&
                                aL(C.metadata) === aL(k) &&
                                0 === e.slice(C.end_ix, f.start_ix).trim().length &&
                                ((e = e.slice(0, C.end_ix) + e.slice(f.end_ix)), (j = !0));
                            }
                            if (!j) {
                              var _ = i.length;
                              (e = e.slice(0, v) + aP(_) + e.slice(y)), i.push(M);
                            }
                          }
                        }
                      }
                      if (null != a) {
                        var T = a.find(function (e) {
                            return (0, z.rH)(e) === z.Cs.Code;
                          }),
                          N = a.find(function (e) {
                            return (0, z.rH)(e) === z.Cs.CodeExecutionOutput;
                          });
                        null != T &&
                          null != N &&
                          ((e += aP(i.length)),
                          i.push({ type: x.CodeExecution, codeMessage: T, codeExecutionOutputMessage: N }));
                      }
                      return { text: e, displayedCitations: i };
                    })(
                      e.text,
                      r,
                      m
                        ? void 0
                        : null == b
                          ? void 0
                          : b.map(function (e) {
                              return e.message;
                            })
                    ),
                    n = i.text,
                    s = i.displayedCitations,
                    o = n;
                  if (N.has(e6.jS) && 0 === t) {
                    var d = (function (e, t) {
                      if (null != e) {
                        var a = iO(
                          e.map(function (e) {
                            return e.message;
                          })
                        ).find(function (e) {
                          return e.type === A.$x.Search;
                        });
                        if (null != a) {
                          var i,
                            n,
                            s =
                              null === (i = a.message.metadata) || void 0 === i
                                ? void 0
                                : null === (n = i.args) || void 0 === n
                                  ? void 0
                                  : n[0];
                          if (null != s)
                            return (
                              t.formatMessage(i1.browsingSearchLinkPrefix, {
                                searchLink: tc.ZP.getBingLink({ query: s }),
                              }) + '\n\n'
                            );
                        }
                      }
                      return null;
                    })(y, I);
                    null != d && (o = d + o);
                  }
                  return (0, j.jsx)(
                    aI.Provider,
                    {
                      value: { clientThreadId: l, displayedCitations: s },
                      children: (0, j.jsx)(ao, {
                        clientThreadId: l,
                        messageId: u,
                        size: T,
                        className: (0, C.default)(
                          m && 'result-streaming',
                          'danger' === R && 'text-red-500',
                          'warning' === R && 'text-orange-500'
                        ),
                        children: '' === o ? '&#8203;' : o,
                      }),
                    },
                    t
                  );
                }
                return (0, j.jsx)(
                  'div',
                  { className: (0, C.default)(L && m && 'result-thinking relative'), children: a },
                  t
                );
              }
              var g = e.imageAssets.length > 1;
              return (0, j.jsx)(
                'div',
                {
                  className: (0, C.default)(g && 'grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4'),
                  children: e.imageAssets.map(function (e, t) {
                    return (0, j.jsx)(iX, { asset: e, showAsGrid: g }, t);
                  }),
                },
                t
              );
            }),
            (0, j.jsx)(J.ZP, { message: S ? void 0 : f[0], id: u, onRequestMoreCompletions: p, clientThreadId: l }),
            g && w && D.length > 0 && (0, j.jsx)(is, { clientThreadId: l, urls: D }),
          ],
        });
      }
      var iK = N.Z.div(iQ());
      function iX(e) {
        var t,
          a,
          i,
          n,
          s,
          r,
          o,
          l,
          d,
          c,
          u,
          m = e.asset,
          x = e.showAsGrid,
          g = (0, w._)((0, _.useState)(!1), 2),
          h = g[0],
          f = g[1],
          p = (0, V.QH)().gizmoTemplate,
          v = (0, F.Z)(),
          y =
            ((t = null == p ? void 0 : p.id),
            (a = m.asset_pointer),
            (i = m.width),
            (n = m.height),
            (s = (0, _.useContext)(B.gB)),
            (r = (0, th.Iy)(a)),
            (l = null != (o = null == s ? void 0 : s.serverSharedThreadId)),
            (c = (d = (0, tm.a)({
              queryKey: ['getFileDownloadLink', r, t],
              queryFn: (0, et._)(function () {
                return (0, en.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        tc.ZP.getFileDownloadLink(r, t).catch(function (e) {
                          throw (
                            (console.error('Could not fetch file with ID '.concat(r, ' from file service'), e.message),
                            e)
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !l,
            })).data),
            (u = d.isLoading),
            {
              isLoading: !l && u,
              error: d.error,
              url: l ? ty(o, r) : (null == c ? void 0 : c.status) == td.KF.Success ? c.download_url : null,
              width: i,
              height: n,
            }),
          k = y.url,
          b = y.width,
          M = y.height,
          N = y.isLoading,
          I = y.error,
          S = N || !h;
        return (0, j.jsx)('div', {
          className: (0, C.default)(
            'relative mt-1 flex h-auto w-full max-w-lg items-center justify-center overflow-hidden bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400',
            x && 'aspect-square'
          ),
          children:
            null !== k
              ? (0, j.jsx)(aZ.l, {
                  src: k,
                  alt: v.formatMessage(i1.imageAltText),
                  children: (0, j.jsx)(tp, {
                    alt: v.formatMessage(i1.imageAltText),
                    className: (0, C.default)('max-w-full', x && 'aspect-square object-cover'),
                    src: k,
                    width: b,
                    height: M,
                    onLoadingComplete: function () {
                      return f(!0);
                    },
                  }),
                })
              : (0, j.jsx)('div', {
                  className: 'flex items-center justify-center',
                  style: { aspectRatio: ''.concat(b, ' / ').concat(M), width: b },
                  title: S ? v.formatMessage(i1.loadingImage) : v.formatMessage(i1.errorLoadingImage),
                  children: S ? (0, j.jsx)(t6.Z, {}) : I ? (0, j.jsx)(T.BJv, {}) : null,
                }),
        });
      }
      function i0(e) {
        return e
          .map(function (e) {
            return 'string' == typeof e ? e : '';
          })
          .join('');
      }
      function i9(e, t) {
        for (var a = [], i = 0, n = 0; n < e.length; n++) {
          var s = e[n];
          if ('string' == typeof s) {
            if (null != t && t < i + s.length) {
              a.push({ type: 'text', text: s.slice(0, t - i) });
              break;
            }
            a.push({ type: 'text', text: s }), (i += s.length);
          } else {
            var r = n > 0 ? a[n - 1] : null;
            (null == r ? void 0 : r.type) === 'images'
              ? r.imageAssets.push(s)
              : a.push({ type: 'images', imageAssets: [s] });
          }
        }
        return a;
      }
      var i1 = (0, E.vU)({
        loadingImage: {
          id: 'textMessage.loadingImage',
          defaultMessage: 'Loading...',
          description: 'Text that describes a loading image',
        },
        errorLoadingImage: {
          id: 'textMessage.errorLoadingImage',
          defaultMessage: 'Could not load image',
          description: 'Text that describes an image that failed to load',
        },
        imageAltText: {
          id: 'textMessage.imageAltText',
          defaultMessage: 'Uploaded image',
          description: 'Alt text for image asset',
        },
        targetedReply: {
          id: 'textMessage.targetedReply',
          defaultMessage: 'Replying to',
          description: 'Header shown above a targeted reply',
        },
        browsingSearchLinkPrefix: {
          id: 'textMessage.browsingSearchLinkPrefix',
          defaultMessage: "Based on a [quick search]({searchLink}), here's what I found.",
          description: 'Prefix added to the message to link to a Bing search result',
        },
      });
      function i2(e) {
        var t = e.messages,
          a = e.clientThreadId,
          i = e.isCompletionInProgress,
          n = e.isCompletion,
          s = e.prevBrowsingMessages,
          r = e.prevCodeMessages,
          o = e.onRequestMoreCompletions,
          l = (0, _.useMemo)(
            function () {
              return [
                t.reduce(function (e, t) {
                  return null == t.err ? e + (0, z.RR)(t.message) : e;
                }, ''),
              ];
            },
            [t]
          );
        return (0, j.jsx)(i$, {
          clientThreadId: a,
          parts: l,
          format: !0,
          isCompletion: n,
          isCompletionInProgress: i,
          id: '',
          messages: t,
          onRequestMoreCompletions: o,
          prevBrowsingMessages: s,
          prevCodeMessages: r,
        });
      }
      function i5(e) {
        var t,
          a,
          i = e.messages,
          n = e.clientThreadId,
          s = e.isLastMessageInTurn,
          r = e.isRequestActive,
          o = e.isRetrieval,
          l = i.map(function (e) {
            return e.message;
          }),
          d = iO(l),
          c = d.filter(function (e) {
            return (function (e, t) {
              switch (e.type) {
                case A.$x.Search:
                  return !0;
                case A.$x.Click:
                case A.$x.OpenUrl:
                case A.$x.Quote:
                case A.$x.QuoteFull:
                case A.$x.QuoteLines:
                  return t ? null != i6(e) : null != i3(e);
                case A.$x.Back:
                case A.$x.Scroll:
                  return !1;
                default:
                  return (0, tl.Z)(e.type), !1;
              }
            })(e, o);
          }),
          m = (0, S.WA)(n),
          x = [A.OL.GizmoInteraction, A.OL.GizmoMagicCreate, A.OL.GizmoTest].includes(m.kind),
          g = u.Running,
          h = o ? (x ? i4.searchingKnowledge : i4.startingRetrieval) : i4.starting;
        return (
          l.some(e4)
            ? ((g = u.Stopped), (h = o ? (x ? i4.searchingKnowledgeStopped : i4.retrievalStopped) : i4.browsingStopped))
            : s && r
              ? c.length > 0 &&
                ((h = (a = (function (e, t, a) {
                  switch (e.type) {
                    case A.$x.Search:
                      if (t)
                        return a ? { displayMessage: i4.searchingKnowledge } : { displayMessage: i4.startingRetrieval };
                      var i,
                        n,
                        s =
                          null === (i = e.message.metadata) || void 0 === i
                            ? void 0
                            : null === (n = i.args) || void 0 === n
                              ? void 0
                              : n[0];
                      if (null != s)
                        return { displayMessage: i4.searchingForQuery, displayMessageValues: { query: s } };
                      return { displayMessage: i4.searching };
                    case A.$x.Click:
                    case A.$x.OpenUrl:
                    case A.$x.Quote:
                    case A.$x.QuoteFull:
                    case A.$x.QuoteLines:
                      if (t)
                        return a
                          ? { displayMessage: i4.searchingKnowledge }
                          : { displayMessage: i4.readingDocument, displayMessageValues: { filename: i6(e) } };
                      var r = i3(e);
                      return {
                        displayMessage: i4.visiting,
                        displayMessageValues: {
                          url:
                            null != r
                              ? (function (e) {
                                  try {
                                    return new URL(e).hostname;
                                  } catch (e) {
                                    return null;
                                  }
                                })(r)
                              : null,
                        },
                      };
                    case A.$x.Back:
                    case A.$x.Scroll:
                      throw Error('No display string for command: '.concat(e.type));
                    default:
                      throw ((0, tl.Z)(e.type), Error('Unknown command type: '.concat(e.type)));
                  }
                })(c[c.length - 1], o, x)).displayMessage),
                (t = a.displayMessageValues))
              : d.every(function (e) {
                    return e.didError;
                  })
                ? ((g = u.Error), (h = o ? (x ? i4.searchingKnowledgeFailed : i4.retrievalFailed) : i4.browsingFailed))
                : ((g = u.Finished), (h = void 0)),
          (0, j.jsx)(e8, {
            conversationMessages: i,
            icon: o ? eJ : e$,
            status: g,
            displayMessage: h,
            displayMessageValues: t,
            estimatedToolDurationMs: o ? 8e3 : 1e4,
          })
        );
      }
      function i3(e) {
        var t,
          a,
          i =
            null === (t = e.message.metadata) || void 0 === t
              ? void 0
              : null === (a = t._cite_metadata) || void 0 === a
                ? void 0
                : a.metadata_list[0];
        return null != i && 'file' !== i.type ? i.url : null;
      }
      function i6(e) {
        var t,
          a,
          i =
            null === (t = e.message.metadata) || void 0 === t
              ? void 0
              : null === (a = t._cite_metadata) || void 0 === a
                ? void 0
                : a.metadata_list[0];
        return null != i && 'file' === i.type ? i.name : null;
      }
      var i4 = (0, E.vU)({
          starting: {
            id: 'browsingMessage.startingV2',
            defaultMessage: 'Browsing with Bing',
            description: 'Status message when browsing is starting',
          },
          browsingStopped: {
            id: 'browsingMessage.browsingStopped',
            defaultMessage: 'Stopped browsing',
            description: 'Status message when browsing was stopped',
          },
          browsingFailed: {
            id: 'browsingMessage.browsingFailed',
            defaultMessage: 'Error browsing',
            description: 'Status message when browsing failed',
          },
          searching: {
            id: 'browsingMessage.searching',
            defaultMessage: 'Searching Bing',
            description: 'Status message when searching Bing',
          },
          searchingForQuery: {
            id: 'browsingMessage.searchingForQuery',
            defaultMessage: 'Searching “{query}”',
            description: 'Status message when searching for a query',
          },
          visiting: {
            id: 'browsingMessage.visiting',
            defaultMessage: 'Visiting {url}',
            description: 'Status message when visiting a webpage',
          },
          startingRetrieval: {
            id: 'browsingMessage.startingRetrieval',
            defaultMessage: 'Reading documents',
            description: 'Status message when document retrieval is starting',
          },
          retrievalStopped: {
            id: 'browsingMessage.retrievalStopped',
            defaultMessage: 'Stopped reading documents',
            description: 'Status message when document retrieval was stopped',
          },
          retrievalFailed: {
            id: 'browsingMessage.retrievalFailed',
            defaultMessage: 'Error reading documents',
            description: 'Status message when document retrieval failed',
          },
          readingDocument: {
            id: 'browsingMessage.readingDocument',
            defaultMessage: 'Reading {filename}',
            description: 'Status message when reading a document',
          },
          searchingKnowledge: {
            id: 'browsingMessage.searchingKnowledge',
            defaultMessage: 'Searching my knowledge',
            description: 'Status message when a GPT is searching its knowledge base',
          },
          searchingKnowledgeStopped: {
            id: 'browsingMessage.searchingKnowledgeStopped',
            defaultMessage: 'Stopped searching knowledge',
            description: 'Status message when a GPT stopped searching its knowledge base',
          },
          searchingKnowledgeFailed: {
            id: 'browsingMessage.searchingKnowledgeFailed',
            defaultMessage: 'Error searching knowledge',
            description: 'Status message when a GPT failed to search its knowledge base',
          },
        }),
        i7 = a(56115),
        i8 = a(71950),
        ne = a(11615);
      ((r = h || (h = {}))[(r.Left = -1)] = 'Left'), (r[(r.Right = 1)] = 'Right'), (r[(r.None = 0)] = 'None');
      var nt = {
          enter: function (e) {
            return { zIndex: 0, x: e === h.Left ? '10%' : '-10%', opacity: 0 };
          },
          center: { zIndex: 1, x: 0, opacity: 1 },
          exit: function (e) {
            return { zIndex: 0, x: e === h.Right ? '10%' : '-10%', opacity: 0 };
          },
        },
        na = { enter: { opacity: 0, y: '10%' }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: '10%' } },
        ni = function (e, t) {
          return Math.abs(e) * t;
        };
      function nn(e) {
        var t,
          a = function () {
            p(function (t) {
              var a =
                (e.images.findIndex(function (e) {
                  return e.url === t.url;
                }) +
                  1) %
                e.images.length;
              return e.images[a];
            }),
              S(h.Left);
          },
          i = function () {
            p(function (t) {
              var a = e.images.findIndex(function (e) {
                  return e.url === t.url;
                }),
                i = a > 0 ? (a - 1) % e.images.length : e.images.length - 1;
              return e.images[i];
            }),
              S(h.Right);
          },
          n = function (e) {
            'ArrowLeft' === e.key ? i() : 'ArrowRight' === e.key && a();
          },
          s = (0, F.Z)(),
          r = (0, q.dQ)(),
          o = [q._G.Small, q._G.Mobile].includes(r),
          l = (0, w._)((0, _.useState)({ width: 0, height: 0 }), 2),
          d = l[0],
          c = l[1],
          u = (0, w._)((0, _.useState)(!1), 2),
          m = u[0],
          x = u[1],
          g = (0, w._)((0, _.useState)(e.image), 2),
          f = g[0],
          p = g[1],
          v = (0, w._)((0, _.useState)(!1), 2),
          y = v[0],
          k = v[1],
          b = d.width > 0 && d.height > 0,
          M = (0, _.useRef)(null),
          T = (0, w._)((0, _.useState)(h.None), 2),
          N = T[0],
          S = T[1];
        (0, _.useEffect)(
          function () {
            if (!f.url) throw Error('ExpandableImage requires a src');
            var e = new Image();
            (e.onload = function () {
              c({ width: e.naturalWidth, height: e.naturalHeight });
            }),
              (e.onerror = function () {
                ne.D0 && console.error('Could not load image '.concat(f.url));
              }),
              (e.src = f.url);
          },
          [f.url]
        ),
          (0, _.useEffect)(
            function () {
              var t = M.current;
              if (y)
                return (
                  null == t || t.addEventListener('keydown', n),
                  function () {
                    null == t || t.removeEventListener('keydown', n);
                  }
                );
              p(e.image);
            },
            [y]
          );
        var P = e.images.findIndex(function (e) {
          return e.url === f.url;
        });
        return (0, j.jsxs)(i8.fC, {
          onOpenChange: function (t) {
            var a;
            k(t), t && (null === (a = e.onOpen) || void 0 === a || a.call(e));
          },
          children: [
            (0, j.jsx)(i8.xz, {
              disabled: !b,
              className: e.className,
              'aria-label': s.formatMessage(ns.showImage),
              children: e.children,
            }),
            (0, j.jsx)(i8.h_, {
              children: (0, j.jsx)(i8.aV, {
                className:
                  'fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-xl radix-state-open:animate-show',
                children: (0, j.jsxs)(i8.VY, {
                  className: (0, C.default)(
                    'relative flex h-[100dvh] w-screen justify-stretch divide-x divide-white/10 focus:outline-none radix-state-open:animate-contentShow'
                  ),
                  ref: M,
                  children: [
                    (0, j.jsx)('div', {
                      className: (0, C.default)('flex flex-1 transition-[flex-basis]', !m && 'md:basis-[75vw]'),
                      children: (0, j.jsxs)('div', {
                        className: 'flex flex-1 flex-col md:p-6',
                        children: [
                          (0, j.jsxs)('div', {
                            className: 'flex justify-between px-6 py-2 pt-6 text-white sm:mb-4 md:mt-2 md:px-0 md:py-2',
                            children: [
                              (0, j.jsx)(i8.x8, {
                                asChild: !0,
                                children: (0, j.jsx)('button', {
                                  'aria-label': s.formatMessage(ns.closeModal),
                                  children: (0, j.jsx)(I.v7, {}),
                                }),
                              }),
                              (0, j.jsx)('div', {
                                children:
                                  !o &&
                                  (0, j.jsxs)(j.Fragment, {
                                    children: [
                                      (0, j.jsx)(es.z, {
                                        color: 'none',
                                        size: 'small',
                                        onClick: function () {
                                          return e.onDownload(f);
                                        },
                                        'aria-label': s.formatMessage(ns.downloadImage),
                                        children: (0, j.jsx)(I.Sg, {}),
                                      }),
                                      (0, j.jsx)(es.z, {
                                        color: 'none',
                                        size: 'small',
                                        onClick: function () {
                                          return x(function (e) {
                                            return !e;
                                          });
                                        },
                                        'aria-label': s.formatMessage(ns.toggleSidebar),
                                        className: 'md:inline-flex',
                                        children: (0, j.jsx)(I.VX, {}),
                                      }),
                                    ],
                                  }),
                              }),
                            ],
                          }),
                          (0, j.jsx)('div', {
                            className: 'relative flex flex-1 flex-col items-center justify-center overflow-hidden',
                            children: (0, j.jsx)(e_.M, {
                              initial: !1,
                              custom: N,
                              children: (0, j.jsxs)(
                                eT.E.div,
                                {
                                  className: 'absolute grid h-full w-full grid-rows-2',
                                  custom: N,
                                  variants: nt,
                                  drag: 'x',
                                  dragConstraints: { left: 0, right: 0 },
                                  dragElastic: 1,
                                  onDragEnd: function (e, t) {
                                    var n = t.offset,
                                      s = t.velocity,
                                      r = ni(n.x, s.x);
                                    r < -1e3 ? a() : r > 1e3 && i();
                                  },
                                  children: [
                                    (0, j.jsx)(
                                      eT.E.img,
                                      {
                                        src: f.url,
                                        alt: f.alt,
                                        className: 'row-span-4 mx-auto h-full object-scale-down',
                                        onPanEnd: function (e, t) {
                                          var a = t.offset,
                                            i = t.velocity,
                                            n = ni(a.y, i.y);
                                          n < -1e3 ? x(!0) : n > 1e3 && x(!1);
                                        },
                                      },
                                      f.url
                                    ),
                                    o &&
                                      m &&
                                      (0, j.jsx)(eT.E.div, {
                                        className: 'flex text-white',
                                        variants: na,
                                        initial: 'enter',
                                        animate: 'visible',
                                        exit: 'exit',
                                        transition: {
                                          y: { type: 'spring', stiffness: 300, damping: 30 },
                                          opacity: { duration: 0.2 },
                                        },
                                        children: e.metadataRenderer(f),
                                      }),
                                  ],
                                },
                                f.url
                              ),
                            }),
                          }),
                          e.images.length > 1
                            ? (0, j.jsxs)('div', {
                                className: 'flex items-center justify-center gap-4 p-8 text-white',
                                children: [
                                  (0, j.jsx)(es.z, {
                                    color: 'none',
                                    size: 'small',
                                    onClick: i,
                                    'aria-label': s.formatMessage(ns.previousImage),
                                    children: (0, j.jsx)(I.FX, {}),
                                  }),
                                  e.images.map(function (e, a) {
                                    return (0, j.jsx)(
                                      'img',
                                      {
                                        src: e.url,
                                        alt: null !== (t = e.alt) && void 0 !== t ? t : '',
                                        className: (0, C.default)(
                                          'h-12 w-12 cursor-pointer rounded object-cover transition duration-300 hover:opacity-100',
                                          e.url === f.url
                                            ? 'ring-2 ring-white ring-offset-4 ring-offset-black'
                                            : 'opacity-25'
                                        ),
                                        onClick: function () {
                                          p(e), S(a < P ? h.Right : h.Left);
                                        },
                                        'aria-label': s.formatMessage(ns.showImage),
                                        role: 'button',
                                      },
                                      e.url
                                    );
                                  }),
                                  (0, j.jsx)(es.z, {
                                    color: 'none',
                                    size: 'small',
                                    onClick: a,
                                    'aria-label': s.formatMessage(ns.nextImage),
                                    children: (0, j.jsx)(I.Gb, {}),
                                  }),
                                ],
                              })
                            : null,
                        ],
                      }),
                    }),
                    (0, j.jsx)('div', {
                      className: (0, C.default)(
                        'hidden items-center justify-start overflow-hidden bg-gray-900 text-white transition-[flex-basis] duration-500 md:flex',
                        m ? 'md:basis-[25vw]' : 'md:basis-0'
                      ),
                      children: (0, j.jsx)('div', {
                        className: 'w-[25vw] min-w-[25vw]',
                        children: e.metadataRenderer(f),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var ns = (0, E.vU)({
        showImage: {
          id: 'imageViewer.showImage',
          defaultMessage: 'Show Image',
          description: 'Button to show the image in a modal',
        },
        closeModal: {
          id: 'imageViewer.closeModal',
          defaultMessage: 'Close Modal',
          description: 'Button to close the modal',
        },
        downloadImage: {
          id: 'imageViewer.downloadImage',
          defaultMessage: 'Download Image',
          description: 'Button to download the image',
        },
        toggleSidebar: {
          id: 'imageViewer.toggleSidebar',
          defaultMessage: 'Toggle Sidebar',
          description: 'Button to toggle the sidebar',
        },
        nextImage: {
          id: 'imageViewer.nextImage',
          defaultMessage: 'Next Image',
          description: 'Button to go to the next image',
        },
        previousImage: {
          id: 'imageViewer.previousImage',
          defaultMessage: 'Previous Image',
          description: 'Button to go to the previous image',
        },
      });
      function nr() {
        var e = (0, M._)(['grid gap-2\n', '']);
        return (
          (nr = function () {
            return e;
          }),
          e
        );
      }
      function no(e) {
        var t,
          a = e.messages,
          i = (0, w._)(a, 2),
          n = i[0],
          s = i[1],
          r = e4(n.message),
          o = e7(),
          l = eR(),
          d = a.some(function (e) {
            return l.has(e.message.id);
          }),
          c = null;
        null != s &&
          'multimodal_text' === s.message.content.content_type &&
          (c = s.message.content.parts.filter(function (e) {
            return 'object' == typeof e && 'asset_pointer' in e;
          }));
        var m = u.Running,
          x = ng.creatingImages;
        return (
          null != c
            ? ((m = u.Finished), (x = o ? void 0 : ng.finishedCreating), (t = { numImages: c.length }))
            : null != s
              ? ((m = u.Error), (x = ng.errorCreating))
              : r && ((m = u.Stopped), (x = ng.stopped)),
          (0, j.jsxs)(j.Fragment, {
            children: [
              o
                ? (0, j.jsx)(e8, {
                    conversationMessages: a,
                    icon: eX,
                    status: m,
                    displayMessage: x,
                    estimatedToolDurationMs: 13e3,
                    animationLoopDurationMs: 4e3,
                  })
                : (0, j.jsx)(iw, {
                    isComplete: null != s || r,
                    children: (0, j.jsx)(iM, {
                      icon: (0, j.jsx)(eE.ql, { className: 'h-[34px] w-[34px]' }),
                      title: 'DALL\xb7E 3',
                      subtitle: (0, j.jsx)(ew.Z, (0, b._)((0, k._)({}, x), { values: t })),
                    }),
                  }),
              null != c && c.length > 0 && !d && (0, j.jsx)(nl, { imageAssets: c }),
            ],
          })
        );
      }
      function nl(e) {
        var t,
          a,
          i,
          n = e.imageAssets,
          s = function () {
            ic.m9.logEvent('chatgpt_dalle_image_view_full'), P.A.logEvent(R.M.dalledImageViewFull);
          },
          r = (0, F.Z)(),
          o = (0, w._)((0, _.useState)(!1), 2),
          l = o[0],
          d = o[1];
        (0, _.useEffect)(function () {
          d(!0);
        }, []);
        var c = tv(n);
        function u(e) {
          return m.apply(this, arguments);
        }
        function m() {
          return (m = (0, et._)(function (e) {
            var t, a, i, n;
            return (0, en.Jh)(this, function (s) {
              switch (s.label) {
                case 0:
                  var r, o, l;
                  return (
                    (r =
                      null !==
                        (i =
                          null === (t = e.metadata) || void 0 === t
                            ? void 0
                            : null === (a = t.dalle) || void 0 === a
                              ? void 0
                              : a.prompt) && void 0 !== i
                        ? i
                        : ''),
                    (o = (0, i7.Z)(new Date(), 'yyyy-MM-dd HH.mm.ss')),
                    (l = r.slice(0, 150)).endsWith('.') && (l = l.slice(0, -1)),
                    (n = 'DALL\xb7E '.concat(o, ' - ').concat(l, '.png')),
                    [
                      4,
                      (function (e, t) {
                        return nx.apply(this, arguments);
                      })(e.url, n),
                    ]
                  );
                case 1:
                  return (
                    s.sent(), ic.m9.logEvent('chatgpt_dalle_image_download'), P.A.logEvent(R.M.dalledImageDownload), [2]
                  );
              }
            });
          })).apply(this, arguments);
        }
        var x = (a = (t = n[0]).width) > (i = t.height) ? f.WIDE : a < i ? f.TALL : f.SQUARE;
        return (0, j.jsx)(nm, {
          $numItems: c.length,
          className: (0, C.default)('my-1 transition-opacity duration-300', l ? 'opacity-100' : 'opacity-0'),
          children: c.map(function (e, t) {
            var a,
              i,
              n,
              o = e.isLoading,
              l = e.data,
              d = e.error;
            if (o)
              return (0, j.jsx)(
                nc,
                { shape: x, bgClassName: 'animate-pulse', bgStyle: { animationDelay: ''.concat(200 * t, 'ms') } },
                t
              );
            if (null != d || (null == l ? void 0 : l.url) == null)
              return (0, j.jsx)(
                nc,
                {
                  className: 'text-sm text-gray-500',
                  shape: x,
                  children: (0, j.jsxs)('div', {
                    className: 'flex min-h-full flex-col items-center justify-center gap-3 px-4 pb-5',
                    children: [
                      (0, j.jsx)(T.bcx, { className: 'icon-sm self-center text-gray-400' }),
                      r.formatMessage(ng.imageLoadError),
                    ],
                  }),
                },
                t
              );
            var m = (0, b._)((0, k._)({}, l), {
              alt:
                null !==
                  (n =
                    null == l
                      ? void 0
                      : null === (a = l.metadata) || void 0 === a
                        ? void 0
                        : null === (i = a.dalle) || void 0 === i
                          ? void 0
                          : i.prompt) && void 0 !== n
                  ? n
                  : '',
            });
            return (0, j.jsx)(
              'div',
              {
                className: 'flex',
                children: (0, j.jsx)(nn, {
                  image: m,
                  images: c
                    .filter(function (e) {
                      return null != e.data;
                    })
                    .map(function (e) {
                      var t,
                        a,
                        i,
                        n = e.data;
                      return (0, b._)((0, k._)({}, n), {
                        alt:
                          null !==
                            (i =
                              null === (t = n.metadata) || void 0 === t
                                ? void 0
                                : null === (a = t.dalle) || void 0 === a
                                  ? void 0
                                  : a.prompt) && void 0 !== i
                            ? i
                            : '',
                      });
                    }),
                  metadataRenderer: function (e) {
                    return (0, j.jsx)(nd, { image: e });
                  },
                  onDownload: u,
                  onOpen: s,
                  children: (0, j.jsx)(nu, {
                    image: m,
                    shape: x,
                    onDownload: function () {
                      return u(m);
                    },
                    bgClassName: 'animate-pulse',
                    bgStyle: { animationDelay: ''.concat(200 * t, 'ms') },
                  }),
                }),
              },
              t
            );
          }),
        });
      }
      function nd(e) {
        var t,
          a,
          i = e.image,
          n = (0, F.Z)(),
          s = (0, w._)((0, _.useState)(!1), 2),
          r = s[0],
          o = s[1];
        return (0, j.jsxs)('div', {
          className: 'flex flex-col items-start gap-3 p-6',
          children: [
            (0, j.jsx)('div', {
              className: 'text-sm text-gray-300 sm:text-base',
              children: n.formatMessage(ng.imageViewerMetadataTitle),
            }),
            (0, j.jsx)('div', {
              className: 'max-h-32 overflow-y-auto text-sm md:max-h-[80vh] md:text-lg',
              children:
                null === (t = i.metadata) || void 0 === t
                  ? void 0
                  : null === (a = t.dalle) || void 0 === a
                    ? void 0
                    : a.prompt,
            }),
            (0, j.jsxs)(es.z, {
              color: 'dark',
              onClick: function () {
                var e,
                  t,
                  a,
                  n =
                    null !==
                      (a =
                        null === (e = i.metadata) || void 0 === e
                          ? void 0
                          : null === (t = e.dalle) || void 0 === t
                            ? void 0
                            : t.prompt) && void 0 !== a
                      ? a
                      : '';
                try {
                  navigator.clipboard.writeText(n),
                    o(!0),
                    setTimeout(function () {
                      o(!1);
                    }, 2e3);
                } catch (e) {
                  console.error('Error copying to clipboard', e);
                }
              },
              disabled: r,
              className: 'hidden sm:block',
              children: [
                (0, j.jsx)(T.C3L, { className: 'h-5 w-5' }),
                r
                  ? n.formatMessage(ng.imageViewerMetadataCopyButtonCopied)
                  : n.formatMessage(ng.imageViewerMetadataCopyButton),
              ],
            }),
          ],
        });
      }
      function nc(e) {
        var t = e.children,
          a = e.shape,
          i = e.className,
          n = e.bgClassName,
          s = e.bgStyle;
        return (0, j.jsxs)('div', {
          className: (0, C.default)(
            'relative overflow-hidden',
            i,
            a === f.WIDE && 'aspect-[7/4]',
            a === f.SQUARE && 'aspect-square max-w-[400px]',
            a === f.TALL && 'aspect-[4/7] max-w-xs'
          ),
          children: [
            (0, j.jsx)('div', {
              className: (0, C.default)('pointer-events-none absolute inset-0 bg-gray-100', n),
              style: s,
            }),
            (0, j.jsx)('div', { className: 'relative h-full', children: t }),
          ],
        });
      }
      function nu(e) {
        var t = e.image,
          a = e.shape,
          i = e.onDownload,
          n = e.bgClassName,
          s = e.bgStyle,
          r = (0, F.Z)(),
          o = t.url,
          l = t.width,
          d = t.height;
        function c() {
          return (c = (0, et._)(function (e) {
            return (0, en.Jh)(this, function (t) {
              return e.stopPropagation(), i(), [2];
            });
          })).apply(this, arguments);
        }
        return (0, j.jsxs)(nc, {
          shape: a,
          className: 'group/dalle-image',
          bgClassName: n,
          bgStyle: s,
          children: [
            (0, j.jsx)(tp, { alt: r.formatMessage(ng.generatedImageAltText), src: o, width: l, height: d }),
            (0, j.jsx)('div', {
              className:
                'pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]',
            }),
            (0, j.jsx)('div', {
              className: 'invisible absolute left-1 top-1 group-hover/dalle-image:visible',
              children: (0, j.jsx)('button', {
                className: 'flex h-6 w-6 items-center justify-center rounded bg-black/50',
                onClick: function (e) {
                  return c.apply(this, arguments);
                },
                children: (0, j.jsx)(I.Sg, { className: 'icon-sm text-white' }),
              }),
            }),
          ],
        });
      }
      ((o = f || (f = {})).WIDE = '1792x1024'), (o.SQUARE = '1024x1024'), (o.TALL = '1024x1792');
      var nm = N.Z.div(nr(), function (e) {
        return 1 === e.$numItems ? 'grid-cols-1' : 'grid-cols-2';
      });
      function nx() {
        return (nx = (0, et._)(function (e, t) {
          var a, i, n, s;
          return (0, en.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                ((a = new Image()).crossOrigin = 'anonymous'), (a.src = e), (r.label = 1);
              case 1:
                return (
                  r.trys.push([1, 3, , 4]),
                  [
                    4,
                    new Promise(function (e, t) {
                      (a.onload = function () {
                        e(null);
                      }),
                        (a.onerror = t);
                    }),
                  ]
                );
              case 2:
                return r.sent(), [3, 4];
              case 3:
                return console.error('Error downloading image', r.sent()), [2];
              case 4:
                if (
                  (((i = document.createElement('canvas')).width = a.naturalWidth),
                  (i.height = a.naturalHeight),
                  null == (n = i.getContext('2d')))
                )
                  return [2];
                return (
                  n.drawImage(a, 0, 0),
                  ((s = document.createElement('a')).href = i.toDataURL('image/png')),
                  (s.download = t),
                  s.click(),
                  i.remove(),
                  a.remove(),
                  s.remove(),
                  [2]
                );
            }
          });
        })).apply(this, arguments);
      }
      var ng = (0, E.vU)({
          creatingImages: {
            id: 'dalleMessage.creatingImages',
            defaultMessage: 'Creating images',
            description: 'Status message when DALL\xb7E is creating images',
          },
          stopped: {
            id: 'dalleMessage.stoppedV2',
            defaultMessage: 'Stopped creating images',
            description: 'Status message when DALL\xb7E was stopped by the user',
          },
          errorCreating: {
            id: 'dalleMessage.errorCreating',
            defaultMessage: 'Error creating images',
            description: 'Status message when DALL\xb7E failed to create images',
          },
          finishedCreating: {
            id: 'dalleMessage.finishedCreating',
            defaultMessage: 'Created {numImages, plural, =0 {images} one {image} other {# images}}',
            description: 'Status message when DALL\xb7E finished creating images',
          },
          generatedImageAltText: {
            id: 'dalleMessage.generatedImageAltText',
            defaultMessage: 'Generated by DALL\xb7E',
            description: 'Alt text for images generated by DALL\xb7E',
          },
          imageLoadError: {
            id: 'dalleMessage.imageLoadError',
            defaultMessage: 'Error loading image',
            description: 'Error message when an image fails to load',
          },
          imageViewerMetadataTitle: {
            id: 'dalleMessage.imageViewerMetadataTitle',
            defaultMessage: 'Prompt',
            description: 'Title for the prompt metadata in the image viewer',
          },
          imageViewerMetadataCopyButton: {
            id: 'dalleMessage.imageViewerMetadataCopyButton',
            defaultMessage: 'Copy',
            description: 'Copy button for the prompt metadata in the image viewer',
          },
          imageViewerMetadataCopyButtonCopied: {
            id: 'dalleMessage.imageViewerMetadataCopyButtonCopied',
            defaultMessage: 'Copied!',
            description: 'Copy button for the prompt metadata in the image viewer when the prompt is copied',
          },
        }),
        nh = a(20485);
      function nf(e) {
        return (
          e.status === A.RF.Done || e.status === A.RF.Timeout || e.status === A.RF.Error || e.status === A.RF.Cancelled
        );
      }
      function np(e) {
        var t,
          a,
          i,
          n,
          s,
          r,
          o,
          l,
          d,
          c,
          m,
          x,
          g,
          h = e.messages,
          f = e7(),
          v = (0, w._)(h, 2),
          y =
            ((t = v[0]),
            (d =
              null !==
                (o =
                  null === (i = null == (a = v[1]) ? void 0 : a.message.metadata) || void 0 === i
                    ? void 0
                    : null === (n = i.parallel_browse) || void 0 === n
                      ? void 0
                      : n.frontend_info.sub_agent_infos) && void 0 !== o
                ? o
                : null === (s = t.message.metadata) || void 0 === s
                  ? void 0
                  : null === (r = s.parallel_browse) || void 0 === r
                    ? void 0
                    : r.frontend_info.sub_agent_infos),
            (c = 0),
            (m = 0),
            null != d &&
              ((c = (l = Object.values(
                Object.values(d).reduce(function (e, t) {
                  var a = t.task_index;
                  return null == e[a] && (e[a] = []), e[a].push(t), e;
                }, {})
              )
                .map(function (e) {
                  return (0, b._)((0, k._)({}, e[0]), {
                    status: (function (e) {
                      var t = e.map(function (e) {
                          return e.status;
                        }),
                        a = [A.RF.Starting, A.RF.Running, A.RF.Done, A.RF.Error, A.RF.Timeout, A.RF.Cancelled],
                        i = !0,
                        n = !1,
                        s = void 0;
                      try {
                        for (var r, o = a[Symbol.iterator](); !(i = (r = o.next()).done); i = !0) {
                          var l = (function () {
                            var e = r.value;
                            if (
                              t.some(function (t) {
                                return t === e;
                              })
                            )
                              return { v: e };
                          })();
                          if ('object' === (0, nh._)(l)) return l.v;
                        }
                      } catch (e) {
                        (n = !0), (s = e);
                      } finally {
                        try {
                          i || null == o.return || o.return();
                        } finally {
                          if (n) throw s;
                        }
                      }
                      return A.RF.Starting;
                    })(e),
                  });
                })
                .sort(function (e, t) {
                  return e.task_index - t.task_index;
                })).length),
              (m = l.filter(nf).length)),
            (x = p.Planning),
            e4(t.message) ? (x = p.Stopped) : null != a && (x = m === c ? p.Done : p.Running),
            { status: x, subAgentInfos: l, numTotalSubAgents: c, numCompletedSubAgents: m }),
          M = u.Running,
          C = nv.creatingPlan;
        switch (y.status) {
          case p.Running:
            y.numTotalSubAgents > 0 && y.numCompletedSubAgents / y.numTotalSubAgents >= 0.75
              ? (C = nv.almostDone)
              : ((C = nv.running), (g = { numTasks: y.numTotalSubAgents }));
            break;
          case p.Done:
            (M = u.Finished), (C = f ? void 0 : nv.finished);
            break;
          case p.Stopped:
            (M = u.Stopped), (C = nv.cancelled);
        }
        var _ = y.status === p.Done || y.status === p.Stopped;
        return f
          ? (0, j.jsx)(e8, {
              conversationMessages: h,
              icon: eK,
              status: M,
              displayMessage: C,
              displayMessageValues: g,
              estimatedToolDurationMs: 3e4,
              animationLoopDurationMs: 3500,
            })
          : (0, j.jsx)(iw, {
              isComplete: _,
              children: (0, j.jsx)(iM, {
                icon: _
                  ? (0, j.jsx)(eE.aS, { className: 'icon-2xl' })
                  : (0, j.jsx)(eE.Wp, { className: 'icon-2xl text-brand-purple' }),
                title: (0, j.jsx)(ew.Z, (0, k._)({}, _ ? nv.finishedTitle : nv.inProgressTitle)),
                subtitle: (0, j.jsx)(ew.Z, (0, b._)((0, k._)({}, C), { values: g })),
              }),
            });
      }
      ((l = p || (p = {})).Planning = 'planning'),
        (l.Running = 'running'),
        (l.Done = 'done'),
        (l.Stopped = 'stopped'),
        (0, E.vU)({
          planning: {
            id: 'legacyParallelBrowsingMessage.planning',
            defaultMessage: 'Creating a browsing plan...',
            description: 'Status message when browsing is being planned',
          },
          running: {
            id: 'legacyParallelBrowsingMessage.running',
            defaultMessage: 'Executing browsing plan. Check back again in a few minutes. ({numCompleted}/{numTotal})',
            description: 'Status message when browsing is in progress',
          },
          done: {
            id: 'legacyParallelBrowsingMessage.done',
            defaultMessage: 'Finished browsing',
            description: 'Status message when browsing is finished',
          },
          stopped: {
            id: 'legacyParallelBrowsingMessage.stopped',
            defaultMessage: 'Stopped browsing',
            description: 'Status message when browsing was stopped',
          },
          subAgentStarting: {
            id: 'legacyParallelBrowsingMessage.subAgent.starting',
            defaultMessage: 'Waiting to start',
            description: 'Status when a browsing task is waiting to start',
          },
          subAgentRunning: {
            id: 'legacyParallelBrowsingMessage.subAgent.running',
            defaultMessage: 'In progress',
            description: 'Status when a browsing task is in progress',
          },
          subAgentDone: {
            id: 'legacyParallelBrowsingMessage.subAgent.done',
            defaultMessage: 'Completed',
            description: 'Status when a browsing task is complete',
          },
          subAgentFailed: {
            id: 'legacyParallelBrowsingMessage.subAgent.failed',
            defaultMessage: 'Could not complete',
            description: 'Status when a browsing task failed to complete',
          },
        });
      var nv = (0, E.vU)({
          creatingPlan: {
            id: 'parallelBrowsingMessage.creatingPlanV2',
            defaultMessage: 'Making a research plan',
            description: 'Status message when browsing is being planned',
          },
          running: {
            id: 'parallelBrowsingMessage.running_2',
            defaultMessage: 'Visiting {numTasks, plural, one {# site} other {# sites}}',
            description: 'Status message when browsing is visiting sites',
          },
          almostDone: {
            id: 'parallelBrowsingMessage.almostDone',
            defaultMessage: 'Almost done',
            description: 'Status message when browsing is almost done visiting sites',
          },
          finished: {
            id: 'parallelBrowsingMessage.finishedV2',
            defaultMessage: 'Research complete',
            description: 'Status message when browsing is finished',
          },
          cancelled: {
            id: 'parallelBrowsingMessage.cancelledV2',
            defaultMessage: 'Stopped doing research',
            description: 'Status message when browsing was cancelled',
          },
          inProgressTitle: {
            id: 'parallelBrowsingMessage.inProgressTitleV3',
            defaultMessage: 'Researching...',
            description: 'Title when browsing is in progress',
          },
          finishedTitle: {
            id: 'parallelBrowsingMessage.finishedTitleV2',
            defaultMessage: 'Finished researching',
            description: 'Title when browsing is finished',
          },
        }),
        ny = a(96251),
        nk = a(40803);
      function nb() {
        var e = (0, M._)(['grid gap-4\n', '']);
        return (
          (nb = function () {
            return e;
          }),
          e
        );
      }
      var nw = (0, E.vU)({
        generatedImage: {
          id: 'pluginDisplayParams.generatedImage',
          defaultMessage: 'Generated by plugin',
          description: 'Description text for an image that was generated by a plugin',
        },
      });
      function nM(e) {
        var t,
          a,
          i,
          n = e.plugin,
          s = e.pluginMessage,
          r = e.toolMessage;
        if (null != n && 'plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b' !== n.id) return null;
        var o = v.WIDE;
        if ('text' === s.content.content_type)
          try {
            (null ==
            (t = (function (e) {
              var t = !0,
                a = !1,
                i = void 0;
              try {
                for (var n, s = ['', '}', '"}', ']}', '"]}'][Symbol.iterator](); !(t = (n = s.next()).done); t = !0) {
                  var r = n.value,
                    o = e.trimEnd().endsWith(',') ? e.trimEnd().slice(0, -1) : e;
                  try {
                    return { result: JSON.parse(o + r), isComplete: '' === r };
                  } catch (e) {}
                }
              } catch (e) {
                (a = !0), (i = e);
              } finally {
                try {
                  t || null == s.return || s.return();
                } finally {
                  if (a) throw i;
                }
              }
              return { result: JSON.parse(e), isComplete: !1 };
            })(s.content.parts[0]).result)
              ? void 0
              : t.image_shape) != null && (o = t.image_shape);
          } catch (e) {}
        var l = !1;
        if (null != r) {
          if ('text' === r.content.content_type) {
            try {
              a = JSON.parse(r.content.parts[0]);
            } catch (e) {}
            if ((null == a ? void 0 : a.images) != null) return (0, j.jsx)(nC, { images: a.images, gridItemShape: o });
          }
          l = !0;
        }
        return (null == t ? void 0 : t.prompts) != null
          ? (0, j.jsx)(nj, {
              numItems: null !== (i = null == t ? void 0 : t.n) && void 0 !== i ? i : Math.max(t.prompts.length, 1),
              prompts: t.prompts,
              gridItemShape: o,
              showErrorState: l || e4(s),
            })
          : null;
      }
      function nj(e) {
        for (var t = e.numItems, a = e.prompts, i = e.gridItemShape, n = e.showErrorState, s = [], r = 0; r < t; r++) {
          var o = a[r];
          s.push(
            (0, j.jsx)(
              n_,
              {
                className: (0, C.default)('text-sm', n && 'text-gray-500'),
                shape: i,
                bgColor: n ? 'medium' : null == o ? 'dark' : 'light',
                children: (0, j.jsx)(nk.default, {
                  className: 'hide-scrollbar h-full',
                  followButtonClassName: 'hidden',
                  children: (0, j.jsx)('div', {
                    className: 'flex min-h-full flex-col items-center justify-center gap-3 px-4 pb-5',
                    children: n
                      ? (0, j.jsx)(T.bcx, { className: 'icon-sm self-center text-gray-400' })
                      : (0, j.jsx)(t6.Z, { className: 'h-4 w-4 self-center' }),
                  }),
                }),
              },
              r
            )
          );
        }
        return (0, j.jsx)(nN, { $numItems: t, children: s });
      }
      function nC(e) {
        var t = e.images,
          a = e.gridItemShape;
        return (0, j.jsx)(nN, {
          $numItems: t.length,
          children: t.map(function (e, t) {
            return (0, j.jsx)(nT, { imageUrl: e.url, shape: a }, t);
          }),
        });
      }
      function n_(e) {
        var t = e.children,
          a = e.shape,
          i = e.className,
          n = e.bgColor,
          s = void 0 === n ? 'light' : n;
        return (0, j.jsxs)('div', {
          className: (0, C.default)(
            'relative overflow-hidden rounded',
            i,
            a === v.WIDE && 'aspect-[7/4]',
            a === v.SQUARE && 'aspect-square max-w-[400px]',
            a === v.TALL && 'aspect-[4/7] max-w-xs'
          ),
          children: [
            (0, j.jsx)('div', {
              className: (0, C.default)(
                'pointer-events-none absolute inset-0 blur-xl',
                'light' === s && 'bg-black/[.04]',
                'medium' === s && 'bg-black/[.08]',
                'dark' === s && 'bg-black/[.12]'
              ),
            }),
            t,
          ],
        });
      }
      function nT(e) {
        var t = e.imageUrl,
          a = e.shape,
          i = (0, F.Z)();
        return (0, j.jsx)(n_, {
          shape: a,
          children: (0, j.jsx)('a', {
            href: t,
            target: '_blank',
            rel: 'noreferrer',
            children: (0, j.jsx)('img', { src: t, alt: i.formatMessage(nw.generatedImage) }),
          }),
        });
      }
      ((d = v || (v = {})).WIDE = 'wide'), (d.SQUARE = 'square'), (d.TALL = 'tall');
      var nN = N.Z.div(nb(), function (e) {
          return 1 === e.$numItems ? 'grid-cols-1' : 'grid-cols-2';
        }),
        nI = a(96096),
        nS = _.memo(function (e) {
          var t,
            a = e.clientThreadId,
            i = e.messages,
            n = (0, w._)(i, 2),
            s = n[0],
            r = n[1],
            o = (0, Y.i)(a),
            l = (0, z.Lx)(s.message.recipient),
            d = o.find(function (e) {
              return e.namespace === (null == l ? void 0 : l.namespace);
            }),
            c = null == d ? void 0 : d.manifest.name_for_human,
            u = e4(s.message),
            m = null != c ? (0, j.jsx)('b', { children: c }) : 'unknown plugin',
            x =
              null != r
                ? (0, j.jsx)('div', {
                    children: (0, j.jsx)(ew.Z, (0, b._)((0, k._)({}, nF.used), { values: { pluginName: m } })),
                  })
                : u
                  ? (0, j.jsx)('div', {
                      children: (0, j.jsx)(ew.Z, (0, b._)((0, k._)({}, nF.triedToUse), { values: { pluginName: m } })),
                    })
                  : (0, j.jsx)('div', {
                      children: (0, j.jsx)(ew.Z, (0, b._)((0, k._)({}, nF.using), { values: { pluginName: m } })),
                    });
          return (
            d && ((0, ny.cf)(d) ? (t = (0, j.jsx)(nI.nA, {})) : 'approved' !== d.status && (t = (0, j.jsx)(nI.uM, {}))),
            (0, j.jsxs)(j.Fragment, {
              children: [
                (0, j.jsx)(am, {
                  isComplete: null != r || u,
                  results: (0, j.jsx)(nP, {
                    pluginName: null != c ? c : 'unknown plugin',
                    pluginMessage: s,
                    toolMessage: r,
                  }),
                  children: (0, j.jsxs)('div', { className: 'flex items-center gap-3', children: [x, t] }),
                }),
                null != d &&
                  (0, j.jsx)(nM, { plugin: d, pluginMessage: s.message, toolMessage: null == r ? void 0 : r.message }),
              ],
            })
          );
        });
      function nP(e) {
        var t = e.pluginName,
          a = e.pluginMessage,
          i = e.toolMessage,
          n = (0, F.Z)(),
          s = (0, z.RR)(a.message),
          r = i ? (0, z.RR)(i.message) : null;
        try {
          (s = JSON.stringify(JSON.parse(s), null, 2)), null != r && (r = JSON.stringify(JSON.parse(r), null, 2));
        } catch (e) {}
        var o = (null == i ? void 0 : i.message.author.name) === 'plugin_service';
        return (0, j.jsxs)('div', {
          className: 'my-3 flex max-w-full flex-col gap-3',
          children: [
            (0, j.jsx)(nR, {
              title: n.formatMessage(nF.requestTo, { pluginName: t }),
              infoTooltip: a.message.recipient,
              children: s,
            }),
            null != r &&
              (0, j.jsx)(nR, {
                title: o ? n.formatMessage(nF.error) : n.formatMessage(nF.responseFrom, { pluginName: t }),
                infoTooltip: a.message.recipient,
                children: (0, j.jsx)('span', { className: (0, C.default)(o && 'text-red-500'), children: r }),
              }),
          ],
        });
      }
      function nR(e) {
        var t = e.title,
          a = e.infoTooltip,
          i = e.children;
        return (0, j.jsx)(ep, {
          title: (0, j.jsx)('span', { className: 'uppercase', children: t }),
          headerDecoration:
            void 0 !== a
              ? (0, j.jsx)(t3.u, { label: a, children: (0, j.jsx)(T.H33, { className: 'icon-sm text-white/50' }) })
              : void 0,
          shouldWrapCode: !0,
          className: 'w-full text-xs text-white/80',
          children: i,
        });
      }
      var nF = (0, E.vU)({
          used: { id: 'PluginMessage.used', description: 'Used plugin text', defaultMessage: 'Used {pluginName}' },
          triedToUse: {
            id: 'PluginMessage.triedToUse',
            description: 'Tried to use plugin text',
            defaultMessage: 'Tried to use {pluginName}',
          },
          using: {
            id: 'PluginMessage.using',
            description: 'Using plugin text',
            defaultMessage: 'Using {pluginName}...',
          },
          requestTo: {
            id: 'ResultsSection.requestTo',
            description: 'Request to plugin title',
            defaultMessage: 'Request to {pluginName}',
          },
          responseFrom: {
            id: 'ResultsSection.responseFrom',
            description: 'Response from plugin title',
            defaultMessage: 'Response from {pluginName}',
          },
          error: { id: 'ResultsSection.error', description: 'Error title', defaultMessage: 'Error' },
        }),
        nE = a(94750);
      function nA() {
        var e = (0, M._)(['flex flex-grow flex-col max-w-full gap-3 gizmo:gap-0']);
        return (
          (nA = function () {
            return e;
          }),
          e
        );
      }
      function nL(e) {
        for (var t = [], a = 0; a < e.length; a++) {
          var i = e[a],
            n = (0, z.rH)(i.message),
            s = null == e ? void 0 : e[a - 1],
            r = null != s && ((0, z.lD)(s.message) || (0, z.qs)(i.message)),
            o = n === z.Cs.Text && (0, z.RR)(i.message);
          if (n !== z.Cs.System) {
            if (n === z.Cs.ModelEditableContext) continue;
            if (n === z.Cs.UserModelBio || n === z.Cs.UserModelBioTool) t.push({ type: y.Debug, message: i });
            else if (n === z.Cs.Browsing || n === z.Cs.BrowseTool) {
              var l = t[t.length - 1];
              (null == l ? void 0 : l.type) === y.Browsing
                ? l.messages.push(i)
                : t.push({ type: y.Browsing, messages: [i] });
            } else if (n === z.Cs.RetrievalBrowsing || n === z.Cs.RetrievalBrowsingTool) {
              var d = t[t.length - 1];
              (null == d ? void 0 : d.type) === y.RetrievalBrowsing
                ? d.messages.push(i)
                : t.push({ type: y.RetrievalBrowsing, messages: [i] });
            } else if (n === z.Cs.ParallelBrowsing || n === z.Cs.ParallelBrowsingTool) {
              var c = t[t.length - 1];
              (null == c ? void 0 : c.type) === y.ParallelBrowsing
                ? c.messages.push(i)
                : t.push({ type: y.ParallelBrowsing, messages: [i] });
            } else if (n === z.Cs.Plugin || n === z.Cs.PluginTool) {
              var u = t[t.length - 1];
              n === z.Cs.PluginTool && (null == u ? void 0 : u.type) === y.Plugin
                ? u.messages.push(i)
                : t.push({ type: y.Plugin, messages: [i] });
            } else if (n === z.Cs.JITPlugin || n === z.Cs.JITPluginTool) {
              var m = t[t.length - 1];
              (null == m ? void 0 : m.type) === y.JITPlugin
                ? m.messages.push(i)
                : t.push({ type: y.JITPlugin, messages: [i] });
            } else if (n === z.Cs.Dalle || n === z.Cs.DalleTool) {
              var x = t[t.length - 1];
              n === z.Cs.DalleTool && (null == x ? void 0 : x.type) === y.Dalle
                ? x.messages.push(i)
                : t.push({ type: y.Dalle, messages: [i] });
            } else if (n === z.Cs.Code) t.push({ type: y.Code, message: i });
            else if (n === z.Cs.CodeExecutionOutput) t.push({ type: y.CodeExecutionOutput, message: i });
            else if (n === z.Cs.GizmoEditor) {
              var g = t[t.length - 1];
              (null == g ? void 0 : g.type) === y.GizmoEditor
                ? g.messages.push(i)
                : t.push({ type: y.GizmoEditor, messages: [i] });
            } else if (r && null != o) {
              var h = t.pop();
              (null == h ? void 0 : h.type) === y.MultiText
                ? (h.messages.push(i), t.push(h))
                : (null == h ? void 0 : h.type) === y.Text && t.push({ type: y.MultiText, messages: [h.message, i] });
            } else t.push({ type: y.Text, message: i });
          }
        }
        return t;
      }
      function nD(e) {
        var t = e.groupedMessagesToRender,
          a = e.allGroupedMessages,
          i = e.clientThreadId,
          n = e.isEditing,
          s = e.isCompletion,
          r = e.isCompletionRequestInProgress,
          o = e.isFinalTurn,
          l = e.hasActiveRequest,
          d = e.handleExitEdit,
          c = e.onChangeItemInView,
          u = e.onRequestMoreCompletions,
          m = e.onRequestCompletion,
          x = e7(),
          g = (0, Z.hz)().has(e6.L0.OldJitPluginsUI),
          h = (0, nE.N)().showDebugConversationTurns,
          f = t.map(function (e, f) {
            var p = f === a.length - 1;
            switch (e.type) {
              case y.Text:
              case y.MultiText:
                for (var v, k = [], b = [], w = f - 1; w >= 0; w--) {
                  var M = t[w];
                  if (M.type === y.Browsing) {
                    k = M.messages;
                    break;
                  }
                  if (M.type === y.Code || M.type === y.CodeExecutionOutput) b.unshift(M.message);
                  else break;
                }
                if (e.type === y.Text)
                  return (0, j.jsx)(
                    iW,
                    {
                      className: 'min-h-[20px]',
                      message: e.message,
                      isEditing: n,
                      format: s,
                      isCompletionInProgress: p && r,
                      clientThreadId: i,
                      onChangeItemInView: c,
                      onRequestCompletion: m,
                      onExitEdit: d,
                      disabled: l,
                      isCompletion: s,
                      onRequestMoreCompletions: u,
                      isResponseToPluginMessage:
                        (null === (v = t[f - 1]) || void 0 === v ? void 0 : v.type) === y.Plugin,
                      prevBrowsingMessages: k,
                      prevCodeMessages: b,
                    },
                    e.message.nodeId
                  );
                if (e.type === y.MultiText)
                  return (0, j.jsx)(
                    i2,
                    {
                      clientThreadId: i,
                      messages: e.messages,
                      isCompletionInProgress: p && r,
                      isCompletion: s,
                      onRequestMoreCompletions: u,
                      prevBrowsingMessages: k,
                      prevCodeMessages: b,
                    },
                    f
                  );
                return null;
              case y.Browsing:
              case y.RetrievalBrowsing:
                var C = e.messages[e.messages.length - 1],
                  _ = e.type === y.RetrievalBrowsing;
                return x
                  ? (0, j.jsx)(
                      i5,
                      {
                        messages: e.messages,
                        clientThreadId: i,
                        isLastMessageInTurn: p,
                        isRequestActive: l,
                        isRetrieval: _,
                      },
                      e.messages[0].nodeId
                    )
                  : (0, j.jsx)(
                      iN,
                      {
                        messages: e.messages,
                        isComplete: !o || !p || !l || e4(C.message),
                        isRetrieval: e.type === y.RetrievalBrowsing,
                      },
                      e.messages[0].nodeId
                    );
              case y.ParallelBrowsing:
                return (0, j.jsx)(np, { messages: e.messages }, e.messages[0].nodeId);
              case y.Code:
                var T,
                  N,
                  I = a[f + 1],
                  S = null != I && I.type === y.CodeExecutionOutput ? I.message : void 0;
                return x
                  ? (0, j.jsx)(
                      ab,
                      { messages: null != S ? [e.message, S] : [e.message], isRequestActive: l },
                      e.message.nodeId
                    )
                  : (0, j.jsx)(
                      ay,
                      {
                        clientThreadId: i,
                        message: e.message,
                        outputMessage: S,
                        isComplete:
                          !o ||
                          !p ||
                          !l ||
                          ((null ==
                          (N =
                            null === (T = null == S ? void 0 : S.message.metadata) || void 0 === T
                              ? void 0
                              : T.aggregate_result)
                            ? void 0
                            : N.status) !== void 0 &&
                            (null == N ? void 0 : N.status) !== 'running') ||
                          e4(e.message.message),
                      },
                      e.message.nodeId
                    );
              case y.CodeExecutionOutput:
                return (0, j.jsx)(al.ZP, { message: e.message, isCollapsed: !1 }, e.message.nodeId);
              case y.Plugin:
                return (0, j.jsx)(nS, { clientThreadId: i, messages: e.messages }, e.messages[0].nodeId);
              case y.JITPlugin:
                return g
                  ? (0, j.jsx)(nS, { clientThreadId: i, messages: e.messages }, e.messages[0].nodeId)
                  : (0, j.jsx)(
                      ti,
                      { messages: e.messages, clientThreadId: i, isLastTurnInConversation: o, onRequestCompletion: m },
                      e.messages[0].nodeId
                    );
              case y.Dalle:
                return (0, j.jsx)(no, { messages: e.messages }, e.messages[0].nodeId);
              case y.GizmoEditor:
                return (0, j.jsx)(tM, { messages: e.messages }, e.messages[0].nodeId);
              case y.Debug:
                if (!h) return null;
                return (0, j.jsx)(tT, { message: e.message }, e.message.nodeId);
              default:
                return null;
            }
          });
        return (0, j.jsx)(nZ, { children: f });
      }
      ((c = y || (y = {}))[(c.Text = 0)] = 'Text'),
        (c[(c.MultiText = 1)] = 'MultiText'),
        (c[(c.Browsing = 2)] = 'Browsing'),
        (c[(c.Code = 3)] = 'Code'),
        (c[(c.CodeExecutionOutput = 4)] = 'CodeExecutionOutput'),
        (c[(c.Plugin = 5)] = 'Plugin'),
        (c[(c.JITPlugin = 6)] = 'JITPlugin'),
        (c[(c.RetrievalBrowsing = 7)] = 'RetrievalBrowsing'),
        (c[(c.ParallelBrowsing = 8)] = 'ParallelBrowsing'),
        (c[(c.Dalle = 9)] = 'Dalle'),
        (c[(c.GizmoEditor = 10)] = 'GizmoEditor'),
        (c[(c.Debug = 11)] = 'Debug');
      var nZ = N.Z.div(nA()),
        nB = a(54655);
      function nq() {
        var e = (0, M._)([
          'p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2 flex-wrap justify-center',
        ]);
        return (
          (nq = function () {
            return e;
          }),
          e
        );
      }
      function nz() {
        var e = (0, M._)([
          'flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm',
        ]);
        return (
          (nz = function () {
            return e;
          }),
          e
        );
      }
      function nU(e) {
        var t = e.clientThreadId,
          a = e.messageForRating,
          i = e.variantIds,
          n = e.conversationTurnMountTime,
          s = function (e) {
            var s,
              r,
              c = L.tQ.getTree(t),
              u = i[0] || '',
              m = (null == c ? void 0 : c.getConversationTurns(u)) || [],
              x = m[m.length - 1],
              g = (null == x ? void 0 : x.messages) || [],
              h = g[g.length - 1],
              f = (null == h ? void 0 : null === (s = h.message) || void 0 === s ? void 0 : s.id) || '',
              p = i[1] || '',
              v = (null == c ? void 0 : c.getConversationTurns(p)) || [],
              y = v[v.length - 1],
              k = (null == y ? void 0 : y.messages) || [],
              b = k[k.length - 1],
              w = (null == b ? void 0 : null === (r = b.message) || void 0 === r ? void 0 : r.id) || '';
            tc.ZP.submitMessageComparisonFeedback({
              feedback_version: d ? 'inline_guided_regen_feedback:a:1.0' : 'inline_regen_feedback:a:1.0',
              original_message_id: f,
              new_message_id: w,
              rating: 'none',
              conversation_id: L.tQ.getServerThreadId(t),
              text: '',
              tags: [],
              completion_comparison_rating: e,
              new_completion_placement: 'not-applicable',
              feedback_start_time: n,
              compare_step_start_time: n,
              new_completion_load_start_time: o,
              new_completion_load_end_time: l,
              frontend_submission_time: Date.now(),
              timezone_offset_min: new Date().getTimezoneOffset(),
            }),
              L.tQ.updateTree(t, function (t) {
                t.updateNodeMetadata(a.nodeId, { inlineComparisonRating: e });
              }),
              L.tQ.updateTree(t, function (e) {
                e.updateNodeMetadata(h.nodeId, { inlineComparisonRating: 'baseline' });
              });
          },
          r = (0, F.Z)(),
          o = (0, w._)(
            (0, _.useState)(function () {
              return null != a.message.create_time ? 1e3 * a.message.create_time : Date.now();
            }),
            1
          )[0],
          l = (0, w._)(
            (0, _.useState)(function () {
              return Date.now();
            }),
            1
          )[0],
          d = (0, Z.hz)().has(e6.L0.GuidedRegenerate);
        return (0, j.jsxs)(nV, {
          children: [
            (0, j.jsx)('div', {
              className: (0, C.default)('mr-4'),
              children: (0, j.jsx)(ew.Z, (0, k._)({}, nG.regenTitle)),
            }),
            (0, j.jsxs)(nO, {
              onClick: function () {
                return s('new');
              },
              title: r.formatMessage(nG.regenBetterLabel),
              children: [
                (0, j.jsx)(T.fmn, { className: 'icon-sm mr-1 flex-shrink-0' }),
                (0, j.jsx)('span', {
                  className: 'flex-shrink-0',
                  children: (0, j.jsx)(ew.Z, (0, k._)({}, nG.regenBetterText)),
                }),
              ],
            }),
            (0, j.jsxs)(nO, {
              onClick: function () {
                return s('original');
              },
              title: r.formatMessage(nG.regenWorseLabel),
              children: [
                (0, j.jsx)(T.oLd, { className: 'icon-sm mr-1 flex-shrink-0' }),
                (0, j.jsx)('span', {
                  className: 'flex-shrink-0',
                  children: (0, j.jsx)(ew.Z, (0, k._)({}, nG.regenWorseText)),
                }),
              ],
            }),
            (0, j.jsxs)(nO, {
              onClick: function () {
                return s('same');
              },
              title: r.formatMessage(nG.regenSameLabel),
              children: [
                (0, j.jsx)(nB.Ny3, {
                  className: 'icon-sm mr-1 flex-shrink-0 rounded-full border border-gray-400 dark:border-gray-300',
                }),
                (0, j.jsx)('span', {
                  className: 'flex-shrink-0',
                  children: (0, j.jsx)(ew.Z, (0, k._)({}, nG.regenSameText)),
                }),
              ],
            }),
            (0, j.jsx)(nO, {
              onClick: function () {
                L.tQ.updateTree(t, function (e) {
                  e.updateNodeMetadata(a.nodeId, { inlineComparisonRating: 'skip' });
                });
              },
              title: r.formatMessage(nG.regenSkipLabel),
              children: (0, j.jsx)(T.q5L, { className: 'icon-lg flex-shrink-0' }),
            }),
          ],
        });
      }
      var nO = N.Z.button(nq()),
        nV = N.Z.div(nz()),
        nG = (0, E.vU)({
          regenTitle: {
            id: 'ConversationTurnInlineFeedback.regenTitle',
            description: 'Title of the regeneration rating',
            defaultMessage: 'Was this response better or worse?',
          },
          regenBetterLabel: {
            id: 'ConversationTurnInlineFeedback.regenBetterLabel',
            description: 'Regeneration was better button label',
            defaultMessage: 'This response was better than the previous response',
          },
          regenBetterText: {
            id: 'ConversationTurnInlineFeedback.regenBetterText',
            description: 'Regeneration was better button text',
            defaultMessage: 'Better',
          },
          regenWorseLabel: {
            id: 'ConversationTurnInlineFeedback.regenWorseLabel',
            description: 'Regeneration was worse button label',
            defaultMessage: 'This response was worse than the previous response',
          },
          regenWorseText: {
            id: 'ConversationTurnInlineFeedback.regenWorseText',
            description: 'Regeneration was worse button text',
            defaultMessage: 'Worse',
          },
          regenSameLabel: {
            id: 'ConversationTurnInlineFeedback.regenSameLabel',
            description: 'Regeneration was Same button label',
            defaultMessage: 'This response was the same in quality',
          },
          regenSameText: {
            id: 'ConversationTurnInlineFeedback.regenSameText',
            description: 'Regeneration was Same button text',
            defaultMessage: 'Same',
          },
          regenSkipLabel: {
            id: 'ConversationTurnInlineFeedback.regenSkipLabel',
            description: 'Regeneration skip button label',
            defaultMessage: 'Skip this comparison',
          },
        }),
        nH = a(84844),
        nQ = a(88887),
        nW = a(84829),
        n$ = a(61888),
        nJ = a(95552),
        nY = a.n(nJ),
        nK = a(84056);
      function nX() {
        var e = (0, M._)([
          'relative flex w-full flex-col gap-1 bg-white cursor-pointer truncate rounded-lg border border-gray-300 text-left\nbg-white dark:bg-[#444654] py-4 px-5\nhover:border-[var(--avatar-color)]',
        ]);
        return (
          (nX = function () {
            return e;
          }),
          e
        );
      }
      function n0() {
        var e = (0, M._)(['text-sm text-token-text-tertiary']);
        return (
          (n0 = function () {
            return e;
          }),
          e
        );
      }
      function n9() {
        var e = (0, M._)(['flex gap-4 items-center mb-1']);
        return (
          (n9 = function () {
            return e;
          }),
          e
        );
      }
      function n1(e, t, a) {
        L.tQ.updateTree(e, function (e) {
          e.updateNodeMetadata(t, { inlineComparisonRating: a });
        });
      }
      function n2() {
        return (0, j.jsxs)('div', {
          className: 'mx-auto flex flex-col',
          children: [
            (0, j.jsx)('div', {
              className: 'text-center text-lg',
              children: (0, j.jsx)(ew.Z, (0, k._)({}, n7.responsePrompt)),
            }),
            (0, j.jsx)('div', {
              className: 'text-center text-sm text-token-text-tertiary',
              children: (0, j.jsx)(ew.Z, (0, k._)({}, n7.responsePromptExplanation)),
            }),
          ],
        });
      }
      function n5(e) {
        var t = function (e) {
            return o.showDebugConversationTurns
              ? (0, j.jsx)('div', {
                  className: 'text-sm uppercase text-red-500',
                  children: e === M ? 'Original' : 'New',
                })
              : null;
          },
          a = e.clientThreadId,
          i = e.variantIds,
          n = e.variantsInStreamInfo,
          s = e.avatarColor;
        (0, nW.ok)(2 === i.length);
        var r = (0, w._)(
            (0, _.useState)(function () {
              return Date.now();
            }),
            1
          )[0],
          o = (0, nE.N)(),
          l = (0, G.B$)(),
          d = (0, w._)(
            (0, _.useMemo)(
              function () {
                return 0.5 > nY()(i.join(''))() ? [0, 1] : [1, 0];
              },
              [i[0], i[1]]
            ),
            2
          ),
          c = d[0],
          u = d[1],
          m = c < u ? 'left' : 'right',
          x = 'left' === m ? 'right' : 'left',
          g = i[c],
          h = i[u],
          f = (0, L.Rz)(a, g),
          p = (0, L.Rz)(a, h),
          v = (0, L.uj)(a, f.id),
          y = (0, L.uj)(a, p.id),
          M = 'left' === m ? v : y,
          T = 'left' === m ? y : v,
          N = 'unskippable' === n.display_treatment,
          I = N ? 'unskippable_parallel_2_in_stream:a:1.0' : 'skippable_parallel_2_in_stream:a:1.0';
        (0, _.useEffect)(
          function () {
            return (
              nK.i.setState({ displayingSideBySideFeedback: !0, unskippable: N }),
              function () {
                nK.i.setState({ displayingSideBySideFeedback: !1, unskippable: !1 });
              }
            );
          },
          [N]
        ),
          (0, _.useEffect)(
            function () {
              return (0, nH.LW)(nQ.E, {
                requestCompletion: function () {
                  var e,
                    t,
                    i,
                    n,
                    s = null === (e = (0, n$.last)(M.messages)) || void 0 === e ? void 0 : e.completionSampleFinishTime,
                    o = null === (t = (0, n$.last)(T.messages)) || void 0 === t ? void 0 : t.completionSampleFinishTime;
                  tc.ZP.submitMessageComparisonFeedback({
                    feedback_version: I,
                    original_message_id:
                      null === (i = M.messages[M.messages.length - 1]) || void 0 === i ? void 0 : i.message.id,
                    new_message_id:
                      null === (n = T.messages[T.messages.length - 1]) || void 0 === n ? void 0 : n.message.id,
                    rating: 'none',
                    conversation_id: L.tQ.getServerThreadId(a),
                    text: '',
                    tags: [],
                    completion_comparison_rating: 'skip',
                    new_completion_placement: x,
                    feedback_start_time: r,
                    compare_step_start_time: r,
                    original_completion_load_start_time: r,
                    original_completion_load_end_time: null != s ? s : 0,
                    new_completion_load_start_time: r,
                    new_completion_load_end_time: null != o ? o : 0,
                    frontend_submission_time: Date.now(),
                    timezone_offset_min: new Date().getTimezoneOffset(),
                  });
                },
              });
            },
            [v, y, a, r, I, x, M.messages, T.messages]
          );
        var S = function (e) {
            var t,
              i,
              n,
              s,
              o = L.tQ.getTree(a).getLeafFromNode(e);
            L.tQ.setThreadCurrentLeafId(a, o.id);
            var l = (e === g) == ('left' === m),
              d = null === (t = (0, n$.last)(M.messages)) || void 0 === t ? void 0 : t.completionSampleFinishTime,
              c = null === (i = (0, n$.last)(T.messages)) || void 0 === i ? void 0 : i.completionSampleFinishTime;
            M.messages.length > 0 && n1(a, M.messages[M.messages.length - 1].nodeId, l ? 'original' : 'new'),
              T.messages.length > 0 && n1(a, T.messages[T.messages.length - 1].nodeId, l ? 'original' : 'new'),
              null != d &&
                null != c &&
                tc.ZP.submitMessageComparisonFeedback({
                  feedback_version: I,
                  original_message_id:
                    null === (n = M.messages[M.messages.length - 1]) || void 0 === n ? void 0 : n.message.id,
                  new_message_id:
                    null === (s = T.messages[T.messages.length - 1]) || void 0 === s ? void 0 : s.message.id,
                  rating: 'none',
                  conversation_id: L.tQ.getServerThreadId(a),
                  text: '',
                  tags: [],
                  completion_comparison_rating: l ? 'original' : 'new',
                  new_completion_placement: x,
                  feedback_start_time: r,
                  compare_step_start_time: r,
                  original_completion_load_start_time: r,
                  original_completion_load_end_time: d,
                  new_completion_load_start_time: r,
                  new_completion_load_end_time: c,
                  frontend_submission_time: Date.now(),
                  timezone_offset_min: new Date().getTimezoneOffset(),
                });
          },
          P = (0, G.Yk)(U.Cv.getRequestIdFromConversationTurn(v)),
          R = (0, G.Yk)(U.Cv.getRequestIdFromConversationTurn(y)),
          F = U.Cv.getRequestIdFromConversationTurn(v),
          E = (0, G.Yk)(F),
          A = U.Cv.getRequestIdFromConversationTurn(y),
          D = (0, G.Yk)(A),
          Z = (0, _.useMemo)(
            function () {
              return nL(v.messages);
            },
            [v.messages]
          ),
          B = (0, _.useMemo)(
            function () {
              return nL(y.messages);
            },
            [y.messages]
          );
        return (0, j.jsx)('div', {
          className: (0, C.default)(
            'relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]'
          ),
          children: (0, j.jsxs)('div', {
            className: 'relative mt-3 flex gap-1 md:gap-3',
            children: [
              (0, j.jsxs)(n3, {
                onClick: function () {
                  S(g);
                },
                children: [
                  (0, j.jsxs)(n4, {
                    children: [
                      (0, j.jsx)(ee, {
                        isCompletionRequestInProgress: P,
                        messages: v.messages,
                        clientThreadId: a,
                        isCompletion: sx(v),
                        avatarColor: s,
                        showInlineEmbeddedDisplay: !1,
                      }),
                      (0, j.jsx)(n6, {
                        children: (0, j.jsx)(
                          ew.Z,
                          (0, b._)((0, k._)({}, n7.responseNumber), { values: { responseIndex: 1 } })
                        ),
                      }),
                    ],
                  }),
                  (0, j.jsx)(
                    nD,
                    (0, b._)((0, k._)({}, e), {
                      groupedMessagesToRender: Z,
                      allGroupedMessages: Z,
                      isEditing: !1,
                      isCompletion: sx(v),
                      isCompletionRequestInProgress: E,
                      hasActiveRequest: l,
                      handleExitEdit: n$.noop,
                    })
                  ),
                  t(v),
                ],
              }),
              (0, j.jsxs)(n3, {
                onClick: function () {
                  S(h);
                },
                children: [
                  (0, j.jsxs)(n4, {
                    children: [
                      (0, j.jsx)(ee, {
                        isCompletionRequestInProgress: R,
                        messages: y.messages,
                        clientThreadId: a,
                        isCompletion: sx(y),
                        avatarColor: s,
                        showInlineEmbeddedDisplay: !1,
                      }),
                      (0, j.jsx)(n6, {
                        children: (0, j.jsx)(
                          ew.Z,
                          (0, b._)((0, k._)({}, n7.responseNumber), { values: { responseIndex: 2 } })
                        ),
                      }),
                    ],
                  }),
                  (0, j.jsx)(
                    nD,
                    (0, b._)((0, k._)({}, e), {
                      groupedMessagesToRender: B,
                      allGroupedMessages: B,
                      isEditing: !1,
                      isCompletion: sx(y),
                      isCompletionRequestInProgress: D,
                      hasActiveRequest: l,
                      handleExitEdit: n$.noop,
                    })
                  ),
                  t(y),
                ],
              }),
            ],
          }),
        });
      }
      var n3 = N.Z.button(nX()),
        n6 = N.Z.div(n0()),
        n4 = N.Z.div(n9()),
        n7 = (0, E.vU)({
          responsePrompt: {
            id: 'ConversationTurnTwoUpFeedback.responsePrompt',
            description: 'A prompt for the user to choose between two responses',
            defaultMessage: 'Which response do you prefer?',
          },
          responsePromptExplanation: {
            id: 'ConversationTurnTwoUpFeedback.responsePromptExplanation',
            description: 'An explanation of why a user would choose between two responses',
            defaultMessage: 'Your choice will help make ChatGPT better.',
          },
          responseNumber: {
            id: 'ConversationTurnTwoUpFeedback.responseNumber',
            description: "A label for the response number, e.g. 'Response 1'",
            defaultMessage: 'Response {responseIndex, number}',
          },
        }),
        n8 = a(23211),
        se = a(25952),
        st = a(94495),
        sa = a(47346),
        si = a(74102),
        sn = a(10499);
      function ss() {
        var e = (0, M._)(['p-4 gizmo:py-2 justify-center text-base md:gap-6 md:py-6']);
        return (
          (ss = function () {
            return e;
          }),
          e
        );
      }
      function sr() {
        var e = (0, M._)(['justify-center flex flex-1 p-4 gap-4 text-base mx-auto max-w-6xl']);
        return (
          (sr = function () {
            return e;
          }),
          e
        );
      }
      function so() {
        var e = (0, M._)(['flex-shrink-0 flex flex-col relative items-end']);
        return (
          (so = function () {
            return e;
          }),
          e
        );
      }
      function sl() {
        var e = (0, M._)(['font-semibold']);
        return (
          (sl = function () {
            return e;
          }),
          e
        );
      }
      function sd() {
        var e = (0, M._)(['text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs']);
        return (
          (sd = function () {
            return e;
          }),
          e
        );
      }
      function sc() {
        var e = (0, M._)([
          'flex flex-1 gap-4 text-base mx-auto md:gap-6 gizmo:gap-3 gizmo:md:px-5 gizmo:lg:px-1 gizmo:xl:px-5 ',
          '\n}',
        ]);
        return (
          (sc = function () {
            return e;
          }),
          e
        );
      }
      function su() {
        var e = (0, M._)([
          'p-1 gizmo:pl-0 rounded-md disabled:dark:hover:text-gray-400  dark:hover:text-gray-200 dark:text-gray-400 ',
          '\n',
        ]);
        return (
          (su = function () {
            return e;
          }),
          e
        );
      }
      function sm() {
        var e = (0, M._)([
          'text-gray-400 flex self-end lg:self-center justify-center gizmo:lg:justify-start mt-2 gizmo:mt-0\n',
          ' ',
          '',
        ]);
        return (
          (sm = function () {
            return e;
          }),
          e
        );
      }
      function sx(e) {
        return e.role !== A.uU.User;
      }
      var sg = _.memo(function (e) {
          var t,
            a = e.turnIndex,
            i = e.conversationLeafId,
            n = e.isFinalTurn,
            s = e.clientThreadId,
            r = e.onChangeItemInView,
            o = e.onChangeRating,
            l = e.showInlineEmbeddedDisplay,
            d = void 0 !== l && l,
            c = e.currentModelId,
            u = e.initiallyHighlightedMessageId,
            m = e.avatarColor,
            x = null !== (0, _.useContext)(B.gB),
            g = (0, Z.ec)(Z.F_.isBusinessWorkspace),
            h = (0, O.ur)(s),
            f = (0, W.Ml)(),
            p = (0, L.GD)(s, a, i),
            v = p.messages,
            M = p.variantIds,
            N = p.variantsInStreamInfo,
            F = nL(v),
            E = eR(),
            H = v[v.length - 1],
            Q = !0,
            $ = !1,
            J = void 0;
          try {
            for (var Y, K = F[Symbol.iterator](); !(Q = (Y = K.next()).done); Q = !0) {
              var X = Y.value,
                et = (function (e) {
                  var t = e.type;
                  switch (t) {
                    case y.Text:
                    case y.Code:
                    case y.CodeExecutionOutput:
                    case y.Debug:
                      return [e.message];
                    case y.MultiText:
                    case y.Browsing:
                    case y.Plugin:
                    case y.JITPlugin:
                    case y.RetrievalBrowsing:
                    case y.ParallelBrowsing:
                    case y.Dalle:
                    case y.GizmoEditor:
                      return e.messages;
                    default:
                      return (0, tl.Z)(t), [];
                  }
                })(X);
              if (
                et.some(function (e) {
                  return E.has(e.message.id);
                })
              ) {
                H = et[et.length - 1];
                break;
              }
            }
          } catch (e) {
            ($ = !0), (J = e);
          } finally {
            try {
              Q || null == K.return || K.return();
            } finally {
              if ($) throw J;
            }
          }
          var ea = v.slice(0, v.indexOf(H) + 1),
            ei = (0, q.x_)(),
            en = (0, w._)((0, _.useState)(!1), 2),
            es = en[0],
            er = en[1],
            el = M.indexOf(ea[0].nodeId),
            ed = sx(p),
            ec = (0, _.useContext)(B.QL).historyDisabled,
            eu = (0, D.tN)(function (e) {
              return e.isDesktopNavCollapsed;
            }),
            em = (0, S.WA)(s),
            ex = ea.some(function (e) {
              return e.message.content.content_type === A.PX.MultimodalText;
            }),
            eg = (0, _.useRef)(null);
          (0, _.useEffect)(
            function () {
              var e;
              null != u &&
                p.messages
                  .map(function (e) {
                    return e.message.id;
                  })
                  .includes(u) &&
                (null === (e = eg.current) || void 0 === e || e.scrollIntoView({ behavior: 'auto' }));
            },
            [u]
          );
          var eh = ea[ea.length - 1],
            ef = eh.rating,
            ep = (ed && (null == ea ? void 0 : ea[0]) != null && (0, z.Rc)(ea[0].message)) || c,
            ev = function () {
              1 === ea.length &&
                (P.A.logEvent(R.M.editPrompt, { id: ea[0].message.id, threadId: L.tQ.getServerThreadId(s) }), er(!0));
            },
            ey = (0, _.useCallback)(function () {
              er(!1);
            }, []),
            ek = (0, _.useCallback)(
              function () {
                L.tQ.copyMessageToClipboard(s, a);
              },
              [s, a]
            ),
            eb = (0, _.useCallback)(
              function (e) {
                o(eh.nodeId, eh.message.id, e);
              },
              [eh, o]
            ),
            ew = (0, w._)(
              (0, _.useState)(function () {
                return Date.now();
              }),
              1
            )[0],
            eM = (0, _.useMemo)(
              function () {
                return U.Cv.getRequestIdFromConversationTurn(p);
              },
              [p]
            ),
            ej = (0, G.Yk)(eM),
            eC = (0, G.B$)(),
            e_ = (function () {
              if (ed && em.kind === A.OL.PrimaryAssistant) {
                var e,
                  t,
                  a = L.tQ.getTree(s),
                  i = ea[0],
                  n = null == i ? void 0 : i.nodeId;
                if (null == i || null == n || '' === n) return null;
                var r = a.getParentPromptNode(n),
                  o = null == r ? void 0 : r.parentId;
                if (null == o || '' === o) return null;
                var l = a.getNodeByIdOrMessageId(o),
                  d =
                    null == l
                      ? void 0
                      : null === (e = l.message) || void 0 === e
                        ? void 0
                        : null === (t = e.metadata) || void 0 === t
                          ? void 0
                          : t.model_slug;
                if (ep && null != d && ep !== d)
                  return sn.n2.has(d)
                    ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model."
                    : "The previous model used in this conversation is unavailable. We've switched you to the latest default model.";
              }
              return null;
            })(),
            eT = nL(ea),
            eN = (0, L.r7)(s),
            eI = (0, sa.Z)(s),
            eS = (0, si.Z)(s),
            eP = (0, L.oq)(s),
            eF = !x && !eN && !ec && ei && ed,
            eE =
              eF &&
              !g &&
              !ej &&
              !d &&
              !es &&
              em.kind !== A.OL.GizmoMagicCreate &&
              1 === el &&
              n &&
              !eh.inlineComparisonRating &&
              !ef &&
              2 === M.length &&
              Date.now() - (null !== (t = eh.message.create_time) && void 0 !== t ? t : 0) * 1e3 < 6e5,
            eA = (0, L.yt)(s, M),
            eL =
              em.kind !== A.OL.GizmoMagicCreate &&
              em.kind !== A.OL.GizmoTest &&
              eF &&
              n &&
              (null == N ? void 0 : N.num_variants_in_stream) === 2 &&
              2 === M.length &&
              !eh.inlineComparisonRating &&
              !eA,
            eD = (0, V.p_)().playgroundTemplate,
            eZ = (0, V.QH)().gizmoTemplate,
            eB = ed && !d && !x && !eN && null == eZ && null == eD,
            eq = eB && !g && em.kind !== A.OL.GizmoMagicCreate,
            ez = !x && !d && !es && !eL,
            eU = ei && !f,
            eO = !ed && !d && em.kind !== A.OL.GizmoMagicCreate && !x && !ex && 1 === ea.length && !es,
            eV = function (e) {
              r(M[e]), P.A.logEvent(R.M.changeNode, { intent: 'toggle_between' });
            };
          if ([A.uU.Root, A.uU.System].includes(p.role) && !eL) return null;
          var eG = eO && !f,
            eH = eG
              ? (0, j.jsx)(sw, {
                  $isGizmoUI: !1,
                  onClick: ev,
                  className: (0, C.default)(ei && 'md:invisible md:group-hover:visible'),
                  children: (0, j.jsx)(T.vPQ, { className: 'icon-sm' }),
                })
              : null,
            eQ = eO && f,
            eW = eQ
              ? (0, j.jsx)(sw, {
                  $isGizmoUI: f,
                  onClick: ev,
                  children: (0, j.jsx)('div', {
                    className: 'flex items-center gap-1.5 text-xs',
                    children: (0, j.jsx)(I.QP, {}),
                  }),
                })
              : null,
            e$ =
              n && eI && f
                ? (0, j.jsx)(sw, {
                    $isGizmoUI: f,
                    onClick: function () {
                      eS(eP, { eventSource: 'mouse' }), (0, st.go)();
                    },
                    children: (0, j.jsx)('div', {
                      className: 'flex items-center gap-1.5 text-xs',
                      children: (0, j.jsx)(I.vX, {}),
                    }),
                  })
                : null,
            eJ =
              !ed || d || (n && ej)
                ? null
                : (0, j.jsx)(eo.Z, {
                    shouldChangeText: !1,
                    onCopy: ek,
                    iconClassName: f ? 'h-3.5 w-3.5' : 'icon-sm',
                    className: (0, C.default)(
                      'rounded-md p-1 text-xs gizmo:gap-1.5 gizmo:pl-0 dark:text-gray-400 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400',
                      f
                        ? 'hover:text-gray-950 md:invisible md:group-hover:visible md:group-[.final-completion]:visible'
                        : 'hover:text-gray-700'
                    ),
                  }),
            eY =
              !eq || (f && ej)
                ? null
                : (0, j.jsxs)('div', {
                    className: 'flex gap-1',
                    children: [
                      'thumbsDown' !== ef &&
                        !ec &&
                        (0, j.jsx)(
                          sw,
                          {
                            $isGizmoUI: f,
                            onClick: function () {
                              return eb('thumbsUp');
                            },
                            disabled: 'thumbsUp' === ef,
                            className: (0, C.default)(
                              'thumbsUp' === ef && '!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700'
                            ),
                            children: f ? (0, j.jsx)(I.ib, {}) : (0, j.jsx)(T.fmn, { className: 'icon-sm' }),
                          },
                          'thumbsUp:'.concat(eh.nodeId)
                        ),
                      'thumbsUp' !== ef &&
                        !ec &&
                        (0, j.jsx)(
                          sw,
                          {
                            $isGizmoUI: f,
                            onClick: function () {
                              return eb('thumbsDown');
                            },
                            disabled: 'thumbsDown' === ef,
                            className: (0, C.default)(
                              'thumbsDown' === ef && '!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700'
                            ),
                            children: f ? (0, j.jsx)(I.Q7, {}) : (0, j.jsx)(T.oLd, { className: 'icon-sm' }),
                          },
                          'thumbsDown:'.concat(eh.nodeId)
                        ),
                    ],
                  }),
            eK = eE
              ? (0, j.jsx)(nU, {
                  clientThreadId: s,
                  messageForRating: eh,
                  variantIds: M,
                  conversationTurnMountTime: ew,
                })
              : null;
          return (0, j.jsxs)('div', {
            className: (0, C.default)(
              !f && 'group',
              'w-full text-token-text-primary',
              (0, C.default)(
                !d && 'border-b border-black/10 gizmo:border-0 dark:border-gray-900/50 gizmo:dark:border-0',
                ed
                  ? 'bg-gray-50 gizmo:bg-transparent dark:bg-[#444654] gizmo:dark:bg-transparent'
                  : 'gizmo:bg-transparent dark:bg-gray-800 gizmo:dark:bg-transparent'
              )
            ),
            ref: eg,
            style: { '--avatar-color': m },
            'data-testid': 'conversation-turn-'.concat(a),
            children: [
              e_ && (0, j.jsx)(sk, { children: e_ }),
              (0, j.jsxs)(sf, {
                className: (0, C.default)(d ? 'ml-5' : 'm-auto'),
                children: [
                  (0, j.jsx)(sb, {
                    $isDesktopNavCollapsed: eu,
                    className: (0, C.default)(f && 'group', ed && n && f && 'final-completion'),
                    children: eL
                      ? (0, j.jsx)(n2, {})
                      : (0, j.jsxs)(j.Fragment, {
                          children: [
                            (0, j.jsxs)(sv, {
                              children: [
                                (0, j.jsx)(ee, {
                                  isCompletionRequestInProgress: ej,
                                  messages: ea,
                                  clientThreadId: s,
                                  isCompletion: ed,
                                  avatarColor: m,
                                  showInlineEmbeddedDisplay: d,
                                }),
                                ez &&
                                  eU &&
                                  (0, j.jsx)(se.h, {
                                    currentPage: el,
                                    onChangeIndex: eV,
                                    length: M.length,
                                    className: (0, C.default)(
                                      'absolute left-0 top-2 -ml-4 -translate-x-full gizmo:top-1 gizmo:-ml-6',
                                      M.length > 1 ? 'group:hover-visible visible' : 'invisible'
                                    ),
                                  }),
                              ],
                            }),
                            (0, j.jsxs)('div', {
                              className: (0, C.default)(
                                'relative flex w-[calc(100%-50px)] flex-col gizmo:w-full lg:w-[calc(100%-115px)]',
                                ed && 'agent-turn'
                              ),
                              children: [
                                f && (0, j.jsx)(sh, { messages: ea, isCompletion: ed, conversationTemplate: h }),
                                (0, j.jsxs)('div', {
                                  className: 'flex-col gap-1 md:gap-3',
                                  children: [
                                    (0, j.jsx)(
                                      nD,
                                      (0, b._)((0, k._)({ groupedMessagesToRender: eT, allGroupedMessages: F }, e), {
                                        isEditing: es,
                                        isCompletion: ed,
                                        isCompletionRequestInProgress: ej,
                                        isFinalTurn: n,
                                        hasActiveRequest: eC,
                                        handleExitEdit: ey,
                                      })
                                    ),
                                    eG &&
                                      ei &&
                                      (0, j.jsx)(sM, {
                                        $hidden: eC,
                                        $isGizmoUI: f,
                                        className:
                                          'gizmo:absolute gizmo:right-0 gizmo:top-1/2 gizmo:-translate-y-1/2 gizmo:transform',
                                        children: eH,
                                      }),
                                    (eB || ez) &&
                                      (0, j.jsxs)(j.Fragment, {
                                        children: [
                                          eG &&
                                            !ei &&
                                            f &&
                                            (0, j.jsx)(sM, {
                                              $hidden: ej,
                                              $isGizmoUI: f,
                                              className:
                                                'gizmo:absolute gizmo:right-0 gizmo:top-1/2 gizmo:-translate-y-1/2 gizmo:transform',
                                              children: eH,
                                            }),
                                          (0, j.jsxs)('div', {
                                            className:
                                              'flex justify-between empty:hidden gizmo:justify-start gizmo:gap-3 lg:block gizmo:lg:flex',
                                            children: [
                                              !eU &&
                                                ez &&
                                                M.length > 1 &&
                                                (0, j.jsx)(se.h, {
                                                  currentPage: el,
                                                  onChangeIndex: eV,
                                                  length: M.length,
                                                  className: (0, C.default)(
                                                    'self-center pt-2 gizmo:pt-0',
                                                    M.length > 1 ? 'visible' : '!invisible'
                                                  ),
                                                }),
                                              eG && !ei && (0, j.jsx)(sM, { $hidden: ej, $isGizmoUI: f, children: eH }),
                                              eB
                                                ? (0, j.jsxs)(sM, {
                                                    $hidden: ej,
                                                    $isGizmoUI: f,
                                                    children: [eJ, eY, e$],
                                                  })
                                                : eQ
                                                  ? (0, j.jsx)(sM, { $hidden: !1, $isGizmoUI: f, children: eW })
                                                  : null,
                                              eE && eK,
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                  }),
                  eL &&
                    (0, j.jsx)(sp, {
                      children: (0, j.jsx)(
                        n5,
                        (0, k._)({ variantIds: M, variantsInStreamInfo: N, conversationTurnMountTime: ew }, e)
                      ),
                    }),
                ],
              }),
            ],
          });
        }),
        sh = function (e) {
          var t,
            a = e.messages,
            i = e.isCompletion,
            n = e.conversationTemplate,
            s = (0, F.Z)(),
            r = null === (t = a[0].message.metadata) || void 0 === t ? void 0 : t.shared_conversation_id,
            o = (0, V.p_)().playgroundTemplate,
            l = (0, V.QH)(),
            d = l.gizmoTemplate,
            c = l.mode,
            u = 'ChatGPT';
          return (
            i
              ? (null == o ? void 0 : o.name) != null && '' !== o.name
                ? (u = null == o ? void 0 : o.name)
                : null != d
                  ? (u = 'magic' === c ? ev.HW : (null == d ? void 0 : d.name) || n8.z)
                  : (null == n ? void 0 : n.name) != null && (u = n.name)
              : (u = null != r ? s.formatMessage(sj.anonymousName) : s.formatMessage(sj.you)),
            (0, j.jsx)(sy, { children: u })
          );
        },
        sf = N.Z.div(ss()),
        sp = N.Z.div(sr()),
        sv = N.Z.div(so()),
        sy = N.Z.div(sl()),
        sk = N.Z.div(sd()),
        sb = N.Z.div(sc(), function (e) {
          return e.$isDesktopNavCollapsed
            ? 'md:max-w-3xl'
            : 'md:max-w-2xl lg:max-w-[38rem] gizmo:md:max-w-3xl gizmo:lg:max-w-[40rem] gizmo:xl:max-w-[48rem] xl:max-w-3xl';
        }),
        sw = N.Z.button(su(), function (e) {
          return e.$isGizmoUI
            ? 'text-gray-400 hover:text-gray-950 md:invisible md:group-hover:visible md:group-[.final-completion]:visible'
            : 'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700';
        }),
        sM = N.Z.div(
          sm(),
          function (e) {
            return e.$hidden ? 'invisible' : 'visible';
          },
          function (e) {
            return e.$isGizmoUI
              ? 'gap-1'
              : 'lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 gap-2 md:gap-3';
          }
        ),
        sj = (0, E.vU)({
          you: {
            id: 'ConversationTurn.you',
            defaultMessage: 'You',
            description: "Name shown when for the author's own messages in a conversation",
          },
          anonymousName: {
            id: 'ConversationTurn.anonymousName',
            defaultMessage: 'Anonymous',
            description: 'Name on a conversation turn when the original author is unknown or anonymous',
          },
        });
    },
    95413: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return b;
        },
      });
      var i = a(39324),
        n = a(4337),
        s = a(35250),
        r = a(7813),
        o = a(62682),
        l = a(55548),
        d = a(17944),
        c = a(54636),
        u = a(42780),
        m = a(19841),
        x = a(1454),
        g = a(32004),
        h = a(94968),
        f = a(21389),
        p = a(31731);
      function v() {
        var e = (0, n._)([
          'flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm',
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      var y = f.Z.a(v());
      function k(e) {
        var t = e.onClick,
          a = e.href,
          i = e.target,
          n = e.children;
        return (0, s.jsx)(r.v.Item, {
          children: function (e) {
            var r = e.active;
            return (0, s.jsx)(y, {
              as: void 0 !== a ? 'a' : 'button',
              onClick: t,
              href: a,
              target: i,
              className: (0, m.default)(
                r ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              ),
              children: n,
            });
          },
        });
      }
      function b() {
        return (0, d.hz)().has(o.rk)
          ? (0, s.jsxs)(r.v, {
              as: 'div',
              className: 'group relative',
              children: [
                (0, s.jsx)(r.v.Button, {
                  className:
                    'flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200',
                  children: (0, s.jsx)('div', {
                    className: 'flex h-6 w-6 items-center justify-center text-xs',
                    children: '?',
                  }),
                }),
                (0, s.jsx)(p.m, {
                  children: (0, s.jsxs)(r.v.Items, {
                    className:
                      'absolute bottom-full right-0 z-20 mb-2 w-full min-w-[175px] overflow-hidden rounded-md bg-gray-50 pb-1.5 pt-1 outline-none dark:bg-gray-950',
                    children: [
                      (0, s.jsxs)(k, {
                        as: 'a',
                        href: 'https://help.openai.com/en/collections/3742473-chatgpt',
                        target: '_blank',
                        onClick: function () {
                          c.A.logEvent(u.M.clickFaqLink);
                        },
                        children: [
                          (0, s.jsx)(x.AlO, { className: 'icon-sm' }),
                          (0, s.jsx)('span', {
                            className: 'text-xs',
                            children: (0, s.jsx)(g.Z, (0, i._)({}, w.helpAndFaq)),
                          }),
                        ],
                      }),
                      (0, s.jsxs)(k, {
                        as: 'a',
                        href: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes',
                        target: '_blank',
                        children: [
                          (0, s.jsx)(x.AlO, { className: 'icon-sm' }),
                          (0, s.jsx)('span', {
                            className: 'text-xs',
                            children: (0, s.jsx)(g.Z, (0, i._)({}, w.releaseNotes)),
                          }),
                        ],
                      }),
                      (0, s.jsxs)(k, {
                        as: 'a',
                        href: 'https://openai.com/policies',
                        target: '_blank',
                        onClick: function () {
                          c.A.logEvent(u.M.clickPrivacyPolicy);
                        },
                        children: [
                          (0, s.jsx)(x.AlO, { className: 'icon-sm' }),
                          (0, s.jsx)('span', {
                            className: 'text-xs',
                            children: (0, s.jsx)(g.Z, (0, i._)({}, w.termsAndPolicies)),
                          }),
                        ],
                      }),
                      (0, s.jsxs)(k, {
                        onClick: function () {
                          l.vm.openModal(l.B.KeyboardActions);
                        },
                        children: [
                          (0, s.jsx)(x.aCJ, { className: 'icon-sm' }),
                          (0, s.jsx)('span', {
                            className: 'text-xs',
                            children: (0, s.jsx)(g.Z, (0, i._)({}, w.keyboardShortcutsMenu)),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          : null;
      }
      var w = (0, h.vU)({
        helpAndFaq: { id: 'thread.helpAndFaq', defaultMessage: 'Help & FAQ', description: 'Help & FAQ menu item' },
        releaseNotes: {
          id: 'thread.releaseNotes',
          defaultMessage: 'Release notes',
          description: 'Release notes menu item',
        },
        termsAndPolicies: {
          id: 'thread.termsAndPolicies',
          defaultMessage: 'Terms & policies',
          description: 'Terms & Policies menu item',
        },
        keyboardShortcutsMenu: {
          id: 'thread.keyboardShortcutsMenu',
          defaultMessage: 'Keyboard shortcuts',
          description: 'Keyboard shortcuts menu item',
        },
      });
    },
    82713: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return aQ;
        },
      });
      var i,
        n,
        s = a(21722),
        r = a(39324),
        o = a(71209),
        l = a(70216),
        d = a(10064),
        c = a(4337),
        u = a(38104),
        m = a(35250),
        x = a(21950),
        g = a(2064),
        h = a(4536),
        f = a(54636),
        p = a(42780),
        v = a(5397),
        y = a.n(v),
        k = a(29124),
        b = a.n(k),
        w = a(73040),
        M = a.n(w),
        j = a(10721),
        C = a(70079),
        _ = a(1454),
        T = a(13002),
        N = a(94968),
        I = a(32004),
        S = a(70671),
        P = a(21389),
        R = a(8844),
        F = a(61098),
        E = a(86646),
        A = a(62682),
        L = a(51505),
        D = a(72871),
        Z = a(55548),
        B = a(17944),
        q = a(25687),
        z = a(1491),
        U = a(86925),
        O = a(18481),
        V = a(39368),
        G = a(48133),
        H = a(41955),
        Q = a(94705),
        W = a(7184),
        $ = a(84056),
        J = a(64502),
        Y = a(19841),
        K = a(91530),
        X = a.n(K),
        ee = a(2827),
        et = a(15066),
        ea = a(13205),
        ei = a(22048),
        en = a(15635),
        es = a(72290);
      function er() {
        var e = (0, c._)(['mb-2 mt-auto ml-auto mr-auto']);
        return (
          (er = function () {
            return e;
          }),
          e
        );
      }
      function eo() {
        var e = (0, c._)([
          'relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden',
        ]);
        return (
          (eo = function () {
            return e;
          }),
          e
        );
      }
      function el() {
        var e = (0, c._)(['mb-5 border dark:bg-gray-800 overflow-hidden']);
        return (
          (el = function () {
            return e;
          }),
          e
        );
      }
      function ed() {
        var e = (0, c._)(['']);
        return (
          (ed = function () {
            return e;
          }),
          e
        );
      }
      var ec = (0, N.vU)({
        submitFeedback: {
          id: 'feedbackModal.submitFeedback',
          defaultMessage: 'Submit feedback',
          description: 'Button text for submitting the feedback',
        },
        submitReport: {
          id: 'feedbackModal.submitReport',
          defaultMessage: 'Submit report',
          description: 'Button text for submitting a content-moderation report',
        },
        submitRejectModeration: {
          id: 'feedbackModal.moderationReject',
          defaultMessage: 'Block Content',
          description: 'Button text for rejecting the share link and blocking it from being viewed',
        },
        submitAcceptModeration: {
          id: 'feedbackModal.moderationAccept',
          defaultMessage: 'Allow Content',
          description: 'Button text for accepting the share link and allowing it to be viewed',
        },
        thumbsUpPlaceholder: {
          id: 'feedbackModal.thumbsUpPlaceholder',
          defaultMessage: 'What do you like about the response?',
          description: 'Placeholder for textarea input when user chooses thumbs up',
        },
        thumbsDownPlaceholder: {
          id: 'feedbackModal.thumbsDownPlaceholder',
          defaultMessage: 'What was the issue with the response? How could it be improved?',
          description: 'Placeholder for textarea input when user chooses thumbs down',
        },
        reportContentExplanationPlaceholder: {
          id: 'feedbackModal.reportContentExplanationPlaceholder',
          defaultMessage:
            'What is wrong with the response? What about this response is harmful? Please be as specific as possible, and add any details that are not present in the checkboxes below.',
          description: 'Placeholder for textarea input when user chooses to report a shared chat',
        },
        harmfulUnsafe: {
          id: 'feedbackModal.harmfulUnsafe',
          defaultMessage: 'This is harmful / unsafe',
          description: 'Label for harmful/unsafe checkbox',
        },
        harmfulOffensive: {
          id: 'feedbackModal.harmfulOffensive',
          defaultMessage: 'This content is harmful or offensive',
          description: 'Label for harmful/offensive checkbox',
        },
        copyrightContent: {
          id: 'feedbackModal.copyrightContent',
          defaultMessage: 'This content violates copyright law',
          description: 'Label for Copyrighted Content checkbox',
        },
        reportOtherContent: {
          id: 'feedbackModal.reportOtherContent',
          defaultMessage: "I don't like this for some other reason (please describe)",
          description: 'Label for Report Other Content checkbox',
        },
        notTrue: {
          id: 'feedbackModal.notTrue',
          defaultMessage: "This isn't true",
          description: 'Label for not true checkbox',
        },
        notHelpful: {
          id: 'feedbackModal.notHelpful',
          defaultMessage: "This isn't helpful",
          description: 'Label for not helpful checkbox',
        },
        dontLikeThis: {
          id: 'feedbackModal.dontLikeThis',
          defaultMessage: "I don't like this",
          description: "Label for I Don't Like This checkbox",
        },
        sexualAbuse: {
          id: 'feedbackModal.sexualAbuse',
          defaultMessage: 'This content contains sexual abuse',
          description: 'Label for Sexual Abuse checkbox',
        },
        provideAdditionalFeedback: {
          id: 'feedbackModal.provideAdditionalFeedback',
          defaultMessage: 'Provide additional feedback',
          description: 'Title for the critique feedback modal',
        },
        provideReportModalTitle: {
          id: 'feedbackModal.provideReportModalTitle',
          defaultMessage: 'Report This Content',
          description: "Title for the 'report' feedback modal",
        },
        pickBestAnswer: {
          id: 'feedbackModal.pickBestAnswer',
          defaultMessage: 'Pick the best answer to improve the model',
          description: 'Title for the compare feedback modal',
        },
        newAnswer: {
          id: 'feedbackModal.newAnswer',
          defaultMessage: 'New Answer',
          description: 'Title for the new answer during comparison',
        },
        originalAnswer: {
          id: 'feedbackModal.originalAnswer',
          defaultMessage: 'Original Answer',
          description: 'Title for the original answer during comparison',
        },
        newAnswerBetter: {
          id: 'feedbackModal.newAnswerBetter',
          defaultMessage: 'New answer is better',
          description: 'Button text for choosing new answer during comparison',
        },
        originalAnswerBetter: {
          id: 'feedbackModal.originalAnswerBetter',
          defaultMessage: 'Original answer is better',
          description: 'Button text for choosing original answer during comparison',
        },
        neitherAnswerBetter: {
          id: 'feedbackModal.neitherAnswerBetter',
          defaultMessage: 'Neither answer is better',
          description: 'Button text for choosing neither answer during comparison',
        },
        skipStep: {
          id: 'feedbackModal.skipStep',
          defaultMessage: 'Skip this step',
          description: 'Button text for skipping comparison step',
        },
        continueWithChosenAnswer: {
          id: 'feedbackModal.continueWithChosenAnswer',
          defaultMessage: 'The conversation will continue with the answer you choose.',
          description: 'Information text for user during comparison',
        },
        employeeConsent: {
          id: 'feedbackModal.employeeConsent',
          defaultMessage: 'Allow this content to be used for model evals',
          description: 'Open AI employee is consenting to allow this content to be used in evals',
        },
        employeeConsentExplanation: {
          id: 'feedbackModal.employeeConsentExplanation',
          defaultMessage:
            'Allow your feedback and conversation to be used to in model evals. Please verify there is no confidential data in the conversation.',
          description: 'Explanation for employee consent checkbox',
        },
      });
      function eu(e) {
        var t,
          a,
          i,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (null == e ? void 0 : null === (t = e.messages) || void 0 === t ? void 0 : t.length) === 1 &&
          !(null == e
            ? void 0
            : null === (a = e.messages) || void 0 === a
              ? void 0
              : a.some(function (e) {
                  return 'error' in e;
                })) &&
          (!n ||
            !(
              (null == e ? void 0 : null === (i = e.messages) || void 0 === i ? void 0 : i.length) === 1 &&
              (0, U.RR)(null == e ? void 0 : e.messages[0].message).length < 20
            ))
        );
      }
      function em(e) {
        var t,
          a,
          i = e.ratingModalNodeId,
          n = e.ratingModalOpen,
          s = e.onCloseRatingModal,
          o = e.onSubmitFeedback,
          l = e.onHandleChangeFeedbackComparisonRating,
          c = e.feedbackTextareaRef,
          u = e.clientThreadId,
          x = e.currentModelId,
          g = e.onChangeItemInView,
          v = e.onRequestMoreCompletions,
          y = e.onRequestCompletion,
          k = (0, S.Z)(),
          b = L.tQ.getTree(u),
          w = (0, L.XK)(u),
          M = (0, B.aF)(),
          j = !!M && (0, h.yl)(M),
          T = (0, d._)((0, C.useState)(!1), 2),
          N = T[0],
          P = T[1];
        (0, C.useEffect)(
          function () {
            'report' === n && h.pg.forceEnableSession();
          },
          [n]
        );
        var R = (0, C.useRef)(0.5 > Math.random() ? 'left' : 'right'),
          F = null == b ? void 0 : b.getConversationTurns(i || 'root'),
          A = F.length - 1,
          D = F[F.length - 1],
          Z = (0, d._)((0, C.useState)('critique'), 2),
          q = Z[0],
          U = Z[1],
          O = (0, z.w$)(),
          V = eu(D, !0) && O,
          G = (0, C.useMemo)(
            function () {
              return { id: i || 'root', threadId: L.tQ.getServerThreadId(u), rating: n, model: x };
            },
            [i, u, n, x]
          ),
          $ = null == F ? void 0 : F[(null == F ? void 0 : F.length) - 1].variantIds,
          K = null == $ ? void 0 : $[(null == $ ? void 0 : $.length) - 1],
          er = (a = (t = null == b ? void 0 : b.getConversationTurns(K))[t.length - 1]).messages[a.messages.length - 1]
            .nodeId,
          eo = null == b ? void 0 : b.getConversationTurns(er),
          el = (0, C.useMemo)(
            function () {
              var e = null == eo ? void 0 : eo[(null == eo ? void 0 : eo.length) - 1];
              return 'thumbsDown' === n && V && eu(e) && eu(D);
            },
            [n, V, eo, D]
          ),
          ed = (0, C.useRef)(Date.now()),
          em = (0, C.useRef)(-1),
          ep = (0, C.useRef)(Date.now()),
          ev = (0, C.useRef)(Date.now());
        (0, C.useEffect)(
          function () {
            'compare' === q
              ? ((em.current = Date.now()), f.A.logEvent(p.M.displayedComparisonUIV0, G))
              : 'critique' === q && 'thumbsDown' === n && f.A.logEvent(p.M.displayedThumbsDownFeedbackForm, G);
          },
          [q]
        );
        var ey = F.length - 2,
          ek = eo.length - 1,
          eb = eo[eo.length - 1],
          ew = (0, C.useMemo)(
            function () {
              return eb && et.Cv.getRequestIdFromConversationTurn(eb);
            },
            [eb]
          ),
          eM = (0, H.Yk)(ew);
        (0, C.useMemo)(
          function () {
            eM || (ev.current = Date.now());
          },
          [eM]
        );
        var ej = D.messages,
          eC = ej[ej.length - 1],
          e_ = eC.message.id,
          eT = eC.nodeId,
          eN = b.getLeafFromNode(eT),
          eI = eb.messages,
          eS = eI[eI.length - 1],
          eP = eS.message.id,
          eR = eS.nodeId,
          eF = b.getLeafFromNode(eR),
          eE =
            'critique' === q
              ? 'report' === n
                ? k.formatMessage(ec.provideReportModalTitle)
                : k.formatMessage(ec.provideAdditionalFeedback)
              : k.formatMessage(ec.pickBestAnswer),
          eA = (0, C.useRef)([]),
          eL = (0, C.useRef)(''),
          eD = (0, C.useCallback)(
            function () {
              var e,
                t = null === (e = c.current) || void 0 === e ? void 0 : e.elements;
              (eA.current = (0, J._)(t || [])
                .filter(function (e) {
                  return e.checked;
                })
                .map(function (e) {
                  return e.id;
                })
                .map(function (e) {
                  return e.replace('feedback-', '');
                })),
                (eL.current = (null == t ? void 0 : t['feedback-other'].value) || '');
            },
            [c]
          ),
          eZ = (0, C.useCallback)(
            function () {
              eD(),
                o({ customFeedback: eL.current, tags: eA.current, employeeConsented: j ? N : void 0 }),
                'thumbsDown' === n && f.A.logEvent(p.M.submitThumbsDownFeedbackForm, G),
                el ? U('compare') : s();
            },
            [eD, o, j, N, n, el, G, s]
          ),
          eB = (0, C.useCallback)(
            function (e, t) {
              var a = L.tQ.getServerThreadId(u);
              if (null != a) {
                var i = b.getMessageId(L.tQ.getThreadCurrentLeafId(u));
                E.ZP.submitSharedConversationReportFeedback({
                  message_id: i,
                  shared_conversation_id: a,
                  text: e,
                  tags: t,
                })
                  .then(function () {
                    es.m.success('Moderation logged successfully');
                  })
                  .catch(function () {
                    es.m.danger('Moderation NOT logged successfully! Please try again');
                  }),
                  s();
              }
            },
            [b, u, s]
          ),
          eq = (0, C.useCallback)(
            function () {
              eD(), eA.current.push('moderation-reject'), eB(eL.current, eA.current);
            },
            [eB, eD]
          ),
          ez = (0, C.useCallback)(
            function () {
              eD(), eA.current.push('moderation-accept'), eB(eL.current, eA.current);
            },
            [eB, eD]
          ),
          eU =
            'moderate' === n
              ? (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsx)(Q.ZP.Button, {
                      title: k.formatMessage(ec.submitRejectModeration),
                      color: 'danger',
                      onClick: eq,
                    }),
                    (0, m.jsx)(Q.ZP.Button, {
                      title: k.formatMessage(ec.submitAcceptModeration),
                      color: 'primary',
                      onClick: ez,
                    }),
                  ],
                })
              : 'critique' === q
                ? (0, m.jsxs)('div', {
                    className: 'flex items-center gap-3',
                    children: [
                      j &&
                        'report' !== n &&
                        (0, m.jsx)(en.u, {
                          label: k.formatMessage(ec.employeeConsentExplanation),
                          children: (0, m.jsx)(ea.Z, {
                            id: 'employee-consent',
                            checked: N,
                            onChange: function (e) {
                              return P(e.currentTarget.checked);
                            },
                            label: k.formatMessage(ec.employeeConsent),
                          }),
                        }),
                      (0, m.jsx)(Q.ZP.Button, {
                        title: k.formatMessage('report' === n ? ec.submitReport : ec.submitFeedback),
                        onClick: eZ,
                      }),
                    ],
                  })
                : null,
          eO = 'left' === R.current,
          eV = eO ? eT : eR,
          eG = eO ? 'new' : 'original',
          eH = eO ? 'original' : 'new',
          eQ = eO ? k.formatMessage(ec.newAnswer) : k.formatMessage(ec.originalAnswer),
          eW = eO ? k.formatMessage(ec.originalAnswer) : k.formatMessage(ec.newAnswer),
          e$ = eO ? k.formatMessage(ec.newAnswerBetter) : k.formatMessage(ec.originalAnswerBetter),
          eJ = eO ? k.formatMessage(ec.originalAnswerBetter) : k.formatMessage(ec.newAnswerBetter),
          eY = n && 'report' !== n && 'moderate' !== n,
          eK = (0, C.useCallback)(
            function (e) {
              var t = 'left' === e ? eG : 'right' === e ? eH : 'same';
              if ((f.A.logEvent(p.M.submittedComparisonUIV0, Object.assign({}, G, { choice: t })), eY)) {
                var a = L.tQ.getTree(u);
                a.updateNodeMetadata(eT, { inlineComparisonRating: 'baseline' }),
                  a.updateNodeMetadata(eR, { inlineComparisonRating: t }),
                  l(e_, eP, n, t, R.current, ed.current, em.current, ep.current, ev.current, eL.current, eA.current);
              }
              L.tQ.setThreadCurrentLeafId(u, e === R.current ? eF.id : eN.id), s();
            },
            [eG, eH, G, eY, u, eF.id, eN.id, s, eT, eR, l, e_, eP, n]
          ),
          eX = !eM && null != ev.current && el,
          e0 = (0, C.useCallback)(
            function () {
              s(),
                'critique' === q
                  ? f.A.logEvent(p.M.skippedThumbsDownFeedbackForm, Object.assign({}, G))
                  : 'compare' === q && f.A.logEvent(p.M.skippedComparisonUIV0, Object.assign({}, G));
            },
            [s, G, q]
          ),
          e9 = (0, d._)((0, C.useState)([]), 2),
          e1 = e9[0],
          e2 = e9[1];
        return (
          (0, C.useEffect)(function () {
            'moderate' === n &&
              E.ZP.fetchShareModerationCategories().then(function (e) {
                var t = e.moderation_categories;
                e2(
                  Object.keys(t).map(function (e) {
                    return [e, t[e]];
                  })
                );
              });
          }, []),
          (0, m.jsxs)(
            W.Z,
            {
              isOpen: !0,
              onClose: e0,
              size: 'custom',
              className: 'md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl',
              type: 'critique' === q ? ('thumbsUp' === n ? 'success' : 'danger') : 'success',
              icon: 'critique' === q ? ('thumbsUp' === n ? _.fmn : _.oLd) : void 0,
              title: eE,
              closeButton: (0, m.jsx)(Q.ZP.CloseButton, { onClose: e0 }),
              children: [
                'critique' === q &&
                  (0, m.jsxs)('form', {
                    ref: c,
                    children: [
                      (0, m.jsx)(ee.ZP, {
                        id: 'feedback-other',
                        placeholder:
                          'thumbsUp' === n
                            ? k.formatMessage(ec.thumbsUpPlaceholder)
                            : 'report' === n
                              ? k.formatMessage(ec.reportContentExplanationPlaceholder)
                              : k.formatMessage(ec.thumbsDownPlaceholder),
                        rows: 3,
                        className:
                          'mb-1 mt-4 w-full resize-none rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white',
                      }),
                      'thumbsDown' === n &&
                        (0, m.jsxs)('div', {
                          className: 'mb-4',
                          children: [
                            (0, m.jsx)(ea.Z, { id: 'feedback-harmful', label: k.formatMessage(ec.harmfulUnsafe) }),
                            (0, m.jsx)(ea.Z, { id: 'feedback-false', label: k.formatMessage(ec.notTrue) }),
                            (0, m.jsx)(ea.Z, { id: 'feedback-not-helpful', label: k.formatMessage(ec.notHelpful) }),
                          ],
                        }),
                      null != n &&
                        !eY &&
                        (0, m.jsx)(m.Fragment, {
                          children: (0, m.jsxs)('div', {
                            className: 'mb-4',
                            children: [
                              'report' === n &&
                                (0, m.jsxs)(m.Fragment, {
                                  children: [
                                    (0, m.jsx)(ea.Z, {
                                      id: 'feedback-dont-like-this',
                                      label: k.formatMessage(ec.dontLikeThis),
                                    }),
                                    (0, m.jsx)(ea.Z, { id: 'feedback-false', label: k.formatMessage(ec.notTrue) }),
                                    (0, m.jsx)(ea.Z, {
                                      id: 'feedback-not-helpful',
                                      label: k.formatMessage(ec.notHelpful),
                                    }),
                                    (0, m.jsx)(ea.Z, {
                                      id: 'feedback-harmful-offensive',
                                      label: k.formatMessage(ec.harmfulOffensive),
                                    }),
                                    (0, m.jsx)(ea.Z, {
                                      id: 'feedback-sexual-abuse',
                                      label: k.formatMessage(ec.sexualAbuse),
                                    }),
                                  ],
                                }),
                              'moderate' === n &&
                                (0, m.jsxs)(m.Fragment, {
                                  children: [
                                    e1.map(function (e) {
                                      var t = (0, d._)(e, 2),
                                        a = t[0],
                                        i = t[1];
                                      return (0, m.jsx)(ea.Z, { id: 'feedback-' + a, label: i }, a);
                                    }),
                                    (0, m.jsx)(ea.Z, {
                                      id: 'feedback-copyright',
                                      label: k.formatMessage(ec.copyrightContent),
                                    }),
                                  ],
                                }),
                              (0, m.jsx)(ea.Z, {
                                id: 'feedback-content-other',
                                label: k.formatMessage(ec.reportOtherContent),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                'compare' === q &&
                  eo &&
                  void 0 !== w &&
                  (0, m.jsxs)('div', {
                    className: (0, Y.default)('w-full'),
                    children: [
                      (0, m.jsx)('p', {
                        className: (0, Y.default)('mb-7 mt-3'),
                        children: (0, m.jsx)(I.Z, (0, r._)({}, ec.continueWithChosenAnswer)),
                      }),
                      (0, m.jsx)(eh, {
                        className: 'rounded-md',
                        children: (0, m.jsx)(ef, {
                          children: (0, m.jsx)(ei.Z, {
                            currentModelId: x,
                            turnIndex: ey,
                            conversationLeafId: eV,
                            isFinalTurn: !1,
                            clientThreadId: u,
                            onChangeItemInView: g,
                            onChangeRating: X(),
                            onRequestMoreCompletions: v,
                            onRequestCompletion: y,
                            showInlineEmbeddedDisplay: !0,
                          }),
                        }),
                      }),
                      (0, m.jsxs)('div', {
                        className: (0, Y.default)(),
                        children: [
                          (0, m.jsxs)('div', {
                            className: (0, Y.default)('mb-2 grid w-full grid-cols-2 gap-5'),
                            children: [
                              (0, m.jsx)('div', {
                                children: (0, m.jsx)('p', { className: (0, Y.default)('font-semibold'), children: eQ }),
                              }),
                              (0, m.jsx)('div', {
                                children: (0, m.jsx)('p', { className: (0, Y.default)('font-semibold'), children: eW }),
                              }),
                            ],
                          }),
                          (0, m.jsxs)('div', {
                            className: (0, Y.default)('mb-5 grid w-full grid-cols-2 gap-5'),
                            children: [
                              (0, m.jsxs)(eg, {
                                children: [
                                  (0, m.jsx)(ef, {
                                    children: (0, m.jsx)(ei.Z, {
                                      currentModelId: x,
                                      turnIndex: eO ? ek : A,
                                      conversationLeafId: eO ? eR : eT,
                                      isFinalTurn: !0,
                                      clientThreadId: u,
                                      onChangeItemInView: g,
                                      onChangeRating: X(),
                                      onRequestMoreCompletions: v,
                                      onRequestCompletion: y,
                                      showInlineEmbeddedDisplay: !0,
                                    }),
                                  }),
                                  (0, m.jsx)(ex, {
                                    children: (0, m.jsx)(Q.ZP.Button, {
                                      disabled: !eX,
                                      title: e$,
                                      onClick: function () {
                                        return eK('left');
                                      },
                                      color: 'dark',
                                    }),
                                  }),
                                ],
                              }),
                              (0, m.jsxs)(eg, {
                                children: [
                                  (0, m.jsx)(ef, {
                                    children: (0, m.jsx)(ei.Z, {
                                      currentModelId: x,
                                      turnIndex: eO ? A : ek,
                                      conversationLeafId: eV,
                                      isFinalTurn: !0,
                                      clientThreadId: u,
                                      onChangeItemInView: g,
                                      onChangeRating: X(),
                                      onRequestMoreCompletions: v,
                                      onRequestCompletion: y,
                                      showInlineEmbeddedDisplay: !0,
                                    }),
                                  }),
                                  (0, m.jsx)(ex, {
                                    children: (0, m.jsx)(Q.ZP.Button, {
                                      disabled: !eX,
                                      title: eJ,
                                      onClick: function () {
                                        return eK('right');
                                      },
                                      color: 'dark',
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, m.jsx)('div', {
                            className: (0, Y.default)('grid w-full'),
                            children: (0, m.jsxs)('div', {
                              className: (0, Y.default)('mb-2 text-right'),
                              children: [
                                (0, m.jsx)(Q.ZP.Button, {
                                  disabled: !eX,
                                  title: k.formatMessage(ec.neitherAnswerBetter),
                                  color: 'primary',
                                  onClick: function () {
                                    return eK('same');
                                  },
                                  className: (0, Y.default)('mr-2'),
                                }),
                                (0, m.jsx)(Q.ZP.Button, {
                                  title: k.formatMessage(ec.skipStep),
                                  onClick: function () {
                                    return s();
                                  },
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, m.jsx)(Q.ZP.Actions, { primaryButton: eU }),
              ],
            },
            'RatingModal-'.concat(i)
          )
        );
      }
      var ex = P.Z.div(er()),
        eg = P.Z.div(eo()),
        eh = P.Z.div(el()),
        ef = P.Z.div(ed()),
        ep = a(41711),
        ev = a(61888);
      function ey(e) {
        var t,
          a = e.clientThreadId,
          i = e.currentLeafId,
          n = e.currentModelId,
          r = e.onChangeItemInView,
          o = e.onRequestMoreCompletions,
          l = e.onChangeRating,
          c = e.onRequestCompletion,
          x = e.ratingModalOpen,
          g = e.ratingModalNodeId,
          h = e.ratingModalCompletionId,
          v = e.sharedConversationReportModalNodeId,
          y = e.sharedConversationModerationModalOpen,
          k = e.setRatingModalOpen,
          b = e.setSharedConversationReportModalNodeId,
          w = e.setSharedConversationModerationModalOpen,
          M = (0, S.Z)(),
          j = (0, C.useRef)(null),
          _ = (0, d._)((0, C.useState)(!1), 2),
          T = _[0],
          N = _[1],
          I = (0, C.useCallback)(
            function (e) {
              var t = e.customFeedback,
                i = e.tags,
                s = e.employeeConsented;
              if (x && null != g && '' !== g && (t || i.length > 0 || s)) {
                var r = L.tQ.getServerThreadId(a);
                f.A.logEvent(p.M.reportResult, { id: h, threadId: r, content: t, model: n, rating: x, tags: i }),
                  a &&
                    h &&
                    E.ZP.submitMessageFeedback({
                      message_id: h,
                      conversation_id: r,
                      rating: x,
                      text: t,
                      tags: i,
                      employee_consented: s,
                    });
              }
            },
            [x, g, a, h, n]
          ),
          P = (0, C.useCallback)(
            function (e) {
              var t = e.customFeedback,
                i = e.tags;
              if (null != v && '' !== v) {
                var s = L.tQ.getServerThreadId(a);
                f.A.logEvent(p.M.reportResult, { id: h, threadId: s, content: t, model: n, rating: x, tags: i }),
                  E.ZP.submitSharedConversationReportFeedback({
                    message_id: v,
                    shared_conversation_id: s,
                    text: t,
                    tags: i,
                  }),
                  N(!0);
              }
            },
            [v, a, h, n, x, N]
          ),
          R = (0, C.useCallback)(
            ((t = (0, s._)(function (e, t, i, n, s, r, o, l, d, c, m) {
              return (0, u.Jh)(this, function (u) {
                switch (u.label) {
                  case 0:
                    return [
                      4,
                      E.ZP.submitMessageComparisonFeedback({
                        feedback_version: 'comparison_feedback_modal:a:1.0',
                        original_message_id: e,
                        new_message_id: t,
                        rating: i,
                        conversation_id: L.tQ.getServerThreadId(a),
                        text: c,
                        tags: m.map(function (e) {
                          return e.replace('feedback-', '');
                        }),
                        completion_comparison_rating: n,
                        new_completion_placement: s,
                        feedback_start_time: r,
                        compare_step_start_time: o,
                        new_completion_load_start_time: l,
                        new_completion_load_end_time: d,
                        frontend_submission_time: Date.now(),
                        timezone_offset_min: new Date().getTimezoneOffset(),
                      }),
                    ];
                  case 1:
                    return u.sent(), [2];
                }
              });
            })),
            function (e, a, i, n, s, r, o, l, d, c, u) {
              return t.apply(this, arguments);
            }),
            [a]
          );
        return null != x
          ? (0, m.jsx)(em, {
              ratingModalNodeId: g,
              ratingModalOpen: x,
              onCloseRatingModal: function () {
                return k(void 0);
              },
              onSubmitFeedback: I,
              onHandleChangeFeedbackComparisonRating: R,
              currentModelId: n,
              feedbackTextareaRef: j,
              clientThreadId: a,
              onChangeItemInView: r,
              onRequestMoreCompletions: o,
              onChangeRating: l,
              onRequestCompletion: c,
            })
          : null != v
            ? (0, m.jsx)(em, {
                ratingModalNodeId: v,
                ratingModalOpen: 'report',
                onCloseRatingModal: function () {
                  return b(void 0);
                },
                onSubmitFeedback: P,
                onHandleChangeFeedbackComparisonRating: ev.noop,
                currentModelId: n,
                feedbackTextareaRef: j,
                clientThreadId: a,
                onChangeItemInView: r,
                onRequestMoreCompletions: o,
                onChangeRating: l,
                onRequestCompletion: c,
              })
            : T
              ? (0, m.jsx)(W.Z, {
                  onClose: function () {
                    return N(!1);
                  },
                  isOpen: !0,
                  icon: ep.Z,
                  title: M.formatMessage(ek.reportModalThankYouTitle),
                  description: M.formatMessage(ek.reportModalThankYouDescription),
                  primaryButton: (0, m.jsx)(Q.ZP.Button, {
                    onClick: function () {
                      return N(!1);
                    },
                    title: M.formatMessage(ek.reportModalThankYouDismiss),
                  }),
                  type: 'danger',
                })
              : y
                ? (0, m.jsx)(em, {
                    ratingModalNodeId: i,
                    ratingModalOpen: 'moderate',
                    onCloseRatingModal: function () {
                      return w(!1);
                    },
                    onSubmitFeedback: ev.noop,
                    onHandleChangeFeedbackComparisonRating: function () {},
                    currentModelId: n,
                    feedbackTextareaRef: j,
                    clientThreadId: a,
                    onChangeItemInView: r,
                    onRequestMoreCompletions: o,
                    onChangeRating: l,
                    onRequestCompletion: c,
                  })
                : null;
      }
      var ek = (0, N.vU)({
          reportModalThankYouTitle: {
            id: 'thread.modal.reportModalThankYou.title',
            defaultMessage: 'Thank you for your report!',
            description: 'Title for the post-report thank-you modal',
          },
          reportModalThankYouDescription: {
            id: 'thread.modal.reportModalThankYou.description',
            defaultMessage: 'Thank you for your report.',
            description: 'Description for the post-report thank-you modal',
          },
          reportModalThankYouDismiss: {
            id: 'thread.modal.reportModalThankYou.dismissButton',
            defaultMessage: 'Close',
            description: 'Close button for the post-report thank-you modal',
          },
        }),
        eb = a(12065),
        ew = a(23234),
        eM = a(61236),
        ej = a(82473),
        eC = a(25494),
        e_ = a(8874),
        eT = a(25005),
        eN = a(42798);
      function eI(e) {
        var t,
          a = e.isOpen,
          i = e.onClose,
          n = (0, C.useCallback)(
            function () {
              f.A.logEvent(p.M.closeAccountPaymentModal), i();
            },
            [i]
          ),
          s = (0, eM.a)({
            queryKey: ['referralInvites'],
            queryFn: function () {
              return E.ZP.getEligibleReferralInvites();
            },
            enabled: a,
          }),
          l = s.data,
          d = s.isLoading,
          c = s.isSuccess,
          u = null !== (t = null == l ? void 0 : l.invites_remaining) && void 0 !== t ? t : 0,
          x = c ? l.invite_codes : [];
        return ((0, C.useEffect)(
          function () {
            a &&
              (e_.m9.logEvent('chatgpt_referral_invite_modal_opened'),
              f.A.logEvent(p.M.chatgptReferralInviteModalOpened));
          },
          [a]
        ),
        c)
          ? (0, m.jsxs)(eT.x, {
              isOpen: a,
              onClose: i,
              children: [
                (0, m.jsxs)('div', {
                  className:
                    'flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700',
                  children: [
                    (0, m.jsx)('span', {
                      className: 'text-base font-semibold sm:text-base',
                      children: (0, m.jsx)(
                        I.Z,
                        (0, o._)((0, r._)({}, eF.modalTitle), { values: { remainingInviteCount: u } })
                      ),
                    }),
                    (0, m.jsx)('button', {
                      className: 'text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white',
                      onClick: n,
                      children: (0, m.jsx)(_.q5L, { className: 'h-6 w-6' }),
                    }),
                  ],
                }),
                (0, m.jsx)('div', {
                  className: 'px-4 py-4',
                  children: (0, m.jsx)('div', {
                    className: 'relative col-span-1 px-3 md:w-[500px] md:px-0',
                    children: (0, m.jsxs)('div', {
                      children: [
                        (0, m.jsx)('div', {
                          className: 'flex flex-col items-center pb-5 pt-4',
                          children: (0, m.jsx)(_.E33, { className: 'h-12 w-12 text-gray-800' }),
                        }),
                        (0, m.jsxs)('div', {
                          className: 'flex flex-col items-center gap-2 text-center',
                          children: [
                            (0, m.jsx)('p', {
                              className: 'text-xl font-semibold leading-6',
                              children: (0, m.jsx)(I.Z, (0, r._)({}, eF.inviteDescription)),
                            }),
                            (0, m.jsx)('p', {
                              className: 'max-w-sm text-xs text-gray-500',
                              children: (0, m.jsx)(I.Z, (0, r._)({}, eF.inviteDescriptionFollowUp)),
                            }),
                          ],
                        }),
                        (0, m.jsxs)('div', {
                          className: 'mt-6',
                          children: [
                            (0, m.jsxs)('div', {
                              className: 'flex flex-row justify-between px-2',
                              children: [
                                (0, m.jsx)('label', {
                                  className: 'block text-sm font-medium text-gray-900',
                                  children: (0, m.jsx)(I.Z, (0, r._)({}, eF.referralCodeLabel)),
                                }),
                                (0, m.jsx)('label', {
                                  className: 'block text-sm text-gray-500',
                                  children: (0, m.jsx)(
                                    I.Z,
                                    (0, o._)((0, r._)({}, eF.inviteRemaining), { values: { remainingInviteCount: u } })
                                  ),
                                }),
                              ],
                            }),
                            d
                              ? (0, m.jsx)('div', {
                                  className: 'h-40 py-2',
                                  children: (0, m.jsx)(eN.Z, { className: 'h-4 w-4' }),
                                })
                              : null,
                            (null == x ? void 0 : x.length) > 0 && (0, m.jsx)(eP, { referralCodes: x }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          : null;
      }
      var eS = function (e) {
          return ''.concat(window.location.host, '/invite/').concat(e);
        },
        eP = function (e) {
          var t = e.referralCodes,
            a = (0, C.useRef)(null);
          return (0, m.jsx)('div', {
            className: 'mt-2 flow-root',
            children: (0, m.jsx)('div', {
              className: '-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8',
              children: (0, m.jsx)('div', {
                className: 'inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8',
                children: (0, m.jsx)('div', {
                  ref: a,
                  className: (0, Y.default)('shadow ring-1 ring-black ring-opacity-5 sm:rounded-md', {
                    'h-44 overflow-y-scroll': t.length > 4,
                    'overflow-hidden': t.length <= 4,
                  }),
                  children: (0, m.jsx)('table', {
                    className: 'min-w-full',
                    children: (0, m.jsx)('tbody', {
                      className: 'divide-y divide-gray-200 bg-white dark:divide-gray-900 dark:bg-gray-800',
                      children: t
                        .sort(function (e, t) {
                          var a = { activated: 0, created: 1, claimed: 2, subscription_granted: 3 },
                            i = e.status,
                            n = t.status;
                          return a[i] < a[n]
                            ? -1
                            : a[i] > a[n]
                              ? 1
                              : e.updated_at > t.updated_at
                                ? -1
                                : e.updated_at < t.updated_at
                                  ? 1
                                  : 0;
                        })
                        .map(function (e) {
                          return (0, m.jsx)(eR, { tableRef: a, referralCode: e }, e.id);
                        }),
                    }),
                  }),
                }),
              }),
            }),
          });
        },
        eR = function (e) {
          var t,
            a = e.referralCode,
            i = e.tableRef,
            n = (0, S.Z)(),
            o = (0, C.useRef)(null),
            l = (0, d._)((0, C.useState)(!1), 2),
            c = l[0],
            x = l[1],
            g = (0, d._)((0, C.useState)(!1), 2),
            h = g[0],
            v = g[1],
            y = (0, ej.NL)(),
            k = (0, eC.D)({
              mutationFn: function () {
                return E.ZP.postActivateReferralInvite(a.id);
              },
              onSettled: function () {
                y.invalidateQueries({ queryKey: ['referralInvites'] }), x(!1);
              },
              onError: (0, s._)(function () {
                return (0, u.Jh)(this, function (e) {
                  return es.m.danger(n.formatMessage(eF.activateReferralError)), [2];
                });
              }),
              onSuccess: function (e) {
                x(!1);
                var t,
                  a,
                  s = e.invite_code;
                navigator.clipboard.writeText(eS(null != s ? s : '')),
                  v(!0),
                  null === (t = o.current) || void 0 === t || t.select(),
                  es.m.success(n.formatMessage(eF.copiedReferralToastMessage, { referralInviteCode: s }), {
                    duration: 3,
                    hasCloseButton: !0,
                  }),
                  null === (a = i.current) || void 0 === a || a.scrollTo(0, 0);
              },
            }).mutateAsync,
            b =
              ((t = (0, s._)(function (e) {
                var t;
                return (0, u.Jh)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      switch (e.status) {
                        case 'created':
                          return [3, 1];
                        case 'activated':
                          return [3, 3];
                        case 'claimed':
                          return [3, 4];
                        case 'subscription_granted':
                          return [3, 5];
                      }
                      return [3, 6];
                    case 1:
                      return (
                        x(!0),
                        e_.m9.logEvent('chatgpt_referral_invite_link_activated'),
                        f.A.logEvent(p.M.chatgptReferralInviteLinkActivated),
                        [4, k()]
                      );
                    case 2:
                      return a.sent(), [3, 7];
                    case 3:
                      return (
                        e_.m9.logEvent('chatgpt_referral_invite_link_copied'),
                        f.A.logEvent(p.M.chatgptReferralInviteLinkCopied),
                        navigator.clipboard.writeText(eS(null !== (t = e.code_token) && void 0 !== t ? t : '')),
                        v(!0),
                        es.m.success(
                          n.formatMessage(eF.copiedReferralToastMessage, { referralInviteCode: e.code_token }),
                          { duration: 3, hasCloseButton: !0 }
                        ),
                        [3, 7]
                      );
                    case 4:
                    case 5:
                    case 6:
                      return [3, 7];
                    case 7:
                      return [2];
                  }
                });
              })),
              function (e) {
                return t.apply(this, arguments);
              }),
            w = ''.concat(window.location.host, '/invite/');
          return (0, m.jsxs)('tr', {
            children: [
              (0, m.jsxs)('td', {
                className: 'relative w-full whitespace-nowrap py-1.5 pl-1 pr-3 text-sm text-gray-900 dark:text-white',
                children: [
                  (0, m.jsx)('input', {
                    ref: o,
                    name: 'referral-code',
                    className:
                      'block w-full border-0 bg-transparent py-1.5 pl-2 text-gray-900 shadow-none ring-0 ring-inset placeholder:text-gray-600 focus:ring-0 focus:ring-inset dark:text-white placeholder:dark:text-white sm:text-sm',
                    disabled: 'activated' != a.status,
                    value: 'created' == a.status || 'subscription_granted' == a.status ? '' : eS(a.code_token),
                  }),
                  (0, m.jsxs)('span', {
                    className: 'absolute top-3 flex items-center pl-2 text-gray-700  dark:text-white',
                    children: [
                      'created' == a.status &&
                        (0, m.jsxs)('span', {
                          children: [
                            w,
                            (0, m.jsx)('span', {
                              className: 'select-none text-gray-400  dark:text-gray-300',
                              children: '•••••••',
                            }),
                          ],
                        }),
                      'subscription_granted' == a.status &&
                        (0, m.jsx)('span', {
                          className: 'select-none line-through opacity-25',
                          children: eS(a.code_token),
                        }),
                    ],
                  }),
                ],
              }),
              (0, m.jsx)('td', {
                className: 'relative whitespace-nowrap py-1.5 pl-3 pr-2 text-right text-sm font-medium sm:pr-2',
                children: (0, m.jsx)(G.z, {
                  disabled: c || 'claimed' == a.status || 'subscription_granted' == a.status,
                  loading: c,
                  as: 'button',
                  type: 'button',
                  onClick: function () {
                    return b(a);
                  },
                  color: 'created' == a.status ? 'primary' : 'light',
                  className: (0, Y.default)('w-20 rounded-sm py-1 text-sm', {
                    'bg-brand-green/20 text-green-700 hover:bg-brand-green/30 dark:bg-brand-green/50 dark:text-green-100 dark:hover:bg-brand-green/40':
                      'activated' == a.status,
                    '!bg-gray-200 ': 'subscription_granted' == a.status,
                  }),
                  children: (0, m.jsx)('span', {
                    className: 'flex flex-row items-center',
                    children:
                      'created' == a.status
                        ? (0, m.jsx)(I.Z, (0, r._)({}, eF.referralActivate))
                        : 'activated' == a.status
                          ? h
                            ? (0, m.jsx)(I.Z, (0, r._)({}, eF.referralCopied))
                            : (0, m.jsx)(I.Z, (0, r._)({}, eF.referralCopy))
                          : 'claimed' == a.status
                            ? (0, m.jsx)(I.Z, (0, r._)({}, eF.referralClaimed))
                            : 'subscription_granted' == a.status
                              ? (0, m.jsx)(I.Z, (0, r._)({}, eF.referralClaimed))
                              : null,
                  }),
                }),
              }),
            ],
          });
        },
        eF = (0, N.vU)({
          modalTitle: {
            id: 'InviteReferralModal.modalTitle',
            description: 'Description for the invite referral modal',
            defaultMessage: 'Refer a friend',
          },
          inviteFormTitle: {
            id: 'InviteReferralModal.inviteFormTitle',
            description: 'Title for the invite referral form',
            defaultMessage: 'Emails',
          },
          invitePlaceholder: {
            id: 'InviteReferralModal.invitePlaceholder',
            description: 'List of placeholder emails for the invite referral form',
            defaultMessage: 'friend@openai.com, friend2@openai.com...',
          },
          referralActivate: {
            id: 'InviteReferralModal.referralActivate',
            description: 'Button label for activating a referral code',
            defaultMessage: 'Copy',
          },
          referralCopy: {
            id: 'InviteReferralModal.referralCopy',
            description: 'Button label for copying a referral code',
            defaultMessage: 'Copy',
          },
          referralCopied: {
            id: 'InviteReferralModal.referralCopied',
            description: 'Button label for when a referral code is copied',
            defaultMessage: 'Copied',
          },
          referralClaimed: {
            id: 'InviteReferralModal.referralClaimed',
            description: 'Disabled state for claimed referral code',
            defaultMessage: 'Claimed',
          },
          inviteDescription: {
            id: 'InviteReferralModal.inviteDescription',
            description: 'Description text for the invite referral modal',
            defaultMessage: 'Share ChatGPT Plus with your friends!',
          },
          inviteDescriptionFollowUp: {
            id: 'InviteReferralModal.inviteDescriptionFollowUp',
            description: 'Description follow up text for the invite referral modal',
            defaultMessage:
              'Activate and copy the referral links below to share ChatGPT Plus with your friends, giving them access to a free trial!',
          },
          inviteRemaining: {
            id: 'InviteReferralModal.inviteRemaining',
            description: 'Description of invites remaining for the invite referral modal',
            defaultMessage: '{remainingInviteCount} available',
          },
          usersInvited: {
            id: 'InviteReferralModal.usersInvited',
            description: 'Description of users invited for the invite referral modal',
            defaultMessage: '<showcaseValue>{usersInviteCount}</showcaseValue><description>users invited</description>',
          },
          referralCodeLabel: {
            id: 'InviteReferralModal.referralCodeLabel',
            description: 'Label for the referral code input field',
            defaultMessage: 'Links',
          },
          sendInviteCta: {
            id: 'InviteReferralModal.sendInviteCta',
            description: 'Button text for the invite referral modal',
            defaultMessage: 'Send invites',
          },
          clickToActivateString: {
            id: 'InviteReferralModal.clickToActivateString',
            description: 'Text for the activate referral invite action referral modal',
            defaultMessage: 'chat.openai.com/invite/<codeStyle>•••••••</codeStyle>',
          },
          clickToCopyString: {
            id: 'InviteReferralModal.clickToCopyString',
            description: 'Text for clicking to copy invite action referral modal',
            defaultMessage: 'Click to copy',
          },
          copiedReferralToastMessage: {
            id: 'InviteReferralModal.copiedReferralToastMessage',
            description: 'Toast text to display when copying a referral invite code',
            defaultMessage:
              'Your referral link {referralInviteCode} has been copied to your clipboard. Share it with your friends!',
          },
          activateReferralError: {
            id: 'InviteReferralModal.activateReferralError',
            description: 'Text to display when activating a referral invite fails',
            defaultMessage: 'Failed to accept referral invite. Please try again.',
          },
        }),
        eE = a(69789),
        eA = a(94486),
        eL = a(43178),
        eD = a(17314);
      function eZ() {
        var e,
          t,
          a,
          i,
          n,
          s,
          o = (0, S.Z)(),
          l =
            ((t = (e = (0, eA.S)()).isLoggedInWithMfa),
            (a = e.isUsernamePassword),
            (i = e.setupMfa),
            (s = (n = (0, eD.p0)()).filter(function (e) {
              return !('none' === e.manifest.auth.type || 'service_http' === e.manifest.auth.type);
            })),
            (t || !a) && (s = []),
            {
              disablePluginsThatWeCantUse: function () {
                var e = n.filter(function (e) {
                  return 'none' === e.manifest.auth.type || 'service_http' === e.manifest.auth.type;
                });
                (0, eD.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              },
              pluginsWeCantUse: s,
              setupMfa: i,
            }),
          d = l.disablePluginsThatWeCantUse,
          c = l.pluginsWeCantUse,
          u = l.setupMfa,
          x = (0, C.useCallback)(
            function () {
              d();
            },
            [d]
          );
        return 0 === c.length
          ? null
          : (0, m.jsx)(W.Z, {
              isOpen: !0,
              onClose: x,
              title: (0, m.jsx)(I.Z, (0, r._)({}, eB.title)),
              primaryButton: (0, m.jsx)(Q.ZP.Button, {
                onClick: u,
                title: o.formatMessage(eB.primaryButtonTitle),
                color: 'primary',
              }),
              secondaryButton: (0, m.jsx)(Q.ZP.Button, { onClick: d, title: o.formatMessage(eB.secondaryButtonTitle) }),
              type: 'danger',
              children: (0, m.jsx)('div', {
                className: 'flex flex-col gap-2 py-4',
                children: c.map(function (e) {
                  return (0, m.jsx)('div', { className: 'w-full', children: (0, m.jsx)(eL.Z, { plugin: e }) }, e.id);
                }),
              }),
            });
      }
      var eB = (0, N.vU)({
          title: {
            id: 'RequireMfaForAuthPluginsModal.title',
            description: 'Title for the Require MFA for Auth Plugins modal',
            defaultMessage: 'Some of your plugins require two-factor authentication.',
          },
          primaryButtonTitle: {
            id: 'RequireMfaForAuthPluginsModal.primaryButtonTitle',
            description: 'Title for the primary button to set up two-factor authentication',
            defaultMessage: 'Setup two-factor authentication',
          },
          secondaryButtonTitle: {
            id: 'RequireMfaForAuthPluginsModal.secondaryButtonTitle',
            description: 'Title for the secondary button to disable plugins',
            defaultMessage: 'Turn off the plugins',
          },
        }),
        eq = a(83453);
      function ez(e) {
        var t = e.isOpen,
          a = e.onClose,
          i = (0, C.useCallback)(
            function () {
              f.A.logEvent(p.M.closeAccountPaymentModal), a();
            },
            [a]
          );
        return (0, m.jsx)(Q.ZP.Root, {
          isOpen: t,
          onClose: i,
          shouldIgnoreClickOutside: !0,
          children: (0, m.jsx)(Q.ZP.Overlay, {
            children: (0, m.jsx)(Q.ZP.Content, {
              className: 'focus-none !bg-transparent !shadow-none outline-none md:w-[672px] lg:w-[896px] xl:w-[1024px]',
              children: (0, m.jsx)('div', {
                className: 'focus-none flex h-full flex-col items-center justify-start outline-none',
                children: (0, m.jsx)('div', {
                  className: 'relative w-full',
                  children: (0, m.jsxs)('div', {
                    className:
                      'flex grow flex-col items-start justify-center overflow-hidden rounded-md border bg-white shadow-md dark:border-gray-700 dark:bg-gray-900',
                    children: [
                      (0, m.jsxs)('div', {
                        className:
                          'flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700',
                        children: [
                          (0, m.jsx)('span', {
                            className: 'text-base font-semibold sm:text-base',
                            children: (0, m.jsx)(I.Z, (0, r._)({}, eU.modalTitle)),
                          }),
                          (0, m.jsx)('button', {
                            className: 'text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white',
                            onClick: i,
                            children: (0, m.jsx)(_.q5L, { className: 'h-6 w-6' }),
                          }),
                        ],
                      }),
                      (0, m.jsx)('div', {
                        className: 'grid w-full',
                        children: (0, m.jsx)('div', {
                          className: 'relative w-full ',
                          children: (0, m.jsx)('div', { id: 'embedded-checkout-modal' }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      }
      var eU = (0, N.vU)({
          modalTitle: {
            id: 'EmbeddedPaymentModal.modalTitle',
            description: 'Title for the payment page modal',
            defaultMessage: 'Your plan',
          },
        }),
        eO = a(59517),
        eV = a(26003),
        eG = a(6013),
        eH = a(38574),
        eQ = a(43477),
        eW = a(78103),
        e$ = (0, C.createContext)(),
        eJ = function (e) {
          return (0, eW.oR)((0, C.useContext)(e$), e);
        },
        eY = a(93028),
        eK = a(45048);
      function eX(e) {
        return e.some(function (e) {
          return e.messages.some(function (e) {
            var t, a, i, n;
            return (
              (null == (i = null === (t = e.message.metadata) || void 0 === t ? void 0 : t.aggregate_result)
                ? void 0
                : null === (a = i.messages) || void 0 === a
                  ? void 0
                  : a.some(eK.O1)) || ('parts' in (n = e.message.content) ? n.parts.join('') : '').includes('sandbox:')
            );
          });
        });
      }
      var e0 = function (e) {
          var t = e.children,
            a = e.color,
            i = void 0 === a ? 'yellow' : a,
            n = e.icon;
          return (0, m.jsxs)('div', {
            className: (0, Y.default)('mb-4 flex items-start justify-start gap-2.5 rounded-md p-4 last:mb-0', {
              'bg-yellow-300 text-[#756B5C]': 'yellow' === i,
              'bg-gray-50 text-gray-800 dark:bg-[#444654] dark:text-gray-100': 'gray' === i,
            }),
            children: [null != n && (0, m.jsx)(n, { className: 'icon-sm mt-1 flex-shrink-0' }), t],
          });
        },
        e9 = a(70737),
        e1 = a(97296),
        e2 = a(22584),
        e5 = a(40803),
        e3 = a(95552),
        e6 = a.n(e3),
        e4 = a(35265),
        e7 = a(61802),
        e8 = a(67568),
        te = a(10499),
        tt = a(28924);
      function ta() {
        var e = (0, c._)(['h-36 md:h-48 flex-shrink-0']);
        return (
          (ta = function () {
            return e;
          }),
          e
        );
      }
      function ti() {
        var e = (0, c._)([
          'cursor-pointer absolute z-10 rounded-full gizmo:bg-clip-padding border text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200\n',
          '',
        ]);
        return (
          (ti = function () {
            return e;
          }),
          e
        );
      }
      function tn() {
        var e = (0, c._)(['\n  ', '\n  dark:hover:text-gray-200 hover:text-gray-950\n']);
        return (
          (tn = function () {
            return e;
          }),
          e
        );
      }
      function ts() {
        var e = (0, c._)(['mx-auto mt-2 inline-flex rounded-xl border border-gray-100 dark:border-gray-700\n', '\n']);
        return (
          (ts = function () {
            return e;
          }),
          e
        );
      }
      var tr = (0, N.vU)({
        advancedDataAnalysisSupportDisclaimer: {
          id: 'sharedConversation.advancedDataAnalysisSupportDisclaimer',
          defaultMessage:
            'This chat contains files or images produced by Advanced Data Analysis which are not yet visible in Shared Chats.',
          description:
            'Disclaimer about our lack of support for Advanced Data Analysis inline images and file downloads with shared links',
        },
        personalizedDataDisclaimer: {
          id: 'sharedConversation.personalizedDataDisclaimer',
          defaultMessage:
            'This conversation may reflect the link creator’s personalized data, which isn’t shared and can meaningfully change how the model responds.',
          description:
            "Disclaimer about the creator's personalized data (ex: Custom Instructions, memory) not being part of the shared conversation",
        },
        ratingThanks: {
          id: 'rating.thanks',
          defaultMessage: 'Thanks for your feedback!',
          description: 'Thank the user for their rating',
        },
        ratingInstructions: {
          id: 'rating.instructions',
          defaultMessage: 'Is this conversation helpful so far?',
          description: 'Ask the user for their rating of the conversation so far',
        },
      });
      function to(e) {
        var t = e.clientThreadId,
          a = (0, L.qA)(t),
          i = (0, L.je)(t),
          n = (0, L.qN)(function (e) {
            return L.iN.getThreadCreateTime(t, e);
          }),
          s = (0, L.oq)(t),
          r = (0, L.JI)(t, s),
          o = (0, C.useMemo)(
            function () {
              return eX(r);
            },
            [r]
          ),
          l = (0, L.aS)(t),
          d = (0, L.eY)(t);
        return (0, m.jsxs)('div', {
          className: 'border-b border-gray-100 pb-4 pt-3 sm:mb-2 sm:pb-6 sm:pt-8',
          children: [
            (0, m.jsx)('h1', {
              className: 'text-3xl font-semibold leading-tight text-gray-700 dark:text-gray-100 sm:text-4xl',
              children: a,
            }),
            (null != i || null != n) &&
              (0, m.jsxs)('div', {
                className: 'pt-3 text-base text-gray-400 sm:pt-4',
                children: [
                  null != i && (0, m.jsx)('span', { children: i }),
                  null != i && null != n && (0, m.jsx)('span', { className: 'px-2', children: '•' }),
                  null != n && (0, m.jsx)(N.Ji, { value: n, month: 'long', year: 'numeric', day: 'numeric' }),
                ],
              }),
            (0, m.jsx)(tl, { shouldShowCodeInterpreterDisclaimer: o, shouldShowPersonalizedDataDisclaimer: l || d }),
          ],
        });
      }
      var tl = function (e) {
        var t = e.shouldShowCodeInterpreterDisclaimer,
          a = e.shouldShowPersonalizedDataDisclaimer;
        return (0, m.jsxs)(m.Fragment, {
          children: [
            t &&
              (0, m.jsx)('div', {
                className: 'mt-4',
                children: (0, m.jsx)(e0, {
                  icon: _.H33,
                  color: 'gray',
                  children: (0, m.jsx)(I.Z, (0, r._)({}, tr.advancedDataAnalysisSupportDisclaimer)),
                }),
              }),
            a &&
              (0, m.jsx)('div', {
                className: 'mt-4',
                children: (0, m.jsx)(e0, {
                  icon: _.H33,
                  color: 'gray',
                  children: (0, m.jsx)(I.Z, (0, r._)({}, tr.personalizedDataDisclaimer)),
                }),
              }),
          ],
        });
      };
      function td(e) {
        var t = e.onChangeItemInView,
          a = e.onRequestMoreCompletions,
          i = e.onChangeRating,
          n = e.onRequestCompletion,
          s = e.clientThreadId,
          r = e.conversationLeafId,
          o = e.currentThreadModel,
          l = e.inlineEmbeddedDisplay,
          c = e.initiallyHighlightedMessageId,
          u = e.hideHeader,
          x = null !== (0, C.useContext)(q.gB),
          g = (0, e5.useScrollToBottom)(),
          h = (0, d._)((0, e5.useSticky)(), 1)[0],
          f = (0, ew.Ml)(),
          p = (0, D.H)().isBetaFeaturesUiEnabled,
          v = (0, B.$T)(),
          y = (0, te.Xy)(o, s),
          k = (0, tt.Ri)(y.id),
          b = (0, L.U0)(s, r),
          w = (0, J._)(Array(b).keys()).map(function (e) {
            return (0, m.jsx)(
              ei.Z,
              {
                isFinalTurn: e === b - 1,
                turnIndex: e,
                clientThreadId: s,
                conversationLeafId: r,
                onChangeItemInView: t,
                onChangeRating: i,
                onRequestMoreCompletions: a,
                onRequestCompletion: n,
                currentModelId: y.id,
                showInlineEmbeddedDisplay: l,
                initiallyHighlightedMessageId: c,
                avatarColor: null == k ? void 0 : k.backgroundColor,
              },
              e
            );
          });
        return (0, m.jsxs)('div', {
          className: 'flex flex-col text-sm gizmo:pb-9 dark:bg-gray-800 gizmo:dark:bg-transparent',
          children: [
            !u &&
              (x || !v) &&
              !l &&
              (0, m.jsx)(e7.B, {
                icon: p ? (null == k ? void 0 : k.icon) : void 0,
                currentModelConfig: y,
                clientThreadId: s,
              }),
            x &&
              !l &&
              (0, m.jsx)('div', {
                className: 'mx-auto w-full p-4 md:max-w-2xl md:px-0 lg:max-w-[38rem] xl:max-w-3xl',
                children: (0, m.jsx)(to, { clientThreadId: s }),
              }),
            w,
            (0, m.jsx)(th, { clientThreadId: s, conversationLeafId: r }),
            !l && !f && (0, m.jsx)(tc, {}),
            !h &&
              !l &&
              (0, m.jsx)(tu, {
                $isGizmoUIEnabled: f,
                onClick: g,
                children: f
                  ? (0, m.jsx)(e4.Hg, { className: 'm-1 text-black dark:text-white' })
                  : (0, m.jsx)(_.tv1, { className: 'icon-sm m-1' }),
              }),
          ],
        });
      }
      var tc = P.Z.div(ta()),
        tu = P.Z.button(ti(), function (e) {
          return e.$isGizmoUIEnabled
            ? 'right-1/2 border-black/10 bg-token-surface-primary bottom-5'
            : 'right-6 bottom-[124px] md:bottom-[180px] gizmo:md:bottom-[143px] lg:bottom-[120px] border-gray-200 bg-gray-50';
        }),
        tm = P.Z.button(tn(), function (e) {
          return e.$selected ? 'text-gray-950 dark:text-gray-100' : 'text-gray-400 dark:text-gray-400';
        }),
        tx = P.Z.div(ts(), function (e) {
          return e.$padded && 'py-3 px-4';
        }),
        tg = [1, 2, 3, 4];
      function th(e) {
        var t = e.clientThreadId,
          a = e.conversationLeafId,
          i = (0, B.ec)(B.F_.isBusinessWorkspace),
          n = (0, L.XK)(t),
          s = (0, e8.WA)(t),
          o = (0, C.useMemo)(
            function () {
              if (!n) return -1;
              var e = e6()(n);
              return e() > 0.5 ? -1 : tg[Math.floor(e() * tg.length)];
            },
            [n]
          ),
          l = (0, L.JI)(t, a),
          c = l[l.length - 1],
          u = (0, C.useMemo)(
            function () {
              return et.Cv.getRequestIdFromConversationTurn(c);
            },
            [c]
          ),
          x = (0, H.Yk)(u),
          g = (0, d._)((0, C.useState)(null), 2),
          h = g[0],
          f = g[1],
          p = (0, d._)((0, C.useState)(!1), 2),
          v = p[0],
          y = p[1],
          k = (0, d._)((0, C.useState)(!1), 2),
          b = k[0],
          w = k[1],
          M = (0, d._)((0, C.useState)(!1), 2),
          j = M[0],
          _ = M[1],
          T = (0, C.useMemo)(
            function () {
              return (0, ev.debounce)(function (e, t) {
                n &&
                  e &&
                  E.ZP.submitConversationRating({
                    conversation_id: n,
                    message_id: e,
                    rating: t,
                    shown_at_assistant_turn: o,
                  }),
                  y(!0),
                  setTimeout(function () {
                    w(!0);
                  }, 1500);
              }, 2e3);
            },
            [n, o]
          ),
          N = function (e) {
            var t,
              a,
              i =
                null === (t = null === (a = (0, ev.last)(l)) || void 0 === a ? void 0 : a.messages[0]) || void 0 === t
                  ? void 0
                  : t.message.id;
            f(e), T(i, e);
          },
          S = l.filter(function (e) {
            return e.role === F.uU.Assistant;
          }).length,
          P = (null == c ? void 0 : c.role) === F.uU.Assistant;
        return S !== o || x || !P || i || s.kind !== F.OL.PrimaryAssistant || j
          ? null
          : (0, m.jsxs)('div', {
              className: 'mx-auto',
              children: [
                (0, m.jsx)(e9.M, {
                  children:
                    v &&
                    !b &&
                    (0, m.jsx)(
                      e1.E.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.2 },
                        children: (0, m.jsx)(tx, {
                          $padded: !0,
                          children: (0, m.jsx)('span', {
                            className: 'text-sm text-token-text-tertiary',
                            children: (0, m.jsx)(I.Z, (0, r._)({}, tr.ratingThanks)),
                          }),
                        }),
                      },
                      'submitted'
                    ),
                }),
                !v &&
                  (0, m.jsx)(
                    e1.E.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.1 },
                      children: (0, m.jsxs)(tx, {
                        $padded: !1,
                        children: [
                          (0, m.jsxs)('div', {
                            className:
                              'flex items-center justify-center gap-4 px-4 py-3 text-sm text-token-text-tertiary',
                            children: [
                              (0, m.jsx)(I.Z, (0, r._)({}, tr.ratingInstructions)),
                              (0, m.jsxs)('div', {
                                className: 'flex items-center gap-5',
                                children: [
                                  (0, m.jsx)(tm, {
                                    $selected: 'thumbsUp' === h,
                                    onClick: function () {
                                      return N('thumbsUp');
                                    },
                                    children: (0, m.jsx)(e4.ib, {}),
                                  }),
                                  (0, m.jsx)(tm, {
                                    $selected: 'thumbsDown' === h,
                                    onClick: function () {
                                      return N('thumbsDown');
                                    },
                                    children: (0, m.jsx)(e4.Q7, {}),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, m.jsx)('div', { className: 'w-px flex-1 self-stretch bg-gray-100 dark:bg-gray-700' }),
                          (0, m.jsx)(tm, {
                            className: 'p-3',
                            $selected: !1,
                            onClick: function () {
                              return _(!0);
                            },
                            children: (0, m.jsx)(e2.bjh, { className: 'icon-sm' }),
                          }),
                        ],
                      }),
                    },
                    'rating'
                  ),
              ],
            });
      }
      function tf() {
        var e = (0, c._)(['relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch']);
        return (
          (tf = function () {
            return e;
          }),
          e
        );
      }
      function tp() {
        var e = (0, c._)(['grow flex-1 overflow-hidden']);
        return (
          (tp = function () {
            return e;
          }),
          e
        );
      }
      function tv() {
        var e = (0, c._)([
          'w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50',
        ]);
        return (
          (tv = function () {
            return e;
          }),
          e
        );
      }
      function ty() {
        var e = (0, c._)([
          'flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full\n',
          '\n',
        ]);
        return (
          (ty = function () {
            return e;
          }),
          e
        );
      }
      function tk() {
        var e = (0, c._)(['flex w-full items-center justify-left gap-2 min-h-[1.5rem]']);
        return (
          (tk = function () {
            return e;
          }),
          e
        );
      }
      function tb() {
        var e = (0, c._)([
          'border-none focus:ring-gray-200 dark:focus:ring-gray-600 bg-transparent py-0.5 -my-0.5 pl-1 -ml-1 w-full',
        ]);
        return (
          (tb = function () {
            return e;
          }),
          e
        );
      }
      function tw() {
        var e = (0, c._)(['flex-none h-full mt-auto mb-auto']);
        return (
          (tw = function () {
            return e;
          }),
          e
        );
      }
      var tM = (0, N.vU)({
        sharingModalTitle: {
          id: 'thread.sharingModal.title',
          defaultMessage: 'Share link to Chat',
          description: 'Title of sharing feature in the title of the sharing modal',
        },
        sharingModalDescription: {
          id: 'sharingModal.description',
          defaultMessage:
            "Messages you send after creating your link won't be shared. Anyone with the URL will be able to view the shared chat.",
          description: 'Description of sharing feature in the first paragraph of the sharing modal',
        },
        sharingModalBizDescription: {
          id: 'sharingModal.bizDescription.1',
          defaultMessage:
            'Only members of your workspace with the URL will see the latest messages sent in this conversation. Files you attach to the conversation will not be shared, but any file contents referenced in messages will continue to be visible.',
          description: 'Description of sharing feature in the first paragraph of the sharing modal',
        },
        existingShareDescription: {
          id: 'sharingModal.exisitingDescription',
          defaultMessage:
            'You have shared this chat <existingLink>before</existingLink>. If you want to update the shared chat content, <deleteLink>delete this link</deleteLink> and create a new shared link.',
          description: 'Description in sharing modal when viewing an existing link',
        },
        sharingModalMoreInfo: {
          id: 'thread.sharingModal.moreInfo',
          defaultMessage: 'More Info',
          description: 'Link to a helpdesk article with more information about the sharing modal',
        },
        moderationBlocked: {
          id: 'sharingModal.moderationBlocked',
          defaultMessage: 'This shared link has been disabled by moderation.',
          description: 'Error message in sharing modal when shared link has been moderated.',
        },
        confirmCloseWithChanges: {
          id: 'thread.sharingModal.confirmCloseWithChanges',
          defaultMessage: 'You have unsaved changes. Do you want to continue?',
          description: 'Confirmation message when closing share modal with changes',
        },
        confirmDeleteLink: {
          id: 'sharingModal.confirmDeleteLink',
          defaultMessage: 'Are you sure you want to delete the share link?',
          description: 'Confirmation message when deleting share link',
        },
        advancedDataAnalysisSupportDisclaimer: {
          id: 'sharingModal.advancedDataAnalysisSupportDisclaimer',
          defaultMessage: 'Recipients won’t be able to view Advanced Data Analysis images or download files.',
          description:
            'Disclaimer about our lack of support for Advanced Data Analysis inline images and file downloads with shared links',
        },
        personalizedDataDisclaimer: {
          id: 'sharingModal.personalizedDataDisclaimer',
          defaultMessage:
            'Any personalized data not present in the conversation won’t be shared with viewers (ex: Custom Instructions).',
          description: 'Disclaimer about our policy to not share personalized data (ex: Custom Instructions, memory)',
        },
        copied: {
          id: 'thread.sharingModal.copied',
          defaultMessage: 'Copied!',
          description: 'Status message after successfully copying the shared link',
        },
        copying: {
          id: 'thread.sharingModal.copying',
          defaultMessage: 'Copying...',
          description: 'Status message while copying the shared link',
        },
        updateAndCopyLink: {
          id: 'thread.sharingModal.updateAndCopyLink',
          defaultMessage: 'Update and Copy Link',
          description: 'Button text to update and copy the shared link',
        },
        shareYourName: {
          id: 'sharingModal.shareYourName',
          defaultMessage: 'Share your name',
          description: "Button text to change sharing to show the user's name",
        },
        shareAnonymously: {
          id: 'sharingModal.shareAnonymously',
          defaultMessage: 'Share anonymously',
          description: 'Button text to change sharing to be anonymous',
        },
        deleteLink: {
          id: 'sharingModal.deleteLink',
          defaultMessage: 'Delete Link',
          description: 'Button text to delete the share link',
        },
        failedToCopyLink: {
          id: 'thread.sharingModal.failedToCopyLink',
          defaultMessage: 'Failed to copy link to clipboard',
          description: 'Error message when failing to copy link to clipboard',
        },
        copyLink: {
          id: 'thread.sharingModal.copyLink',
          defaultMessage: 'Copy Link',
          description: 'Button text to copy the shared link',
        },
        copiedSharedConversationURL: {
          id: 'thread.sharingModal.copiedSharedConversationURL',
          defaultMessage: 'Copied shared conversation URL to clipboard!',
          description: 'Success message when shared conversation URL is copied',
        },
        failedToDeleteSharedLink: {
          id: 'thread.sharingModal.failedToDeleteSharedLink',
          defaultMessage: 'Failed to delete shared link',
          description: 'Error message when failing to delete shared link',
        },
      });
      function tj(e) {
        var t = e.serverThreadId,
          a = (0, L.oq)(t),
          i = (0, d._)(
            (0, C.useState)(function () {
              return (0, eQ.Z)(function (e, t) {
                return {
                  title: void 0,
                  highlightedMessageId: void 0,
                  initiallyHighlightedMessageId: void 0,
                  currentNodeId: void 0,
                  shareLinkId: void 0,
                  shareLinkUrl: void 0,
                  isPublic: !1,
                  isDeleted: !1,
                  isAnonymous: !0,
                  linkAlreadyExisted: !1,
                  linkError: void 0,
                  moderationState: void 0,
                };
              });
            }),
            1
          )[0],
          n = !(0, H.B$)() && 'root' !== a,
          s = (0, C.useRef)(!1);
        return (
          (0, C.useEffect)(
            function () {
              if (n && !s.current) {
                s.current = !0;
                var e = L.tQ.getThreadCurrentLeafId(t),
                  a = L.tQ.getTree(t).getMessageId(e);
                E.ZP.createShareLink({ current_node_id: a, conversation_id: t, is_anonymous: !0 })
                  .then(function (e) {
                    i.setState({
                      shareLinkId: e.share_id,
                      shareLinkUrl: e.share_url,
                      isPublic: e.is_public,
                      isDeleted: !e.is_visible,
                      title: e.title,
                      highlightedMessageId: e.highlighted_message_id,
                      initiallyHighlightedMessageId: e.highlighted_message_id,
                      currentNodeId: e.current_node_id,
                      linkAlreadyExisted: e.already_exists,
                      isAnonymous: e.is_anonymous,
                      moderationState: e.moderation_state,
                    });
                  })
                  .catch(function (e) {
                    e instanceof eY.Q0 && 'string' == typeof e.message
                      ? i.setState({ linkError: e.message })
                      : (es.m.danger('Failed to copy link to clipboard - could not create link'),
                        Z.vm.closeSharingModal());
                  });
              }
            },
            [n]
          ),
          (0, m.jsx)(e$.Provider, { value: i, children: (0, m.jsx)(t_, (0, r._)({}, e)) })
        );
      }
      function tC(e) {
        return !0 === e.has_been_auto_blocked || !0 === e.has_been_auto_moderated || !0 === e.has_been_blocked;
      }
      function t_(e) {
        var t,
          a,
          i,
          n,
          l = e.serverThreadId,
          c = e.currentThreadModel,
          x = function () {
            (!ec || window.confirm(g.formatMessage(tM.confirmCloseWithChanges))) && Z.vm.closeSharingModal();
          },
          g = (0, S.Z)(),
          h = (0, C.useRef)(null),
          f = (0, d._)((0, C.useState)(!1), 2),
          p = f[0],
          v = f[1],
          y = (0, d._)((0, C.useState)(!1), 2),
          k = y[0],
          b = y[1],
          w = (0, d._)((0, C.useState)(!1), 2),
          M = w[0],
          j = w[1],
          P = (0, C.useContext)(e$),
          R = eJ(function (e) {
            return e.title;
          }),
          F = eJ(function (e) {
            return e.shareLinkId;
          }),
          A = eJ(function (e) {
            return e.shareLinkUrl;
          }),
          D = eJ(function (e) {
            return e.isAnonymous;
          }),
          z = eJ(function (e) {
            return e.initiallyHighlightedMessageId;
          }),
          U = eJ(function (e) {
            return e.currentNodeId;
          }),
          O = eJ(function (e) {
            return e.isPublic;
          }),
          V =
            eJ(function (e) {
              return e.linkAlreadyExisted;
            }) && O,
          H = eJ(function (e) {
            return e.linkError;
          }),
          $ = eJ(function (e) {
            return e.moderationState;
          }),
          J = null != $ && tC($),
          K = (0, B.ec)(B.F_.isBusinessWorkspace),
          ee = (0, L.oq)(l),
          et = (0, C.useRef)(),
          ea = (0, C.useRef)();
        (0, C.useEffect)(
          function () {
            V && ((et.current = R), (ea.current = D));
          },
          [V]
        );
        var ei = (0, B.aF)(),
          en = (0, L.JI)(l, null != U ? U : ee),
          er = (0, C.useMemo)(
            function () {
              return eX(en);
            },
            [en]
          ),
          eo = (0, L.aS)(l),
          el = (0, L.eY)(l),
          ed =
            ((t = (0, s._)(function (e, t) {
              var a, i, n, s, r, o, l;
              return (0, u.Jh)(this, function (d) {
                switch (d.label) {
                  case 0:
                    b(!0),
                      (i = (a = P.getState()).highlightedMessageId),
                      (n = a.title),
                      (s = a.isDeleted),
                      (r = a.isAnonymous);
                    try {
                      (0, eH.S)(t);
                    } catch (e) {
                      return es.m.warning(g.formatMessage(tM.failedToCopyLink)), b(!1), [2];
                    }
                    d.label = 1;
                  case 1:
                    return (
                      d.trys.push([1, 3, 4, 5]),
                      [
                        4,
                        E.ZP.updateShareLink({
                          share_id: e,
                          highlighted_message_id: i,
                          title: null != n ? n : void 0,
                          is_public: !s,
                          is_visible: !s,
                          is_anonymous: r,
                        }),
                      ]
                    );
                  case 2:
                    if (tC((o = d.sent().moderation_state))) return P.setState({ moderationState: o }), [2];
                    return (
                      P.setState({ isPublic: !0, moderationState: o }),
                      j(!0),
                      setTimeout(function () {
                        Z.vm.closeSharingModal(), es.m.success(g.formatMessage(tM.copiedSharedConversationURL));
                      }, 500),
                      [3, 5]
                    );
                  case 3:
                    return (
                      (l = d.sent()) instanceof eY.Q0 &&
                        'string' == typeof l.message &&
                        P.setState({ linkError: l.message }),
                      [3, 5]
                    );
                  case 4:
                    return b(!1), [7];
                  case 5:
                    return [2];
                }
              });
            })),
            function (e, a) {
              return t.apply(this, arguments);
            }),
          ec = V && (R !== et.current || D !== ea.current),
          eu = (0, m.jsxs)(Q.ZP.Button, {
            onClick: function () {
              return ed(F, A);
            },
            color: 'primary',
            disabled: k || M || null == F || null == A || null != H || J,
            children: [
              M
                ? (0, m.jsx)(_.LSm, { className: 'icon-sm' })
                : k
                  ? (0, m.jsx)(eN.Z, {})
                  : (0, m.jsx)(_.XKb, { className: 'icon-sm' }),
              M
                ? (0, m.jsx)(I.Z, (0, r._)({}, tM.copied))
                : k
                  ? (0, m.jsx)(I.Z, (0, r._)({}, tM.copying))
                  : ec
                    ? (0, m.jsx)(I.Z, (0, r._)({}, tM.updateAndCopyLink))
                    : (0, m.jsx)(I.Z, (0, r._)({}, tM.copyLink)),
            ],
          }),
          em = (0, C.useCallback)(
            function (e) {
              var t;
              null == e || e.preventDefault(),
                P.setState({ title: null === (t = h.current) || void 0 === t ? void 0 : t.value }),
                v(!1);
            },
            [P]
          ),
          ex = (0, C.useCallback)(
            function (e) {
              'Enter' === e.key && em();
            },
            [em]
          ),
          eg =
            ((a = (0, s._)(function () {
              return (0, u.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      E.ZP.deleteShareLink({ share_id: P.getState().shareLinkId })
                        .catch(function (e) {
                          es.m.danger(g.formatMessage(tM.failedToDeleteSharedLink));
                        })
                        .then(function () {
                          Z.vm.closeSharingModal();
                        }),
                    ];
                  case 1:
                    return e.sent(), [2];
                }
              });
            })),
            function () {
              return a.apply(this, arguments);
            }),
          eh =
            ((i = (0, s._)(function () {
              return (0, u.Jh)(this, function (e) {
                return (
                  P.setState({ isAnonymous: !0 }),
                  L.qN.setState(function (e) {
                    e.threads[l].initialThreadData.authorName = void 0;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return i.apply(this, arguments);
            }),
          ef =
            ((n = (0, s._)(function () {
              return (0, u.Jh)(this, function (e) {
                return (
                  P.setState({ isAnonymous: !1 }),
                  L.qN.setState(function (e) {
                    e.threads[l].initialThreadData.authorName = null == ei ? void 0 : ei.name;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return n.apply(this, arguments);
            }),
          ep = (0, m.jsxs)(tP, {
            $active: p,
            children: [
              (0, m.jsxs)('div', {
                className: 'flex-1 pr-1',
                children: [
                  void 0 !== R
                    ? p
                      ? (0, m.jsx)(tF, {
                          ref: h,
                          type: 'text',
                          defaultValue: null != R ? R : '',
                          autoFocus: !0,
                          onKeyDown: ex,
                          onBlur: em,
                        })
                      : (0, m.jsxs)(tR, {
                          onDoubleClick: function () {
                            return v(!0);
                          },
                          children: [
                            R,
                            p || null == R || V
                              ? null
                              : (0, m.jsx)('button', {
                                  onClick: function () {
                                    return v(!0);
                                  },
                                  className: 'text-gray-500',
                                  children: (0, m.jsx)(_.Nte, { className: 'icon-sm' }),
                                }),
                          ],
                        })
                    : (0, m.jsx)('div', { className: 'h-6' }),
                  (0, m.jsxs)('div', {
                    className: 'mt-1 text-gray-500',
                    children: [
                      !D && (0, m.jsx)('span', { children: ''.concat(null == ei ? void 0 : ei.name, ' \xb7 ') }),
                      (0, m.jsx)(N.Ji, { value: new Date(), month: 'long', day: 'numeric', year: 'numeric' }),
                    ],
                  }),
                ],
              }),
              (0, m.jsx)(tE, {
                children: (0, m.jsxs)(eG.fC, {
                  children: [
                    (0, m.jsx)(eG.xz, {
                      asChild: !0,
                      children: (0, m.jsx)(G.z, {
                        color: 'neutral',
                        className: 'mb-auto mt-auto',
                        children: (0, m.jsx)(T.JEI, {}),
                      }),
                    }),
                    (0, m.jsx)(eG.h_, {
                      children: (0, m.jsxs)(eG.VY, {
                        className: 'PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90',
                        side: 'top',
                        align: 'end',
                        children: [
                          D &&
                            (0, m.jsx)(G.z, {
                              color: 'neutral',
                              className: 'mb-2 flex w-full border-0',
                              onClick: ef,
                              children: (0, m.jsxs)('div', {
                                className: 'flex w-full items-start',
                                children: [
                                  (0, m.jsx)(_.fzv, { className: 'icon-sm float-left mb-auto mr-4 mt-auto' }),
                                  (0, m.jsx)('div', { children: (0, m.jsx)(I.Z, (0, r._)({}, tM.shareYourName)) }),
                                ],
                              }),
                            }),
                          !D &&
                            (0, m.jsx)(G.z, {
                              color: 'neutral',
                              className: 'mb-2 flex w-full border-0',
                              onClick: eh,
                              children: (0, m.jsxs)('div', {
                                className: 'flex w-full items-start',
                                children: [
                                  (0, m.jsx)(_.fzv, { className: 'icon-sm float-left mb-auto mr-4 mt-auto' }),
                                  (0, m.jsx)('div', { children: (0, m.jsx)(I.Z, (0, r._)({}, tM.shareAnonymously)) }),
                                ],
                              }),
                            }),
                          V &&
                            (0, m.jsx)(G.z, {
                              color: 'neutral',
                              className: 'mb-2 flex w-full border-0',
                              onClick: eg,
                              children: (0, m.jsxs)('div', {
                                className: 'flex w-full items-start',
                                children: [
                                  (0, m.jsx)(_.Ybf, { className: 'icon-sm float-left mb-auto mr-4 mt-auto' }),
                                  (0, m.jsx)('div', { children: (0, m.jsx)(I.Z, (0, r._)({}, tM.deleteLink)) }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          ev = H;
        return (
          null == ev &&
            ((null == $ ? void 0 : $.has_been_auto_blocked) ||
              (null == $ ? void 0 : $.has_been_auto_moderated) ||
              (null == $ ? void 0 : $.has_been_blocked)) &&
            (ev = (0, m.jsx)(I.Z, (0, r._)({}, tM.moderationBlocked))),
          (0, m.jsxs)(W.Z, {
            isOpen: !0,
            onClose: function () {
              x();
            },
            size: 'custom',
            className: 'max-w-[550px]',
            type: 'success',
            title: g.formatMessage(tM.sharingModalTitle),
            closeButton: (0, m.jsx)(Q.ZP.CloseButton, {
              onClose: function () {
                x();
              },
            }),
            children: [
              null != ev && (0, m.jsx)('div', { className: 'mb-4 rounded-md bg-red-500 p-4 text-white', children: ev }),
              (0, m.jsx)('div', {
                className: (0, Y.default)('w-full'),
                children: (0, m.jsx)('p', {
                  className: (0, Y.default)('mb-6 text-gray-500'),
                  children: V
                    ? (0, m.jsx)(
                        I.Z,
                        (0, o._)((0, r._)({}, tM.existingShareDescription), {
                          values: {
                            existingLink: function (e) {
                              return (0, m.jsx)('a', {
                                href: A,
                                target: '_blank',
                                rel: 'noreferrer',
                                className: 'underline',
                                children: e,
                              });
                            },
                            deleteLink: function (e) {
                              return (0, m.jsx)('a', {
                                href: '#',
                                onClick: function (e) {
                                  e.preventDefault(), window.confirm(g.formatMessage(tM.confirmDeleteLink)) && eg();
                                },
                                className: 'underline',
                                children: e,
                              });
                            },
                          },
                        })
                      )
                    : (0, m.jsx)(I.Z, (0, r._)({}, K ? tM.sharingModalBizDescription : tM.sharingModalDescription)),
                }),
              }),
              (0, m.jsx)(tT, {
                shouldShowCodeInterpreterDisclaimer: er,
                shouldShowPersonalizedDataDisclaimer: eo || el,
              }),
              (0, m.jsx)(tS, {
                children: (0, m.jsx)('div', {
                  className: 'flex h-full max-w-full flex-1 flex-col',
                  children: (0, m.jsx)(tN, {
                    children: (0, m.jsxs)(tI, {
                      children: [
                        (0, m.jsx)(eV.f, {
                          ratio: 1.9,
                          className: 'overflow-auto bg-white dark:bg-gray-800',
                          children:
                            null != U
                              ? (0, m.jsx)(q.gB.Provider, {
                                  value: { serverSharedThreadId: null },
                                  children: (0, m.jsx)(td, {
                                    onChangeItemInView: X(),
                                    onRequestMoreCompletions: X(),
                                    onChangeRating: X(),
                                    onRequestCompletion: X(),
                                    clientThreadId: l,
                                    conversationLeafId: U,
                                    currentThreadModel: c,
                                    inlineEmbeddedDisplay: !0,
                                    initiallyHighlightedMessageId: z,
                                  }),
                                })
                              : (0, m.jsx)('div', {
                                  className: 'flex h-full items-center justify-center',
                                  children: (0, m.jsx)(eN.Z, { className: 'text-gray-400 dark:text-gray-500' }),
                                }),
                        }),
                        ep,
                      ],
                    }),
                  }),
                }),
              }),
              (0, m.jsx)(Q.ZP.Actions, {
                isSpacedBetween: !0,
                primaryButton: eu,
                secondaryButton: (0, m.jsx)('div', {
                  children: (0, m.jsxs)('a', {
                    href: K
                      ? 'https://help.openai.com/en/articles/8474715-chatgpt-enterprise-shared-links-faq'
                      : 'https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq',
                    className: 'flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: [g.formatMessage(tM.sharingModalMoreInfo), (0, m.jsx)(_.AlO, { className: 'icon-sm' })],
                  }),
                }),
              }),
            ],
          })
        );
      }
      var tT = function (e) {
          var t = e.shouldShowCodeInterpreterDisclaimer,
            a = e.shouldShowPersonalizedDataDisclaimer;
          return (0, m.jsxs)(m.Fragment, {
            children: [
              t &&
                (0, m.jsx)(e0, {
                  icon: _.H33,
                  children: (0, m.jsx)(I.Z, (0, r._)({}, tM.advancedDataAnalysisSupportDisclaimer)),
                }),
              a &&
                (0, m.jsxs)('p', {
                  className: 'mb-6 flex flex-row gap-2.5 text-gray-500',
                  children: [
                    (0, m.jsx)(_.H33, { className: 'icon-sm mt-1 flex-shrink-0' }),
                    (0, m.jsx)(I.Z, (0, r._)({}, tM.personalizedDataDisclaimer)),
                  ],
                }),
            ],
          });
        },
        tN = P.Z.main(tf()),
        tI = P.Z.div(tp()),
        tS = P.Z.div(tv()),
        tP = P.Z.div(ty(), function (e) {
          return e.$active, '';
        }),
        tR = P.Z.div(tk()),
        tF = P.Z.input(tb()),
        tE = P.Z.div(tw()),
        tA = a(94750),
        tL = a(60478),
        tD = a(74966),
        tZ = a(76768),
        tB = a(94495),
        tq = a(12221),
        tz = a(20987),
        tU = a(73779),
        tO = a(65990);
      function tV(e) {
        var t = e.clientThreadId,
          a = e.isNewThread,
          i = e.currentModelId,
          n = e.showPromptStarters,
          s = e.onRequestCompletion,
          r = e.onNewThreadCreationFinished,
          o = e.promptTextareaRef,
          l = (0, H.B$)(),
          d = (0, L.qN)(function (e) {
            var a, i, n, s, r, o;
            return (
              (r =
                (null === (i = (a = L.iN.getCurrentNode(t, e)).message) || void 0 === i ? void 0 : i.author.role) ===
                F.uU.User),
              (o =
                (null === (n = a.metadata) || void 0 === n ? void 0 : n.err) != null &&
                (null === (s = a.metadata) || void 0 === s ? void 0 : s.errCode) !== tL.qS.ContentPolicy),
              r || o
            );
          });
        return !l && d
          ? (0, m.jsx)(tG, { clientThreadId: t })
          : (0, m.jsxs)(tZ.Z, {
              children: [
                a && (0, m.jsx)(tD.sw, {}),
                (0, m.jsx)(tH, {
                  clientThreadId: t,
                  currentModelId: i,
                  isNewThread: a,
                  showPromptStarters: n,
                  onRequestCompletion: s,
                  onNewThreadCreationFinished: r,
                  promptTextareaRef: o,
                }),
              ],
            });
      }
      function tG(e) {
        var t = e.clientThreadId,
          a = (0, tz.Z)(t),
          i = (0, e8.WA)(t),
          n = (0, L.qN)(function (e) {
            var a;
            return (null === (a = L.iN.getCurrentNode(t, e).metadata) || void 0 === a ? void 0 : a.errCode) === tq.uU;
          }),
          s = (0, tq.Y8)(function (e) {
            return e.isoDate;
          }),
          o = (0, z.w$)(),
          l = (0, L.oq)(t);
        return n && null != s && '' !== s
          ? null
          : (0, m.jsxs)('div', {
              children: [
                (0, m.jsx)('div', {
                  className: 'mb-3 text-center text-xs',
                  children: (0, m.jsx)(I.Z, (0, r._)({}, tQ.errorGeneratingResponse)),
                }),
                (0, m.jsx)('div', {
                  className: 'flex items-center md:mb-4',
                  children: (0, m.jsxs)(G.z, {
                    as: 'button',
                    color: 'primary',
                    onClick: function () {
                      a({ id: l, eventMetadata: { eventSource: 'mouse' }, conversationMode: i });
                    },
                    className: 'm-auto',
                    children: [
                      (0, m.jsx)(_.Qxo, { className: (0, Y.default)('flex-shrink-0', o ? 'icon-xs' : 'icon-sm') }),
                      (0, m.jsx)(I.Z, (0, r._)({}, tQ.regenerateResponse)),
                    ],
                  }),
                }),
              ],
            });
      }
      function tH(e) {
        var t,
          a,
          i,
          n,
          s,
          r,
          o,
          l,
          d,
          c,
          u,
          x,
          g,
          h,
          v,
          y,
          k = e.clientThreadId,
          b = e.currentModelId,
          w = e.isNewThread,
          M = e.onRequestCompletion,
          j = e.onNewThreadCreationFinished,
          _ = e.promptTextareaRef,
          T = e.showPromptStarters,
          N = (0, L.oq)(k),
          I = (0, L.Hk)(k),
          S = (0, $.i)(),
          P = (0, H.Yk)(I),
          R = (0, e8.WA)(k),
          D = (0, C.useCallback)(
            function (e) {
              f.A.logEvent(p.M.continueCompletion),
                M({
                  type: F.Os.Continue,
                  promptId: e,
                  eventMetadata: { eventSource: 'mouse' },
                  cancelActiveRequests: !1,
                  completionMetadata: { conversationMode: R },
                });
            },
            [M, R]
          ),
          Z = (0, C.useContext)(q.QL).historyDisabled,
          z = (0, C.useCallback)(
            function (e, t) {
              var a,
                i = L.tQ.getTree(k);
              i.hasReceivedServerCompletion ||
                Z ||
                (null === (a = i.getParent(t).metadata) || void 0 === a ? void 0 : a.errCode) === tL.qS.ContentPolicy ||
                setTimeout(function () {
                  j();
                }, 500),
                H.hx.abortRequest(t) &&
                  L.tQ.updateTree(k, function (e) {
                    var t = L.tQ.getThreadCurrentLeafId(k);
                    e.updateNodeMessageMetadata(t, { finish_details: { type: 'interrupted' } });
                  });
            },
            [j, Z, k]
          ),
          U = (0, C.useCallback)(
            function (e, t, a, i, n, s) {
              var r = L.tQ.getThreadCurrentLeafId(k);
              L.tQ.setNewThreadConversationModeMetadata(k, null == i ? void 0 : i.conversationMode),
                L.tQ.updateTree(k, function (a) {
                  a.addNode(e, t, r, F.uU.User, void 0, n);
                }),
                M({
                  type: F.Os.Next,
                  promptId: e,
                  eventMetadata: a,
                  cancelActiveRequests: !0,
                  completionMetadata: i,
                  appendMessages: s,
                });
            },
            [k, M]
          ),
          O = (0, L.lA)(k, N),
          G = (0, L.dz)(k, N),
          Q = (0, H.Yk)(I),
          W = (0, C.useMemo)(
            function () {
              return !Q && !O && G;
            },
            [O, G, Q]
          ),
          J = (0, L.Kt)(k),
          Y =
            ((n = (0, B.hz)()),
            (s = (0, e8.WA)(k)),
            (r = (0, V.ur)(k)),
            (l = (o = (0, tU.QH)()).gizmoTemplate),
            (d = o.mode),
            (c = s.kind === F.OL.GizmoMagicCreate || s.kind === F.OL.GizmoTest || s.kind === F.OL.GizmoInteraction),
            (x = (u = (0, eM.a)({
              queryKey: ['promptStarters', k],
              queryFn: function () {
                return E.ZP.getSampledPromptStarter(4);
              },
              enabled: n.has(A.Zz) && w && !J && !c,
            })).data),
            (g = u.isLoading),
            (h = u.isSuccess),
            n.has(A.Zz)
              ? 'test' === d && l
                ? {
                    promptStarters:
                      null !==
                        (a =
                          null === (t = l.config.prompt_starters) || void 0 === t
                            ? void 0
                            : t.map(function (e) {
                                return { title: '', body: e, prompt: e };
                              })) && void 0 !== a
                        ? a
                        : [],
                    isLoading: !1,
                    isSuccess: !0,
                  }
                : null != r
                  ? {
                      promptStarters:
                        null === (i = r.config.prompt_starters) || void 0 === i
                          ? void 0
                          : i.map(function (e) {
                              return { title: '', body: e, prompt: e };
                            }),
                      isLoading: !1,
                      isSuccess: !0,
                    }
                  : {
                      promptStarters:
                        (null == x
                          ? void 0
                          : x.items.map(function (e) {
                              return { title: e.title, body: e.description, prompt: e.prompt };
                            })) || [],
                      isLoading: g,
                      isSuccess: h,
                    }
              : { promptStarters: [], isLoading: !1, isSuccess: !0 }),
          K = Y.promptStarters,
          X = Y.isSuccess,
          ee = (0, tO.x0)(),
          et =
            (null == ee ? void 0 : ee.messageId) ===
            (null === (v = L.tQ.getTree(k).getLastValidNode(N)) || void 0 === v
              ? void 0
              : null === (y = v.message) || void 0 === y
                ? void 0
                : y.id)
              ? null == ee
                ? void 0
                : ee.suggestions
              : T && !J && X
                ? K
                : void 0,
          ea = (0, te.iu)().size
            ? S.displayingSideBySideFeedback && S.unskippable
              ? 'feedbackRequired'
              : null
            : 'noModelsAvailable',
          ei = (0, L.r7)(k);
        return (0, m.jsx)(
          tB.ZP,
          {
            clientThreadId: k,
            onCreateNewCompletion: U,
            onAbortCompletion: z,
            onContinueGenerating: D,
            currentModelId: b,
            isNewThread: w,
            isCompletionInProgress: P,
            className:
              'stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl',
            canContinue: W,
            suggestions: null != et ? et : [],
            disabled: !!ea,
            disabledReason: null != ea ? ea : void 0,
            canPause: Q && 'gpt-4-pbrowse' !== b,
            isInteractableSharedThread: ei,
            ref: _,
          },
          k
        );
      }
      var tQ = (0, N.vU)({
        errorGeneratingResponse: {
          id: 'PromptTextarea.errorGeneratingResponse',
          defaultMessage: 'There was an error generating a response',
          description: 'Error message shown when the response generation fails',
        },
        regenerateResponse: {
          id: 'PromptTextarea.regenerateResponse',
          defaultMessage: 'Regenerate',
          description: 'Button label for regenerating response',
        },
      });
      function tW() {
        var e = (0, c._)(['bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase']);
        return (
          (tW = function () {
            return e;
          }),
          e
        );
      }
      function t$() {
        var e = (0, c._)(['bg-brand-blue-800 text-white']);
        return (
          (t$ = function () {
            return e;
          }),
          e
        );
      }
      function tJ() {
        var e = (0, c._)(['bg-brand-green-800 text-white']);
        return (
          (tJ = function () {
            return e;
          }),
          e
        );
      }
      var tY = P.Z.span(tW()),
        tK = (0, P.Z)(tY)(t$()),
        tX = (0, P.Z)(tY)(tJ()),
        t0 = function () {
          var e = (0, B.ec)(B.F_.isEnterprisePlan),
            t = (0, B.ec)(B.F_.isTeamPlan),
            a = (0, B.ec)(B.F_.isPersonalWorkspace),
            i = (0, B.WY)();
          return e
            ? (0, m.jsx)(tK, { children: (0, m.jsx)(I.Z, (0, r._)({}, t9.enterprisePlanName)) })
            : t
              ? (0, m.jsx)(tX, { children: (0, m.jsx)(I.Z, (0, r._)({}, t9.teamPlanName)) })
              : a && i
                ? (0, m.jsx)(tY, { children: 'Plus' })
                : null;
        },
        t9 = (0, N.vU)({
          enterprisePlanName: {
            id: 'badge.enterprisePlanName',
            defaultMessage: 'Enterprise',
            description: 'label for enterprise tier account',
          },
          teamPlanName: {
            id: 'badge.teamPlanName',
            defaultMessage: 'Team',
            description: 'label for team tier account',
          },
        }),
        t1 = a(41187),
        t2 = a(75318);
      function t5() {
        var e = (0, c._)([
          'text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100',
        ]);
        return (
          (t5 = function () {
            return e;
          }),
          e
        );
      }
      function t3() {
        var e = (0, c._)([
          'text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center',
        ]);
        return (
          (t3 = function () {
            return e;
          }),
          e
        );
      }
      function t6() {
        var e = (0, c._)(['md:flex items-start text-center gap-3.5']);
        return (
          (t6 = function () {
            return e;
          }),
          e
        );
      }
      function t4() {
        var e = (0, c._)(['flex flex-col mb-8 md:mb-auto gap-3.5 flex-1']);
        return (
          (t4 = function () {
            return e;
          }),
          e
        );
      }
      function t7() {
        var e = (0, c._)(['flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2']);
        return (
          (t7 = function () {
            return e;
          }),
          e
        );
      }
      function t8() {
        var e = (0, c._)(['flex flex-col gap-3.5 w-full sm:max-w-md m-auto']);
        return (
          (t8 = function () {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = (0, c._)(['w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md']);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      function at() {
        var e = (0, c._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ]);
        return (
          (at = function () {
            return e;
          }),
          e
        );
      }
      function aa() {
        var e = (0, c._)(['w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900']);
        return (
          (aa = function () {
            return e;
          }),
          e
        );
      }
      P.Z.div(t5()), P.Z.h1(t3());
      var ai = P.Z.div(t6()),
        an = P.Z.div(t4()),
        as = P.Z.h2(t7()),
        ar = P.Z.ul(t8()),
        ao = P.Z.li(ae());
      P.Z.li(at());
      var al = P.Z.button(aa());
      function ad() {
        var e = (0, c._)([
          'text-4xl font-semibold text-center mt-6 sm:mt-[6vh] ml-auto mr-auto mb-4 sm:mb-16 flex gap-2 items-center justify-center',
        ]);
        return (
          (ad = function () {
            return e;
          }),
          e
        );
      }
      function ac() {
        var e = (0, c._)([
          'text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:flex md:flex-col px-6 dark:text-gray-100',
        ]);
        return (
          (ac = function () {
            return e;
          }),
          e
        );
      }
      var au = (0, N.vU)({
        title: {
          id: 'Placeholder.title',
          description: 'Title text for the Placeholder component',
          defaultMessage: 'ChatGPT',
        },
        examplesHeader: {
          id: 'Placeholder.examplesHeader',
          description: 'Header text for the examples list',
          defaultMessage: 'Examples',
        },
        capabilitiesHeader: {
          id: 'Placeholder.capabilitiesHeader',
          description: 'Header text for the capabilities list',
          defaultMessage: 'Capabilities',
        },
        limitationsHeader: {
          id: 'Placeholder.limitationsHeader',
          description: 'Header text for the limitations list',
          defaultMessage: 'Limitations',
        },
        quantumComputingExample: {
          id: 'Placeholder.quantumComputingExample',
          description: 'Example text for quantum computing explanation',
          defaultMessage: 'Explain quantum computing in simple terms',
        },
        birthdayIdeasExample: {
          id: 'Placeholder.birthdayIdeasExample',
          description: 'Example text for creative birthday ideas',
          defaultMessage: "Got any creative ideas for a 10 year old's birthday?",
        },
        httpRequestExample: {
          id: 'Placeholder.httpRequestExample',
          description: 'Example text for making an HTTP request in Javascript',
          defaultMessage: 'How do I make an HTTP request in Javascript?',
        },
        remembersEarlierConversation: {
          id: 'Placeholder.remembersEarlierConversation',
          description: 'Capability description for remembering earlier conversation',
          defaultMessage: 'Remembers what user said earlier in the conversation',
        },
        allowsFollowUpCorrections: {
          id: 'Placeholder.allowsFollowUpCorrections',
          description: 'Capability description for allowing follow-up corrections',
          defaultMessage: 'Allows user to provide follow-up corrections',
        },
        declinesInappropriateRequests: {
          id: 'Placeholder.declinesInappropriateRequests',
          description: 'Capability description for declining inappropriate requests',
          defaultMessage: 'Trained to decline inappropriate requests',
        },
        mayGenerateIncorrectInfo: {
          id: 'Placeholder.mayGenerateIncorrectInfo',
          description: 'Limitation description for occasionally generating incorrect information',
          defaultMessage: 'May occasionally generate incorrect information',
        },
        mayProduceHarmfulInstructions: {
          id: 'Placeholder.mayProduceHarmfulInstructions',
          description: 'Limitation description for occasionally producing harmful instructions or biased content',
          defaultMessage: 'May occasionally produce harmful instructions or biased content',
        },
        limitedKnowledgeAfter2021: {
          id: 'Placeholder.limitedKnowledgeAfter2021',
          description: 'Limitation description for limited knowledge of world and events after 2021',
          defaultMessage: 'Limited knowledge of world and events after 2021',
        },
      });
      function am(e) {
        var t = e.text,
          a = e.onChangeCurrentPrompt,
          i = (0, C.useCallback)(
            function () {
              a(t);
            },
            [t, a]
          );
        return (0, m.jsxs)(al, { onClick: i, children: ['"', t, '" →'] });
      }
      function ax(e) {
        var t = function (e) {
            var t;
            null == a || null === (t = a.current) || void 0 === t || t.setInputValue(e);
          },
          a = e.promptTextareaRef,
          i = (0, S.Z)();
        return (0, m.jsxs)(ah, {
          children: [
            (0, m.jsxs)(ag, { children: [(0, m.jsx)(I.Z, (0, r._)({}, au.title)), (0, m.jsx)(t0, {})] }),
            (0, m.jsxs)(ai, {
              children: [
                (0, m.jsxs)(an, {
                  children: [
                    (0, m.jsxs)(as, {
                      children: [
                        (0, m.jsx)(_.kXG, { className: 'icon-lg' }),
                        (0, m.jsx)(I.Z, (0, r._)({}, au.examplesHeader)),
                      ],
                    }),
                    (0, m.jsxs)(ar, {
                      children: [
                        (0, m.jsx)(am, { text: i.formatMessage(au.quantumComputingExample), onChangeCurrentPrompt: t }),
                        (0, m.jsx)(am, { text: i.formatMessage(au.birthdayIdeasExample), onChangeCurrentPrompt: t }),
                        (0, m.jsx)(am, { text: i.formatMessage(au.httpRequestExample), onChangeCurrentPrompt: t }),
                      ],
                    }),
                  ],
                }),
                (0, m.jsxs)(an, {
                  children: [
                    (0, m.jsxs)(as, {
                      children: [
                        (0, m.jsx)(t2.Z, { className: 'icon-lg' }),
                        (0, m.jsx)(I.Z, (0, r._)({}, au.capabilitiesHeader)),
                      ],
                    }),
                    (0, m.jsxs)(ar, {
                      children: [
                        (0, m.jsx)(ao, { children: (0, m.jsx)(I.Z, (0, r._)({}, au.remembersEarlierConversation)) }),
                        (0, m.jsx)(ao, { children: (0, m.jsx)(I.Z, (0, r._)({}, au.allowsFollowUpCorrections)) }),
                        (0, m.jsx)(ao, { children: (0, m.jsx)(I.Z, (0, r._)({}, au.declinesInappropriateRequests)) }),
                      ],
                    }),
                  ],
                }),
                (0, m.jsxs)(an, {
                  children: [
                    (0, m.jsxs)(as, {
                      children: [
                        (0, m.jsx)(_.BJv, { className: 'icon-lg' }),
                        (0, m.jsx)(I.Z, (0, r._)({}, au.limitationsHeader)),
                      ],
                    }),
                    (0, m.jsxs)(ar, {
                      children: [
                        (0, m.jsx)(ao, { children: (0, m.jsx)(I.Z, (0, r._)({}, au.mayGenerateIncorrectInfo)) }),
                        (0, m.jsx)(ao, { children: (0, m.jsx)(I.Z, (0, r._)({}, au.mayProduceHarmfulInstructions)) }),
                        (0, m.jsx)(ao, { children: (0, m.jsx)(I.Z, (0, r._)({}, au.limitedKnowledgeAfter2021)) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var ag = P.Z.h1(ad()),
        ah = P.Z.div(ac()),
        af = a(80984),
        ap = a(33377);
      function av(e) {
        var t,
          a = e.currentModelId,
          i = (0, te.fm)(),
          n = (0, te.Q_)(),
          s = (0, te.B9)(),
          r = void 0 !== a ? s.get(a) : void 0,
          o = (0, D.H)().isPluginsAvailable;
        return r && n
          ? (0, m.jsxs)('div', {
              className: 'relative flex flex-col items-stretch justify-center gap-2 sm:items-center',
              children: [
                (0, m.jsx)(af.ZP, { currentModel: r, onModelChange: i }),
                o &&
                  (null == r
                    ? void 0
                    : null === (t = r.enabledTools) || void 0 === t
                      ? void 0
                      : t.includes('tools3')) &&
                  (0, m.jsx)(ap.Z, { theme: 'mini' }),
              ],
            })
          : null;
      }
      function ay() {
        var e = (0, c._)(['px-2 w-full flex flex-col py-2 md:py-6 sticky top-0']);
        return (
          (ay = function () {
            return e;
          }),
          e
        );
      }
      function ak() {
        var e = (0, c._)([
          'text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow',
        ]);
        return (
          (ak = function () {
            return e;
          }),
          e
        );
      }
      var ab = 'ChatGPT',
        aw = function (e) {
          var t = e.clientThreadId,
            a = e.currentModel,
            i = e.promptTextareaRef,
            n = (0, B.hz)(),
            s = (0, B.$T)(),
            r = (0, te.iu)(),
            o = (0, te.ZL)();
          if ((0, ew.Ml)()) return (0, m.jsx)(t1.iD, { clientThreadId: t, currentModel: a });
          if (n.has(A.Zz)) return s || o ? null : (0, m.jsx)(aM, { currentModelId: a.id });
          var l = n.has('model_switcher') && r.size > 1,
            d = !s;
          return (0, m.jsxs)(m.Fragment, {
            children: [
              d && (0, m.jsx)(aj, { children: (0, m.jsx)(av, { currentModelId: a.id }) }),
              s || o || l
                ? d
                  ? (0, m.jsx)('div', {
                      className:
                        'align-center flex h-full w-full flex-col justify-center self-center px-2 pb-2 md:pb-[8vh]',
                      children: (0, m.jsxs)(aC, { children: [ab, (0, m.jsx)(t0, {})] }),
                    })
                  : null
                : (0, m.jsx)(ax, { promptTextareaRef: i }),
            ],
          });
        },
        aM = function (e) {
          var t = e.currentModelId;
          return (0, m.jsxs)('div', {
            className: 'flex h-full flex-col items-center justify-between pb-64',
            children: [
              (0, m.jsx)(aj, { children: (0, m.jsx)(av, { currentModelId: t }) }),
              (0, m.jsx)('div', {
                className: 'flex h-full w-full pb-2 md:pb-[8vh]',
                children: (0, m.jsxs)(aC, { children: [ab, (0, m.jsx)(t0, {})] }),
              }),
            ],
          });
        },
        aj = P.Z.div(ay()),
        aC = P.Z.h1(ak()),
        a_ = a(25913),
        aT = a(9304),
        aN = [
          /\bnigger\w*/i,
          /\bfaggot\w*/i,
          /\bkikes?\b/i,
          /\bdykes?\b/i,
          /\bwetbacks?\b/i,
          /\bchinks?\b/i,
          /\bgooks?\b/i,
          /\bpakis?\b/i,
          /\binjuns?\b/i,
          /\btrannys?\b/i,
          /\btrannies\b/i,
          /\bspicks?\b/i,
          /\bshemales?\b/i,
        ];
      function aI(e) {
        return aS.apply(this, arguments);
      }
      function aS() {
        return (aS = (0, s._)(function (e) {
          var t, a;
          return (0, u.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (t = (0, d._)(e.queryKey, 2))[0],
                  (a = t[1]),
                  [
                    4,
                    E.ZP.getThreadInterpreterState(a).then(function (e) {
                      return (
                        0 === e.time_remaining_ms &&
                          e.kernel_started &&
                          es.m.warning(
                            'This advanced data analysis (beta) chat has timed out. You may continue the conversation, but previous files, links, and code blocks below may not work as expected.',
                            { hasCloseButton: !0, duration: 0 }
                          ),
                        e
                      );
                    }),
                  ]
                );
              case 1:
                return [2, i.sent()];
            }
          });
        })).apply(this, arguments);
      }
      var aP = a(45567),
        aR = a(93778),
        aF = a(71690),
        aE = a(42545);
      ((i = n || (n = {}))[(i.GPT_AVAILABLE = 0)] = 'GPT_AVAILABLE'),
        (i[(i.GPT_UNAVAILABLE = 1)] = 'GPT_UNAVAILABLE'),
        (i[(i.DEFAULT_GPT = 2)] = 'DEFAULT_GPT');
      var aA = function (e) {
          var t = e.threadData;
          return e.gizmo
            ? n.GPT_AVAILABLE
            : t.conversationTemplateId && (0, x.kS)(t.conversationTemplateId)
              ? n.GPT_UNAVAILABLE
              : n.DEFAULT_GPT;
        },
        aL = function (e) {
          var t = e.clientThreadId,
            a = (0, ew.Og)(),
            i = (0, ew.Jq)(),
            s = (0, L.UL)(t),
            l = (0, B.m0)(),
            d = (0, x.kg)(s.conversationTemplateId),
            c = d.data;
          if (d.isLoading || void 0 === a) return null;
          if (!l && !1 === a)
            return c
              ? (0, m.jsx)(aE.p, {
                  href: (0, x.m_)(c),
                  children: (0, m.jsx)('div', {
                    children: (0, m.jsx)(
                      I.Z,
                      (0, o._)((0, r._)({}, aD.userUpgrade), {
                        values: {
                          gizmoName: null == c ? void 0 : c.name,
                          bolded: function (e) {
                            return (0, m.jsx)('span', { className: 'font-bold', children: e });
                          },
                        },
                      })
                    ),
                  }),
                })
              : (0, m.jsx)(aE.p, {
                  href: (0, O.cy)(),
                  children: (0, m.jsx)('div', {
                    children: (0, m.jsx)(
                      I.Z,
                      (0, o._)((0, r._)({}, aD.userUpgradeNoGizmo), {
                        values: {
                          bolded: function (e) {
                            return (0, m.jsx)('span', { className: 'font-bold', children: e });
                          },
                        },
                      })
                    ),
                  }),
                });
          var u = aA({ threadData: s, gizmo: c }),
            g = (function () {
              switch (u) {
                case n.GPT_AVAILABLE:
                  if (!c) return null;
                  return (0, m.jsx)(aE.p, {
                    href: (0, x.m_)(c),
                    children: (0, m.jsx)('div', {
                      children: (0, m.jsx)(
                        I.Z,
                        (0, o._)((0, r._)({}, aD.gptAvailable), {
                          values: {
                            gizmoName: null == c ? void 0 : c.name,
                            bolded: function (e) {
                              return (0, m.jsx)('span', { className: 'font-bold', children: e });
                            },
                          },
                        })
                      ),
                    }),
                  });
                case n.GPT_UNAVAILABLE:
                  if (!i)
                    return (0, m.jsx)(aE.p, {
                      href: '/',
                      children: (0, m.jsx)('div', {
                        children: (0, m.jsx)(
                          I.Z,
                          (0, o._)((0, r._)({}, aD.gptDefault), {
                            values: {
                              bolded: function (e) {
                                return (0, m.jsx)('span', { className: 'font-bold', children: e });
                              },
                            },
                          })
                        ),
                      }),
                    });
                  return (0, m.jsx)(aE.p, {
                    href: (0, O.AA)(),
                    children: (0, m.jsx)('div', {
                      children: (0, m.jsx)(
                        I.Z,
                        (0, o._)((0, r._)({}, aD.gptUnavailable), {
                          values: {
                            bolded: function (e) {
                              return (0, m.jsx)('span', { className: 'font-bold', children: e });
                            },
                          },
                        })
                      ),
                    }),
                  });
                case n.DEFAULT_GPT:
                default:
                  return (0, m.jsx)(aE.p, {
                    href: '/',
                    children: (0, m.jsx)('div', {
                      children: (0, m.jsx)(
                        I.Z,
                        (0, o._)((0, r._)({}, aD.gptDefault), {
                          values: {
                            bolded: function (e) {
                              return (0, m.jsx)('span', { className: 'font-bold', children: e });
                            },
                          },
                        })
                      ),
                    }),
                  });
              }
            })();
          return (0, m.jsx)('div', { className: 'pt-3', children: g });
        },
        aD = (0, N.vU)({
          gptAvailable: {
            id: 'GizmoSharedConversationCTA.gptAvailable',
            defaultMessage: 'Chat with <bolded>{gizmoName}</bolded> on ChatGPT',
            description: 'CTA for a shared conversation with a GPT',
          },
          gptUnavailable: {
            id: 'GizmoSharedConversationCTA.gptUnavailable',
            defaultMessage: 'Create your own <bolded>GPT</bolded>',
            description: 'CTA for a shared conversation with a GPT that is no longer available',
          },
          gptDefault: {
            id: 'GizmoSharedConversationCTA.gptDefault',
            defaultMessage: 'Get started with <bolded>ChatGPT</bolded>',
            description: 'CTA for a shared conversation with the default GPT',
          },
          userUpgrade: {
            id: 'GizmoSharedConversationCTA.userUpgrade',
            defaultMessage: 'Upgrade to Plus to chat with <bolded>{gizmoName}</bolded>',
            description: 'Upgrade CTA for free users',
          },
          userUpgradeNoGizmo: {
            id: 'GizmoSharedConversationCTA.userUpgradeNoGizmo',
            defaultMessage: 'Upgrade to Plus to create your own <bolded>GPT</bolded>',
            description: 'Upgrade CTA for free users',
          },
        }),
        aZ = a(95413);
      function aB() {
        var e = (0, c._)(['grow flex-1 overflow-hidden']);
        return (
          (aB = function () {
            return e;
          }),
          e
        );
      }
      function aq() {
        var e = (0, c._)([
          'w-full pt-2 md:pt-0 border-t md:border-t-0 gizmo:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:pl-2 gizmo:pl-0 gizmo:md:pl-0 md:w-[calc(100%-.5rem)]\n',
          '',
        ]);
        return (
          (aq = function () {
            return e;
          }),
          e
        );
      }
      var az = y()(
          function () {
            return Promise.all([a.e(1966), a.e(4388)]).then(a.bind(a, 64388));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [64388];
              },
            },
            ssr: !1,
          }
        ),
        aU = (0, N.vU)({
          contentPolicyViolation: {
            id: 'thread.modal.restrictedTerms.title',
            defaultMessage: 'This prompt may violate our content policy.',
            description: 'Title for the restricted terms modal',
          },
          acknowledge: {
            id: 'thread.modal.common.acknowledge',
            defaultMessage: 'Acknowledge',
            description: 'Acknowledge button text',
          },
          doNotShareSensitive: {
            id: 'thread.modal.onboarding.title',
            defaultMessage: 'Do not share sensitive materials with this application',
            description: 'Title for the onboarding warning modal',
          },
          mayProduceInaccurateInformation: {
            id: 'thread.chatgptMayProduceInaccurateInformation-oct-30',
            defaultMessage: 'ChatGPT can make mistakes. Consider checking important information.',
            description: 'ChatGPT disclaimer for producing inaccurate information',
          },
          businessDisclaimer: {
            id: 'thread.businessDisclaimer-oct-30',
            defaultMessage:
              "{workspaceName} workspace chats aren't used to train our models. ChatGPT can make mistakes.",
            description: 'Business disclaimer with protected data assurance',
          },
          businessDisclaimerNoName: {
            id: 'thread.businessDisclaimerNoName-oct-30',
            defaultMessage: "Your workspace chats aren'ts used to train our models. ChatGPT can make mistakes.",
            description: 'Business disclaimer with protected data assurance when no Workspace name is available',
          },
          outdatedGptDisclaimer: {
            id: 'thread.outdatedGptDisclaimer.0',
            defaultMessage:
              '<bold>New version of GPT available</bold> - Continue chatting to use the old version, or start a <link>new chat</link> for the latest version.',
            description: 'Outdated GPT disclaimer',
          },
          outdatedTemplateDisclaimer: {
            id: 'thread.outdatedTemplateDisclaimer',
            defaultMessage:
              '<bold>New version of template available</bold> - Continue chatting to use the old version, or start a <link>new chat</link> for the latest version.',
            description: 'Outdated template disclaimer',
          },
          somethingWentWrong: {
            id: 'thread.modal.unrecoverableError.title',
            defaultMessage: 'Something went wrong',
            description: 'Title for the UnrecoverableErrorModal',
          },
          tryAgainLater: {
            id: 'thread.modal.unrecoverableError.description',
            defaultMessage: "We're sorry, but something went wrong. Please try again later.",
            description: 'Description for the UnrecoverableErrorModal',
          },
          resetThread: {
            id: 'thread.modal.unrecoverableError.resetThread',
            defaultMessage: 'Reset thread',
            description: 'Reset thread button text',
          },
          sharedConversationContinueConversation: {
            id: 'thread.sharedConversation.continue',
            defaultMessage: 'Continue this conversation',
            description: 'Button for shared links to allow user to continue conversation in their own history',
          },
          sharedConversationReportConversation: {
            id: 'thread.sharedConversation.report',
            defaultMessage: 'Report conversation',
            description: 'Button for shared links to report chat for legal, safety, or other reasons',
          },
          sharedConversationModerateConversation: {
            id: 'thread.sharedConversation.moderate',
            defaultMessage: 'Moderate conversation',
            description: 'Button for shared links to moderate a chat for legal, safety, or other reasons',
          },
          reportSharedConversation: {
            id: 'thread.reportSharedConversation',
            defaultMessage: 'Report content',
            description: 'Report shared chat footer link text',
          },
          termsOfUse: {
            id: 'thread.termsOfUse',
            defaultMessage: 'Terms of use',
            description: 'Terms of use footer link text',
          },
          privacyPolicy: {
            id: 'thread.privacyPolicy',
            defaultMessage: 'Privacy policy',
            description: 'Privacy policy footer link text',
          },
          latencyButton: {
            id: 'thread.latencyButton',
            defaultMessage: 'Latency',
            description: 'Button to open the latency menu',
          },
        });
      function aO(e) {
        var t = e.onClickReportSharedConversation;
        return (0, m.jsxs)('div', {
          className: 'flex justify-center gap-3 text-gray-500',
          children: [
            (0, m.jsx)('button', {
              onClick: function () {
                t();
              },
              children: (0, m.jsx)(I.Z, (0, r._)({}, aU.reportSharedConversation)),
            }),
            (0, m.jsx)('span', { children: '|' }),
            (0, m.jsx)('a', {
              href: 'https://openai.com/policies/terms-of-use',
              target: '_blank',
              rel: 'noreferrer',
              children: (0, m.jsx)(I.Z, (0, r._)({}, aU.termsOfUse)),
            }),
            (0, m.jsx)('span', { children: '|' }),
            (0, m.jsx)('a', {
              href: 'https://openai.com/policies/privacy-policy',
              target: '_blank',
              rel: 'noreferrer',
              children: (0, m.jsx)(I.Z, (0, r._)({}, aU.privacyPolicy)),
            }),
          ],
        });
      }
      function aV(e) {
        var t = e.clientThreadId,
          a = (0, B.ec)(function (e) {
            return e.currentWorkspace;
          }),
          i = null == a ? void 0 : a.id,
          n = (0, L.UL)(t),
          s = null == n ? void 0 : n.conversationTemplateId;
        return null != i && null != s
          ? (0, m.jsx)(aG, { clientThreadId: t, workspaceId: i, conversationTemplateId: s })
          : (0, m.jsx)(aH, {});
      }
      function aG(e) {
        var t,
          a = e.clientThreadId,
          i = e.workspaceId,
          n = e.conversationTemplateId,
          s = (0, V.GS)(i, n).data,
          l = (0, L.qN)(function (e) {
            return L.iN.getThreadCreateTime(a, e);
          }),
          d = (null == s ? void 0 : s.updated_at) != null ? new Date(s.updated_at) : void 0;
        if (null == d || null == l || d <= l) return (0, m.jsx)(aH, {});
        var c = (0, x.kS)(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : '');
        return (0, m.jsxs)('span', {
          className: 'text-gray-500',
          children: [
            (0, m.jsx)(T.h5O, { className: 'text-token-secondary mb-1 mr-1 inline-block h-4 w-4 stroke-0' }),
            c && s && 'short_url' in s
              ? (0, m.jsx)(
                  I.Z,
                  (0, o._)((0, r._)({}, aU.outdatedGptDisclaimer), {
                    values: {
                      link: function (e) {
                        return (0, m.jsx)(M(), {
                          href: (0, x.un)(s.short_url),
                          className: 'underline',
                          shallow: !0,
                          children: e,
                        });
                      },
                      bold: function (e) {
                        return (0, m.jsx)('span', { className: 'text-token-secondary font-semibold', children: e });
                      },
                    },
                  })
                )
              : (0, m.jsx)(
                  I.Z,
                  (0, o._)((0, r._)({}, aU.outdatedTemplateDisclaimer), {
                    values: {
                      link: function (e) {
                        return (0, m.jsx)(M(), {
                          href: (0, V.l1)(n),
                          className: 'underline',
                          shallow: !0,
                          children: e,
                        });
                      },
                      bold: function (e) {
                        return (0, m.jsx)('span', { className: 'text-token-secondary font-semibold', children: e });
                      },
                    },
                  })
                ),
          ],
        });
      }
      function aH() {
        var e = (0, B.ec)(B.F_.isBusinessWorkspace),
          t = (0, B.ec)(function (e) {
            return e.currentWorkspace;
          }),
          a = null == t ? void 0 : t.name;
        return e
          ? (0, m.jsx)('span', {
              children:
                null != a
                  ? (0, m.jsx)(I.Z, (0, o._)((0, r._)({}, aU.businessDisclaimer), { values: { workspaceName: a } }))
                  : (0, m.jsx)(I.Z, (0, r._)({}, aU.businessDisclaimerNoName)),
            })
          : (0, m.jsx)('span', { children: (0, m.jsx)(I.Z, (0, r._)({}, aU.mayProduceInaccurateInformation)) });
      }
      var aQ = function (e) {
          var t,
            a,
            i,
            n,
            r,
            o,
            c,
            v,
            y,
            k,
            w,
            M,
            T,
            N,
            I,
            P,
            J,
            Y,
            K,
            X,
            ee,
            et = e.initialThreadData,
            ea = e.clientThreadId,
            ei = e.initiallyHighlightedMessageId,
            en = e.continueConversationUrl,
            es = e.onCompletionFinished,
            er = e.preRequestCompletion,
            eo = e.hideHeader,
            el = e.prependThreadChildren,
            ed = e.renderEmptyState,
            ec = null !== (0, C.useContext)(q.gB),
            em = (0, S.Z)(),
            ex = (0, B.hz)(),
            eg = (0, D.H)().isPluginsAvailable,
            eh = (0, z.w$)(),
            ef = (0, C.useContext)(q.QL).historyDisabled,
            ep = (0, $.i)(),
            ev = (0, e8.Wq)(ea),
            ek = (0, j.useRouter)(),
            ej =
              ec &&
              (null === (Y = ek.query) || void 0 === Y
                ? void 0
                : null === (K = Y.shareParams) || void 0 === K
                  ? void 0
                  : K[1]) === 'moderate',
            eC = (0, L.Kt)(ea),
            e_ = (0, L.oq)(ea),
            eT = (0, L.JI)(ea, e_),
            eN = (0, L.U0)(ea, e_),
            eS = (0, L.je)(ea),
            eP = (0, d._)((0, C.useState)(), 2),
            eR = eP[0],
            eF = eP[1],
            eA = (0, d._)((0, C.useState)(!1), 2),
            eL = eA[0],
            eB = eA[1],
            eU = (0, d._)((0, C.useState)(), 2),
            eV = eU[0],
            eG = eU[1],
            eH = (0, d._)((0, C.useState)(), 2),
            eQ = eH[0],
            eW = eH[1],
            e$ = (0, d._)((0, C.useState)(), 2),
            eJ = e$[0],
            eY = e$[1],
            eK = (0, B.WY)(),
            eX = ex.has(A.AL),
            e0 = (0, d._)((0, C.useState)(!1), 2),
            e9 = e0[0],
            e1 = e0[1],
            e2 =
              ((c = (o = {
                exempt: !1,
                onRestrictedTermFound: (0, C.useCallback)(
                  function (e) {
                    e1(!0),
                      f.A.logEvent(p.M.promptUsedRestrictedWords, { threadId: L.tQ.getServerThreadId(ea), content: e });
                  },
                  [ea]
                ),
              }).exempt),
              (v = o.onRestrictedTermFound),
              (k = (y = (0, d._)((0, C.useState)(!1), 2))[0]),
              (w = y[1]),
              {
                hasRestrictedTerms: k,
                checkRestrictedTerms: (0, C.useCallback)(
                  function (e) {
                    var t;
                    return (aN.some(function (a) {
                      var i = a.exec(e);
                      return i && (t = i[0]), i;
                    }),
                    !c && t)
                      ? (w(!0), null == v || v(t), !0)
                      : (w(!1), !1);
                  },
                  [c, v]
                ),
              }),
            e5 = e2.hasRestrictedTerms,
            e3 = e2.checkRestrictedTerms,
            e6 = (0, te.iu)(),
            e4 = (0, eD.p0)(),
            e7 = eN >= 2,
            ta = eT.some(function (e) {
              return e.role === F.uU.User;
            }),
            ti = (0, L.Zz)(ea) && !e7 && (0, e8.HE)(ev),
            tn = (0, ew.Ml)(),
            ts = tn ? (0, L.Zz)(ea) && !ta && ((0, e8.HE)(ev) || ev.kind === F.OL.GizmoTest) : (0, L.Zz)(ea) && !e7,
            tr = (0, te.Gg)(e6, !0),
            to = null !== (ee = (0, te.Bv)(et.lastModelUsed, ea)) && void 0 !== ee ? ee : tr,
            tl = !!et.conversationTemplateId,
            tc = (0, te.B9)(),
            tu = tc.get(to),
            tm = (0, a_.iF)(),
            tx = (0, C.useCallback)(
              function () {
                tm(), f.A.logEvent(p.M.newThread);
              },
              [tm]
            ),
            tg =
              ((t = (0, L.Zz)(ea)),
              (a = L.tQ.getTitle(ea)),
              ev.kind === F.OL.GizmoInteraction && ev.gizmo
                ? t
                  ? 'ChatGPT - '.concat(ev.gizmo.name)
                  : a
                    ? ''.concat(ev.gizmo.name, ' - ').concat(a)
                    : a
                : t
                  ? 'ChatGPT'
                  : a);
          (0, V.dB)(ea);
          var th = (0, e8.WA)(ea),
            tf = (0, C.useCallback)(
              function (e) {
                if (!ef && e) {
                  var t = L.tQ.getTree(e).getMessageId(L.tQ.getThreadCurrentLeafId(e));
                  if (
                    (E.ZP.generateTitle(e, t, to)
                      .then(function (t) {
                        var a = t.title;
                        L.tQ.setTitle(e, a, L._L.Generated),
                          tm(),
                          f.A.logEvent(p.M.renameThread, { threadId: e, content: a, model: to });
                      })
                      .catch(function (e) {
                        console.error(e);
                      }),
                    (0, e8.HE)(ev))
                  ) {
                    var a = function () {
                      ek.push((0, O.ZV)(e), void 0, { shallow: !0 });
                    };
                    if (tn) {
                      var i = L.iN.getConversationTemplateId(ea);
                      null != i
                        ? (0, x.F0)(i)
                            .then(function (t) {
                              ek.push((0, O.ZV)(e, t), void 0, { shallow: !0 });
                            })
                            .catch(function (e) {
                              console.error(e), a();
                            })
                        : a();
                    } else a();
                  }
                }
              },
              [ea, ef, to, tm, ek, tn, ev]
            );
          (0, C.useEffect)(function () {
            (0, tO.sb)();
          }, []);
          var tp = (0, C.useCallback)(
              function (e) {
                if (
                  (null == es || es(e),
                  !ef &&
                    (th.kind === F.OL.GizmoInteraction && x.D2.handleGizmoInteracted(th.gizmo_id),
                    (0, B.N$)().has(A.uj) && !ep.displayingSideBySideFeedback))
                ) {
                  var t = L.tQ.getThreadCurrentLeafId(e),
                    a = L.tQ.getTree(e).getMessage(t);
                  (0, U.lD)(a) || (0, U.JD)(a) || (0, tO.yu)(e, a.id, to);
                }
              },
              [ef, to, ep.displayingSideBySideFeedback, es, th]
            ),
            tv = (0, L.Uy)(ea),
            ty =
              eg &&
              (null == tu ? void 0 : null === (X = tu.enabledTools) || void 0 === X ? void 0 : X.includes('tools3'))
                ? e4
                : void 0,
            tk =
              null == ty
                ? void 0
                : ty.map(function (e) {
                    return e.id;
                  }),
            tb = (0, aT.Z)(ea, tv, tx, tf, tp, tk),
            tw = (0, C.useCallback)(
              function () {
                var e = L.tQ.getThreadCurrentLeafId(ea);
                if (null != e) {
                  var t = L.tQ.getTree(ea).getBranchFromLeaf(e);
                  H.hx.abortRequests(
                    t.map(function (e) {
                      return e.id;
                    })
                  );
                }
              },
              [ea]
            ),
            tM = (0, tA.N)(),
            tC = (0, C.useCallback)(
              ((M = (0, s._)(function (e) {
                var t, a, i, n, s, r, o, l, d, c, m, x, h, f, p, v;
                return (0, u.Jh)(this, function (u) {
                  switch (u.label) {
                    case 0:
                      if (
                        ((t = e.type),
                        (a = e.promptId),
                        (i = e.eventMetadata),
                        (n = e.cancelActiveRequests),
                        (r = void 0 === (s = e.focusOnNewCompletion) || s),
                        (o = e.useDefaultModel),
                        (l = e.completionMetadata),
                        (d = e.appendMessages),
                        (0, tO.sb)(),
                        n && tw(),
                        (m = performance.now()),
                        (x = L.tQ.getTree(ea)),
                        t !== F.Os.Continue && e3(x.getTextFromNode(a)))
                      )
                        return [2];
                      if (
                        ((h = o ? tr : to),
                        (f = null === (c = tc.get(h)) || void 0 === c ? void 0 : c.tags),
                        (p = l.conversationMode),
                        !(0, g.Rr)(ex, null != f ? f : [], p.kind))
                      )
                        return [3, 2];
                      return [4, g.ZP.getEnforcementToken(null != f ? f : [])];
                    case 1:
                      (v = u.sent()), (u.label = 2);
                    case 2:
                      return (
                        null == er || er(ea, a),
                        tb({
                          model: h,
                          completionType: t,
                          parentNodeId: a,
                          metadata: i,
                          focusOnNewCompletion: r,
                          completionMetadata: l,
                          arkoseToken: null != v ? v : null,
                          preflightTime: performance.now() - m,
                          extraStreamParams: { forceParagen: tM.forceParagen, forceRateLimit: tM.forceRateLimit },
                          appendMessages: d,
                        }),
                        [2]
                      );
                  }
                });
              })),
              function (e) {
                return M.apply(this, arguments);
              }),
              [ea, e3, tr, to, tc, tb, tw, tM.forceParagen, tM.forceRateLimit, er, ex]
            ),
            t_ = (0, C.useCallback)(
              function (e, t, a, i) {
                L.tQ.updateTree(ea, function (n) {
                  n.addNode(e, a, t, F.uU.User, void 0, i);
                });
              },
              [ea]
            ),
            tT = (0, C.useCallback)(
              ((T = (0, s._)(function (e, t, a, i) {
                var n, s;
                return (0, u.Jh)(this, function (r) {
                  return (
                    (n = t.content),
                    (s = t.attachments),
                    L.tQ.setNewThreadConversationModeMetadata(ea, i.conversationMode),
                    t_(e, e_, n, s.length > 0 ? { attachments: s } : {}),
                    tC({
                      type: F.Os.Next,
                      promptId: e,
                      eventMetadata: a,
                      cancelActiveRequests: !0,
                      completionMetadata: i,
                    }),
                    [2]
                  );
                });
              })),
              function (e, t, a, i) {
                return T.apply(this, arguments);
              }),
              [ea, t_, tC, e_]
            ),
            tN = (0, C.useRef)(!1),
            tI = (0, te.B8)(),
            tS = (0, h.kP)().session;
          (0, C.useEffect)(
            function () {
              if (
                tS &&
                void 0 !== tu &&
                (void 0 === tu.enabledTools || !(tu.enabledTools.length > 0)) &&
                ex.has(A.Yj) &&
                0 !== tI.enabledModelsInCategoriesById.size &&
                !tN.current &&
                void 0 === L.tQ.getServerThreadId(ea)
              ) {
                var e,
                  t = ek.query,
                  a = t.m,
                  i = (0, l._)(t, ['m']);
                if (void 0 !== a) {
                  e = Array.isArray(a) ? a[0] : a;
                  var n = (0, R.Z)();
                  (tN.current = !0),
                    tT(n, { content: e, attachments: [] }, { eventSource: 'url' }, { conversationMode: th }),
                    ek.replace({ pathname: ek.pathname, query: i }, void 0, { shallow: !0 });
                }
              }
            },
            [tu, ek, tT, tS, tI, ex, ea, th]
          );
          var tP = (0, C.useCallback)(
              function (e, t) {
                var a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                  i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'none',
                  n = arguments.length > 4 ? arguments[4] : void 0,
                  s = L.tQ.getTree(ea).getParentPromptNode(e).id;
                tC({
                  type: F.Os.Variant,
                  promptId: s,
                  eventMetadata: t,
                  cancelActiveRequests: !1,
                  focusOnNewCompletion: a,
                  useDefaultModel: n,
                  completionMetadata: { variantPurpose: i, conversationMode: th },
                });
              },
              [tC, ea, th]
            ),
            tR = (0, C.useCallback)(
              function (e) {
                var t = L.tQ.getTree(ea).getLeafFromNode(e);
                L.tQ.setThreadCurrentLeafId(ea, t.id);
              },
              [ea]
            ),
            tF = (0, C.useCallback)(
              function (e, t, a) {
                var i = L.tQ.getServerThreadId(ea);
                if (
                  (f.A.logEvent(p.M.thumbRating, { id: t, threadId: i, rating: a, model: to }),
                  void 0 !== i && E.ZP.submitMessageFeedback({ message_id: t, conversation_id: i, rating: a }),
                  eW(e),
                  eY(t),
                  eG(a),
                  L.tQ.updateTree(ea, function (t) {
                    t.updateNodeMetadata(e, { rating: a });
                  }),
                  'thumbsDown' === a && eh)
                ) {
                  var n = L.tQ.getTree(ea).getConversationTurns(e || 'root');
                  eu(n[n.length - 1]) && tP(e, { eventSource: 'mouse', intent: 'comparison' }, !1, 'comparison');
                }
              },
              [ea, to, eh, tP]
            ),
            tE = (0, C.useCallback)(function () {
              Z.vm.closeModal(Z.B.AccountPortal);
            }, []),
            tL = (0, eO.tS)(function (e) {
              return {
                showEmbeddedPaymentModal: e.showEmbeddedPaymentModal,
                setShowEmbeddedPaymentModal: e.setShowEmbeddedPaymentModal,
              };
            }),
            tD = tL.showEmbeddedPaymentModal,
            tZ = tL.setShowEmbeddedPaymentModal,
            tB = (0, eE.C)(function (e) {
              return { setShowReferralInviteModal: e.setShowReferralInviteModal };
            }).setShowReferralInviteModal,
            tq = (0, C.useCallback)(
              function () {
                tZ(!1);
              },
              [tZ]
            ),
            tz = (0, C.useCallback)(
              function () {
                tB(!1);
              },
              [tB]
            ),
            tU = (0, C.useCallback)(function () {
              e1(!1);
            }, []),
            tG = (0, C.useRef)(null),
            tH = (0, Z.tN)(function (e) {
              return e.activeModals.has(Z.B.AccountPortal);
            }),
            tQ = (0, L.XK)(ea),
            tW = (0, Z.tN)(function (e) {
              return e.sharingModalThreadId === tQ;
            }),
            t$ = (0, eE.C)(function (e) {
              return e.showReferralInviteModal;
            });
          return (
            (I = (N = { clientThreadId: ea, currentModelId: to }).clientThreadId),
            (P = N.currentModelId),
            (i = (0, tt.i0)(P, tt.dN.CODE_INTERPRETER)),
            (n = null !== (0, C.useContext)(q.gB)),
            (r = L.tQ.getServerThreadId(I)),
            (0, eM.a)({ queryKey: ['interpreterState', r], queryFn: aI, enabled: !!(i && r && !n), gcTime: 0 }),
            (0, m.jsxs)(m.Fragment, {
              children: [
                eX && (0, m.jsx)(az, {}),
                (0, m.jsxs)(b(), {
                  children: [
                    null != tg && (0, m.jsx)('title', { children: tg }),
                    ec &&
                      (0, m.jsxs)(m.Fragment, {
                        children: [
                          (0, m.jsx)('meta', { property: 'og:site_name', content: 'ChatGPT' }),
                          (0, m.jsx)('meta', { name: 'robots', content: 'index, follow' }, 'robots'),
                          (0, m.jsx)(
                            'meta',
                            { property: 'og:title', content: null != tg ? tg : 'Shared Chat on ChatGPT' },
                            'og:title'
                          ),
                          (0, m.jsx)(
                            'meta',
                            {
                              property: 'og:description',
                              content: 'Shared ' + (null != eS ? 'by '.concat(eS, ' ') : '') + 'via ChatGPT',
                            },
                            'og:description'
                          ),
                          (0, m.jsx)('meta', { property: 'og:image', content: aF.Z.src }, 'og:image'),
                        ],
                      }),
                  ],
                }),
                ev.kind === F.OL.GizmoInteraction && ev.gizmo && (0, m.jsx)(aR.N, { gizmo: ev.gizmo }),
                (0, m.jsxs)(q.OV.Provider, {
                  value: tC,
                  children: [
                    ex.has(A.i) ? (0, m.jsx)(eZ, {}) : null,
                    e5 &&
                      e9 &&
                      (0, m.jsx)(
                        W.Z,
                        {
                          isOpen: !0,
                          onClose: tU,
                          icon: _.U0j,
                          title: em.formatMessage(aU.contentPolicyViolation),
                          primaryButton: (0, m.jsx)(Q.ZP.Button, {
                            onClick: tU,
                            title: em.formatMessage(aU.acknowledge),
                          }),
                          type: 'danger',
                        },
                        'RestrictedTerms'
                      ),
                    tW && null != tQ && (0, m.jsx)(tj, { serverThreadId: tQ, currentThreadModel: et.lastModelUsed }),
                    (0, m.jsxs)(eb.ZP, {
                      clientThreadId: ea,
                      currentModelConfig: tu,
                      className: 'flex h-full flex-col',
                      children: [
                        (0, m.jsx)(aW, {
                          children: eC
                            ? null
                            : ts
                              ? null != ed
                                ? ed
                                : (0, m.jsx)(aw, {
                                    clientThreadId: ea,
                                    currentModel: null != tu ? tu : te.IR,
                                    promptTextareaRef: tG,
                                  })
                              : e7
                                ? ((J = (0, m.jsxs)(m.Fragment, {
                                    children: [
                                      el,
                                      (0, m.jsx)(
                                        td,
                                        {
                                          onChangeItemInView: tR,
                                          onRequestMoreCompletions: tP,
                                          onChangeRating: tF,
                                          onRequestCompletion: tC,
                                          clientThreadId: ea,
                                          currentThreadModel: et.lastModelUsed,
                                          initiallyHighlightedMessageId: ei,
                                          inlineEmbeddedDisplay: !1,
                                          conversationLeafId: e_,
                                          hideHeader: eo,
                                        },
                                        ea
                                      ),
                                    ],
                                  })),
                                  ec
                                    ? (0, m.jsx)('div', {
                                        className: 'h-full overflow-auto dark:bg-gray-800',
                                        children: J,
                                      })
                                    : (0, m.jsx)(aP.I, { children: J }))
                                : null,
                        }),
                        (0, m.jsxs)(a$, {
                          $isGizmoUIEnabled: tn,
                          children: [
                            ec
                              ? (0, m.jsxs)('div', {
                                  className:
                                    'relative flex w-full flex-1 items-center justify-center gap-2 empty:hidden',
                                  children: [
                                    tl || tn || !en || ex.has('gizmo_live')
                                      ? (0, m.jsx)(aL, { clientThreadId: ea })
                                      : (0, m.jsx)(G.z, {
                                          as: 'link',
                                          to: en,
                                          children: em.formatMessage(aU.sharedConversationContinueConversation),
                                        }),
                                    ej &&
                                      (0, m.jsx)(G.z, {
                                        onClick: function () {
                                          eB(!0);
                                        },
                                        children: em.formatMessage(aU.sharedConversationModerateConversation),
                                      }),
                                  ],
                                })
                              : (0, m.jsx)(tV, {
                                  clientThreadId: ea,
                                  isNewThread: ti,
                                  showPromptStarters: ti || (tn && !ta),
                                  currentModelId: to,
                                  onRequestCompletion: tC,
                                  onNewThreadCreationFinished: tf,
                                  promptTextareaRef: tG,
                                }),
                            (0, m.jsx)('div', {
                              className:
                                'relative px-2 py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]',
                              children: ec
                                ? (0, m.jsx)(aO, {
                                    onClickReportSharedConversation: function () {
                                      eF(e_);
                                    },
                                  })
                                : (0, e8.HE)(ev)
                                  ? (0, m.jsx)(aV, { clientThreadId: ea })
                                  : null,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, m.jsxs)('div', {
                      className: 'group fixed bottom-3 right-3 z-10 hidden gap-1 lg:flex',
                      children: [
                        eX &&
                          (0, m.jsx)('button', {
                            onClick: function () {
                              Z.vm.showLatencyDevTools();
                            },
                            className:
                              'box-content flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-xs text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200',
                            children: (0, m.jsx)(_.DKx, { className: 'icon-sm' }),
                          }),
                        (0, m.jsx)(aZ.Z, {}),
                      ],
                    }),
                    (0, m.jsx)(ey, {
                      clientThreadId: ea,
                      currentLeafId: e_,
                      currentModelId: to,
                      onChangeItemInView: tR,
                      onRequestMoreCompletions: tP,
                      onChangeRating: tF,
                      onRequestCompletion: tC,
                      ratingModalOpen: eV,
                      ratingModalNodeId: eQ,
                      ratingModalCompletionId: eJ,
                      sharedConversationReportModalNodeId: eR,
                      setSharedConversationReportModalNodeId: eF,
                      sharedConversationModerationModalOpen: eL,
                      setRatingModalOpen: eG,
                      setSharedConversationModerationModalOpen: eB,
                    }),
                    (0, m.jsx)(ez, { isOpen: tD, onClose: tq }),
                    ex.has(A.a3) && (0, m.jsx)(eI, { isOpen: t$, onClose: tz }),
                    void 0 !== eK && eK && (0, m.jsx)(eq.Z, { isOpen: tH, onClose: tE }),
                  ],
                }),
              ],
            })
          );
        },
        aW = P.Z.div(aB()),
        a$ = P.Z.div(aq(), function (e) {
          return (
            !e.$isGizmoUIEnabled &&
            'absolute bottom-0 left-0 md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient'
          );
        });
    },
    45567: function (e, t, a) {
      'use strict';
      a.d(t, {
        I: function () {
          return r;
        },
      });
      var i = a(35250),
        n = a(5397),
        s = a.n(n)()(
          function () {
            return Promise.resolve().then(a.bind(a, 40803));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [40803];
              },
            },
            ssr: !1,
          }
        );
      function r(e) {
        var t = e.children;
        return (0, i.jsx)(s, {
          className: 'h-full',
          followButtonClassName: 'scroll-convo',
          initialScrollBehavior: 'auto',
          children: t,
        });
      }
    },
    93778: function (e, t, a) {
      'use strict';
      a.d(t, {
        N: function () {
          return o;
        },
      });
      var i = a(35250),
        n = a(21950),
        s = a(29124),
        r = a.n(s);
      function o(e) {
        var t = e.gizmo,
          a = (0, n.uy)(t.name);
        return (0, i.jsxs)(r(), {
          children: [
            (0, i.jsx)('title', { children: a }),
            (0, i.jsx)('meta', { name: 'title', content: a }, 'title'),
            (0, i.jsx)('meta', { property: 'og:site_name', content: 'ChatGPT' }, 'og:site_name'),
            (0, i.jsx)('meta', { property: 'og:type', content: 'website' }, 'og:type'),
            (0, i.jsx)('meta', { property: 'og:title', content: a }, 'og:title'),
            (0, i.jsx)('meta', { property: 'og:url', content: (0, n.i6)(t) }, 'og:url'),
            t.description &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)('meta', { name: 'description', content: t.description }, 'description'),
                  (0, i.jsx)('meta', { property: 'og:description', content: t.description }, 'og:description'),
                ],
              }),
            t.profile_pic_permalink &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)('meta', { property: 'og:image', content: t.profile_pic_permalink }, 'og:image'),
                  (0, i.jsx)('meta', { property: 'og:image:width', content: '512' }, 'og:image:width'),
                  (0, i.jsx)('meta', { property: 'og:image:height', content: '512' }, 'og:image:height'),
                ],
              }),
          ],
        });
      }
    },
    42545: function (e, t, a) {
      'use strict';
      a.d(t, {
        p: function () {
          return r;
        },
      });
      var i = a(35250),
        n = a(73040),
        s = a.n(n);
      function r(e) {
        var t = e.href,
          a = e.children;
        return (0, i.jsx)(s(), {
          href: t,
          shallow: !0,
          className:
            'flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-medium text-white transition hover:opacity-70',
          children: a,
        });
      }
    },
    45048: function (e, t, a) {
      'use strict';
      a.d(t, {
        M: function () {
          return k;
        },
        O1: function () {
          return v;
        },
      });
      var i = a(39324),
        n = a(35250),
        s = a(61098),
        r = a(17130),
        o = a(86646),
        l = a(25687),
        d = a(61236),
        c = a(70079),
        u = a(1454),
        m = a(70671),
        x = a(32004),
        g = a(94968);
      function h(e) {
        var t = e.label,
          a = e.output;
        return (0, n.jsxs)('div', {
          className: 'rounded-md bg-black p-4 text-xs',
          children: [
            (0, n.jsx)('div', { className: 'mb-1 text-gray-400', children: t }),
            (0, n.jsx)('div', {
              className:
                'scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white',
              children: (0, n.jsx)('pre', { className: 'shrink-0', children: a }),
            }),
          ],
        });
      }
      t.ZP = c.memo(function (e) {
        var t,
          a = e.message,
          i = e.isCollapsed,
          r = (0, m.Z)();
        if (a.message.content.content_type !== s.PX.ExecutionOutput) return null;
        var o = null === (t = a.message.metadata) || void 0 === t ? void 0 : t.aggregate_result;
        if (!o) return console.error('Corrupt code execution result message'), null;
        var l = o.messages.filter(k),
          d = i && l.length > 0,
          c = i && null != o.final_expression_output,
          u = i && null != o.in_kernel_exception,
          x = !i && o.messages.filter(v).length > 0;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            d &&
              (0, n.jsx)(h, {
                label: 'STDOUT/STDERR',
                output: l.map(function (e, t) {
                  return (0, n.jsx)(
                    'span',
                    { className: 'stderr' === e.stream_name ? 'text-red-500' : '', children: e.text },
                    ''.concat(t)
                  );
                }),
              }),
            c && (0, n.jsx)(h, { label: r.formatMessage(b.resultLabel), output: o.final_expression_output }),
            u &&
              (0, n.jsx)('div', {
                className: 'overflow-auto rounded border-t border-gray-500 bg-black text-white',
                children: (0, n.jsx)('div', {
                  className: 'border-l-4 border-red-500 p-2 text-xs',
                  children: (0, n.jsx)('div', {
                    className:
                      'scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse',
                    children: (0, n.jsx)('pre', {
                      className: 'shrink-0',
                      children: o.in_kernel_exception.traceback.join(''),
                    }),
                  }),
                }),
              }),
            x &&
              o.messages.filter(v).map(function (e, t) {
                return (0, n.jsx)(
                  'div',
                  { className: 'empty:hidden', children: (0, n.jsx)(y, { jupyterMessage: e }) },
                  t
                );
              }),
          ],
        });
      });
      var f = Math.log(151) / Math.log(1.5);
      function p(e) {
        var t = e.fileId,
          a = (0, d.a)({
            queryKey: ['getFileDownloadLink', t],
            queryFn: function () {
              return o.ZP.getFileDownloadLink(t);
            },
            refetchInterval: function (e) {
              var t,
                a = e.state.dataUpdateCount;
              return (
                (null === (t = e.state.data) || void 0 === t ? void 0 : t.status) !== 'success' &&
                !(a > f) &&
                'error' !== e.state.status &&
                100 * Math.pow(1.5, a)
              );
            },
          }).data,
          i = (null == a ? void 0 : a.status) === 'success' ? a.download_url : null;
        return (0, n.jsxs)(n.Fragment, { children: [' ', i && (0, n.jsx)('img', { src: i, className: 'my-1' }), ' '] });
      }
      function v(e) {
        return 'image' === e.message_type || ('image_url' in e && (0, r.$H)(e.image_url + ''));
      }
      function y(e) {
        var t = e.jupyterMessage;
        if (null !== (0, c.useContext)(l.gB))
          return (0, n.jsxs)('div', {
            className:
              'my-1 flex h-52 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-md border-black/5 bg-gray-100 p-7 text-center text-gray-500 dark:border-white/10',
            children: [(0, n.jsx)(u.LFN, { className: 'icon-lg' }), (0, n.jsx)(x.Z, (0, i._)({}, b.imageNotSupported))],
          });
        if (null != t.image_payload)
          return (0, n.jsx)('img', { className: 'my-1', src: 'data:image/png;base64,'.concat(t.image_payload) });
        if (null != t.image_url) {
          var a = (0, r.Iy)(t.image_url);
          return (0, n.jsx)(p, { fileId: a });
        }
        return null;
      }
      function k(e) {
        return 'stream' === e.message_type;
      }
      var b = (0, g.vU)({
        imageNotSupported: {
          id: 'CodeExecutionOutputMessage.imageNotSupported',
          defaultMessage: 'Image output is not supported in a shared chat',
          description: 'Message shown when an image is output in a shared thread',
        },
        resultLabel: {
          id: 'CodeExecutionOutputMessage.resultLabel',
          defaultMessage: 'RESULT',
          description: 'Label show with the code execution result output',
        },
      });
    },
    9304: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return B;
        },
      });
      var i = a(21722),
        n = a(39324),
        s = a(71209),
        r = a(64502),
        o = a(38104),
        l = a(2064),
        d = a(54636),
        c = a(42780),
        u = a(51217),
        m = a(8844),
        x = a(61098);
      function g() {
        return (g = (0, i._)(function (e, t) {
          var a, i;
          return (0, o.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                if (
                  (null === (a = t.metadata) || void 0 === a ? void 0 : a.client_actions) === void 0 ||
                  0 === t.metadata.client_actions.length ||
                  0 ==
                    (i = t.metadata.client_actions.filter(function (e) {
                      return 'browser_tool' === e.type;
                    })).length
                )
                  return [2, []];
                return [
                  4,
                  Promise.all(
                    i.map(function (a) {
                      return (function (e, t, a) {
                        return f.apply(this, arguments);
                      })(e, a.action, t);
                    })
                  ),
                ];
              case 1:
                return [2, n.sent().flat()];
            }
          });
        })).apply(this, arguments);
      }
      var h = (function () {
        function e(t) {
          (0, u._)(this, e), (this.conversationId = t);
        }
        var t = e.prototype;
        return (
          (t.createRequest = function (e) {
            var t = this;
            return new Promise(function (a, i) {
              var r = new BroadcastChannel(Math.random().toString()),
                o = setTimeout(function () {
                  i('Timeout'), r.close();
                }, 6e4);
              r.onmessage = function (e) {
                a(e.data), clearTimeout(o), r.close();
              };
              var l = (0, s._)((0, n._)({ action: 'browse', id: t.conversationId }, e), { channel: r.name });
              window.postMessage(l, '*');
            });
          }),
          (t.browse = function (e) {
            return this.createRequest({ url: e, type: 'browse' });
          }),
          (t.back = function () {
            return this.createRequest({ type: 'back' });
          }),
          (t.click = function (e) {
            return this.createRequest({ target: e, type: 'click' });
          }),
          (t.scroll = function (e) {
            return this.createRequest({ amount: e, type: 'scroll' });
          }),
          (t.quote = function (e, t) {
            return this.createRequest({ quote_start: e, quote_end: t, type: 'quote' });
          }),
          e
        );
      })();
      function f() {
        return (f = (0, i._)(function (e, t, a) {
          var i, n;
          return (0, o.Jh)(this, function (a) {
            var s, r;
            switch (a.label) {
              case 0:
                (i = new h(e)), (a.label = 1);
              case 1:
                switch ((a.trys.push([1, 14, , 15]), t.command)) {
                  case 'back':
                    return [3, 2];
                  case 'quote':
                    return [3, 4];
                  case 'scroll':
                    return [3, 6];
                  case 'open_url':
                    return [3, 8];
                  case 'click':
                    return [3, 10];
                }
                return [3, 12];
              case 2:
                return [4, i.back()];
              case 3:
              case 7:
              case 9:
              case 11:
                return [
                  2,
                  [
                    (!(function (e) {
                      for (var t in e.urls) e.text.includes(''.concat(t)) || delete e.urls[t];
                    })((s = a.sent())),
                    {
                      id: (0, m.Z)(),
                      author: { role: x.uU.Tool, name: 'browser' },
                      content: { content_type: x.PX.TetherBrowsingDisplay, result: s.text, summary: s.title },
                      metadata: {
                        _cite_metadata: {
                          citation_format: { name: 'tether_og' },
                          metadata_list: [{ type: 'webpage', title: s.title, url: s.url, text: s.text }],
                        },
                      },
                      recipient: 'all',
                    }),
                  ],
                ];
              case 4:
                return [4, i.quote(t.quote_start, t.quote_end)];
              case 5:
                return [
                  2,
                  [
                    ((r = a.sent()),
                    {
                      id: (0, m.Z)(),
                      author: { role: x.uU.Tool, name: 'browser' },
                      content: { content_type: x.PX.Text, parts: [''.concat(JSON.stringify(r))] },
                      recipient: 'all',
                    }),
                  ],
                ];
              case 6:
                return [4, i.scroll(t.amount)];
              case 8:
                return [4, i.browse(t.url)];
              case 10:
                return [4, i.click(t.target)];
              case 12:
                throw Error('Unsupported browser action type ' + t);
              case 13:
                return [3, 15];
              case 14:
                return (
                  console.error((n = a.sent())),
                  [
                    2,
                    [
                      {
                        id: (0, m.Z)(),
                        author: { role: x.uU.Tool, name: 'browser' },
                        content: { content_type: x.PX.Text, parts: ['Error making browse call: '.concat(n)] },
                        recipient: 'all',
                      },
                    ],
                  ]
                );
              case 15:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      var p = a(60478),
        v = a(89678),
        y = a.n(v),
        k = a(70079),
        b = a(20630),
        w = a(86646),
        M = a(51505),
        j = a(17944),
        C = a(25687),
        _ = a(88887),
        T = a(15066),
        N = a(41955),
        I = a(8874),
        S = function e(t) {
          var a,
            i = this;
          (0, u._)(this, e),
            (this.blurDuringCompletionTrackerOnUnmountRef = t),
            (this.completionStartTime = Date.now()),
            (this.logFocusAfterBlurDuringCompletionEvent = function () {
              I.m9.logEvent('chatgpt_focus_after_blur_during_completion', null, {
                completion_duration_ms: ''.concat(i.completionEndTime - i.completionStartTime),
                blur_time_ms: ''.concat(i.blurDuringCompletionTime - i.completionStartTime),
                refocus_time_ms: ''.concat(i.refocusTime - i.completionStartTime),
              }),
                d.A.logEvent(c.M.focusAfterBlurDuringCompletion, {
                  completion_duration_ms: ''.concat(i.completionEndTime - i.completionStartTime),
                  blur_time_ms: ''.concat(i.blurDuringCompletionTime - i.completionStartTime),
                  refocus_time_ms: ''.concat(i.refocusTime - i.completionStartTime),
                });
            }),
            (this.onWindowBlur = function () {
              void 0 === i.blurDuringCompletionTime &&
                ((i.blurDuringCompletionTime = Date.now()),
                window.addEventListener('focus', i.onWindowFocusAfterBlur),
                (i.blurDuringCompletionTrackerOnUnmountRef.current = i.cleanupFocusAfterBlurListener));
            }),
            (this.onWindowFocusAfterBlur = function () {
              (i.refocusTime = Date.now()),
                void 0 !== i.completionEndTime && i.logFocusAfterBlurDuringCompletionEvent(),
                i.cleanupFocusAfterBlurListener();
            }),
            (this.cleanupFocusAfterBlurListener = function () {
              window.removeEventListener('focus', i.onWindowFocusAfterBlur),
                (i.blurDuringCompletionTrackerOnUnmountRef.current = void 0);
            }),
            (this.onMessageError = function () {
              window.removeEventListener('blur', i.onWindowBlur);
            }),
            (this.onMessageDone = function () {
              window.removeEventListener('blur', i.onWindowBlur),
                void 0 !== i.blurDuringCompletionTime &&
                  ((i.completionEndTime = Date.now()),
                  I.m9.logEvent('chatgpt_blur_during_completion', null, {
                    completion_duration_ms: ''.concat(i.completionEndTime - i.completionStartTime),
                    blur_time_ms: ''.concat(i.blurDuringCompletionTime - i.completionStartTime),
                  }),
                  d.A.logEvent(c.M.blurDuringCompletion, {
                    completion_duration_ms: ''.concat(i.completionEndTime - i.completionStartTime),
                    blur_time_ms: ''.concat(i.blurDuringCompletionTime - i.completionStartTime),
                  }),
                  void 0 !== i.refocusTime && i.logFocusAfterBlurDuringCompletionEvent());
            }),
            window.addEventListener('blur', this.onWindowBlur),
            null === (a = t.current) || void 0 === a || a.call(t);
        },
        P = a(45021),
        R = (function () {
          function e(t) {
            (0, u._)(this, e),
              (this.requestLatencyId = t),
              (this.requestStartTime = performance.now()),
              (this.requestLastTokenTime = performance.now()),
              (this.requestCount = 0),
              (this.requestTimes = []);
          }
          return (
            (e.prototype.onResponse = function (e, t, a) {
              var i,
                n,
                s = performance.now(),
                r = s - this.requestLastTokenTime,
                o = s - this.requestStartTime;
              (this.requestLastTokenTime = s), (this.requestCount += 1);
              var l =
                  t.content.content_type == x.PX.Text
                    ? null == t
                      ? void 0
                      : null === (i = t.content) || void 0 === i
                        ? void 0
                        : i.parts[
                            (null == t ? void 0 : null === (n = t.content) || void 0 === n ? void 0 : n.parts.length) -
                              1
                          ]
                    : '',
                d = {
                  requestCount: this.requestCount,
                  requestDuration: o,
                  lastTokenDuration: Number(JSON.stringify(r)),
                  messageType: t.content.content_type,
                  content: l,
                };
              this.requestTimes.push(d),
                'message' === e.type
                  ? (0, P.Ae)(this.requestLatencyId, d)
                  : 'done' === e.type &&
                    null != a &&
                    ((0, P.kn)(this.requestLatencyId), (0, P.gL)(this.requestLatencyId));
            }),
            e
          );
        })(),
        F = a(96251),
        E = a(12221),
        A = a(10499);
      function L(e, t) {
        e.updateNodeMetadata(t.id, { completionSampleFinishTime: Date.now() });
      }
      function D(e, t, a, i, n, s, r, o) {
        return Z.apply(this, arguments);
      }
      function Z() {
        return (Z = (0, i._)(function (e, t, a, i, n, s, r, d) {
          var c, u, m, g;
          return (0, o.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                if (
                  ((u = performance.now()),
                  (m = null === (c = n.get(a)) || void 0 === c ? void 0 : c.tags),
                  i && l.ZP.gatherData(null != m ? m : []),
                  M.tQ.updateTree(e, function (e) {
                    var a = !0,
                      i = !1,
                      n = void 0;
                    try {
                      for (var s, o = r[Symbol.iterator](); !(a = (s = o.next()).done); a = !0) {
                        var l = s.value;
                        e.addNode(l.id, l, t, x.uU.Assistant, { completionSampleFinishTime: Date.now() }), (t = l.id);
                      }
                    } catch (e) {
                      (i = !0), (n = e);
                    } finally {
                      try {
                        a || null == o.return || o.return();
                      } finally {
                        if (i) throw n;
                      }
                    }
                  }),
                  M.tQ.setThreadCurrentLeafId(e, t),
                  !i)
                )
                  return [3, 2];
                return [4, l.ZP.getEnforcementToken(null != m ? m : [])];
              case 1:
                (g = o.sent()), (o.label = 2);
              case 2:
                return (
                  s({
                    model: a,
                    completionType: x.Os.Next,
                    parentNodeId: t,
                    metadata: {},
                    arkoseToken: null != g ? g : null,
                    preflightTime: performance.now() - u,
                    extraStreamParams: d,
                  }),
                  [2]
                );
            }
          });
        })).apply(this, arguments);
      }
      function B(e, t, a, u, m, h) {
        var f,
          v = (0, j.hz)(),
          I = (0, k.useId)(),
          Z = (0, E.Y8)(function (e) {
            return null == e ? void 0 : e.setCapTimeout;
          }),
          B = (0, E.Y8)(function (e) {
            return null == e ? void 0 : e.clearCapTimeout;
          }),
          q = (0, k.useContext)(C.QL).historyDisabled,
          z = (0, A.B9)(),
          U = (0, k.useRef)(0),
          O = (0, k.useRef)(a),
          V = (0, k.useRef)(u),
          G = (0, k.useRef)(m);
        (O.current = a), (V.current = u), (G.current = m);
        var H = (0, k.useRef)(void 0);
        (0, k.useEffect)(function () {
          return function () {
            var e;
            return null === (e = H.current) || void 0 === e ? void 0 : e.call(H);
          };
        }, []);
        var Q = (0, k.useCallback)(
            function (t, a, r, u, m, h) {
              var f,
                k,
                w,
                j,
                C = u.eventSource,
                _ = function () {
                  setTimeout(function () {
                    N.hx.removeRequest(r), M.tQ.releaseThread(e);
                  }, 0);
                },
                T = M.tQ.getTree(e),
                I = r,
                P = a === x.Os.Continue,
                A = !0,
                q = !1,
                U = T.getMessage(I),
                Q = {},
                $ = {},
                J = !1,
                Y = !1,
                K = new S(H),
                X = new R(m),
                ee = y()(
                  function () {
                    J ||
                      M.tQ.updateTree(e, function (e) {
                        Object.values(Q).forEach(function (t) {
                          e.updateNodeMessage(t.id, t);
                        });
                      }),
                      (Q = {});
                  },
                  50,
                  { leading: !0, maxWait: 50 }
                );
              return (
                (f = (0, i._)(function (i) {
                  var u,
                    m,
                    f,
                    y,
                    N,
                    S,
                    R,
                    H,
                    et,
                    ea,
                    ei,
                    en,
                    es,
                    er,
                    eo,
                    el,
                    ed,
                    ec,
                    eu,
                    em,
                    ex,
                    eg,
                    eh,
                    ef,
                    ep,
                    ev,
                    ey,
                    ek,
                    eb,
                    ew,
                    eM,
                    ej,
                    eC,
                    e_,
                    eT,
                    eN;
                  return (0, o.Jh)(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if ((X.onResponse(i, U, k), (u = !0), 'error' === i.type))
                          return (
                            console.error((m = i.error)),
                            (f = (null == m ? void 0 : m.message) || 'Something went wrong'),
                            M.tQ.updateTree(e, function (e) {
                              e.updateNodeMessage(I, U),
                                e.updateNodeMetadata(I, {
                                  err: f,
                                  errType: 'danger',
                                  errCode: ((0, b.T)(m) && m.code) || '',
                                  completionSampleFinishTime: Date.now(),
                                });
                            }),
                            K.onMessageError(),
                            _(),
                            G.current(k),
                            (0, b.T)(m) &&
                              (null == m ? void 0 : m.code) === E.uU &&
                              (null == m ? void 0 : m.clearsIn) &&
                              (Z(new Date(Date.now() + 1e3 * m.clearsIn).toISOString()),
                              setTimeout(function () {
                                B();
                              }, 1e3 * m.clearsIn)),
                            [2]
                          );
                        if (
                          ('moderation' === i.type &&
                            ((y = i.isCompletion),
                            (N = i.messageId),
                            (S = i.conversationId),
                            (R = i.flagged),
                            (H = i.blocked),
                            (R || H) &&
                              ((Y = !0),
                              H && y && (J = !0),
                              M.tQ.updateTree(e, function (e) {
                                var t = e.messageIdToNodeId(N);
                                H && e.clearNodeMessageParts(t),
                                  e.updateNodeMetadata(
                                    t,
                                    (0, s._)((0, n._)({}, H ? p.sK : p.Mf), { completionSampleFinishTime: Date.now() })
                                  );
                              }),
                              d.A.logEvent(
                                y
                                  ? H
                                    ? c.M.completionBlockedByModeration
                                    : c.M.completionFlaggedByModeration
                                  : H
                                    ? c.M.promptBlockedByModeration
                                    : c.M.promptFlaggedByModeration,
                                { threadId: S, id: N }
                              ))),
                          'num_variants_in_stream' === i.type)
                        )
                          return (w = i), [2];
                        if ('message' === i.type) {
                          if (((et = i.message), (ea = i.conversationId), A && !T.hasReceivedServerCompletion)) {
                            if ((null == et ? void 0 : et.author.role) === x.uU.System)
                              return T.appendSystemMessageToRoot(et), [2];
                            if ((null == et ? void 0 : et.author.role) === x.uU.User || T.hasNodeOrMessageId(et.id))
                              return [2];
                          }
                          A
                            ? ((en =
                                (null === (ei = M.qN.getState().threads[e]) || void 0 === ei
                                  ? void 0
                                  : ei.continuingFromSharedConversationId) != null),
                              M.tQ.removeContinuingFromSharedConversationId(e),
                              (A = !1),
                              (q = !T.hasReceivedServerCompletion || en),
                              void 0 !== ea && ((k = ea), (0, M.Zz)(e) && M.tQ.setServerIdForNewThread(e, ea)),
                              M.tQ.updateTree(e, function (e) {
                                e.updateNodeMessage(I, et);
                              }),
                              q && O.current(ea),
                              (es = { id: r, threadId: ea, completionType: a, eventSource: C, model: t }),
                              a === x.Os.Next &&
                                ((ec =
                                  null == (ed = M.qN.getState().threads[ea])
                                    ? void 0
                                    : null === (er = ed.conversationTurns) || void 0 === er
                                      ? void 0
                                      : er.length),
                                (null ==
                                (em =
                                  null ===
                                    (el = (eu =
                                      null == ed
                                        ? void 0
                                        : null === (eo = ed.conversationTurns) || void 0 === eo
                                          ? void 0
                                          : eo.filter(function (e) {
                                              return e.role == x.uU.User;
                                            }))[eu.length - 1]) || void 0 === el
                                    ? void 0
                                    : el.messages[0].message)
                                  ? void 0
                                  : em.content.content_type) == x.PX.Text &&
                                  ((ex = em.content.parts.join('').length),
                                  (eh = null !== (eg = eu.length) && void 0 !== eg ? eg : 0),
                                  (es.countConversationTurns = ec),
                                  (es.countUserSubmittedMessages = eh),
                                  (es.countLastUserPromptTextMessageLength = ex))),
                              d.A.logEvent(c.M.generateCompletion, es))
                            : !P &&
                              ((ep = T.containsNodeOrMessageId(et.id)),
                              (ev = null === (ef = et.metadata) || void 0 === ef ? void 0 : ef.parent_id),
                              ep ||
                                (ee.flush(),
                                M.tQ.updateTree(e, function (e) {
                                  if (null == ev)
                                    throw Error('Received a message with no parentId: '.concat(JSON.stringify(et)));
                                  e.addNode(et.id, et, ev, x.uU.Assistant);
                                })),
                              null != ev &&
                                ev === j &&
                                null != (ey = $[ev]) &&
                                (M.tQ.updateTree(e, function (e) {
                                  L(e, ey);
                                }),
                                delete $[ev]),
                              (u =
                                (null !== (ek = null == w ? void 0 : w.num_variants_in_stream) && void 0 !== ek
                                  ? ek
                                  : 1) === 1 ||
                                null == j ||
                                j === et.id) &&
                                j !== et.id &&
                                ((j = et.id),
                                (I = et.id),
                                (eb = M.tQ.getThreadCurrentLeafId(e)),
                                T.messageIdToNodeId(I) !== T.messageIdToNodeId(eb) && M.tQ.setThreadCurrentLeafId(e, I),
                                null != ev &&
                                  M.tQ.updateTree(e, function (e) {
                                    e.updateNodeMetadata(ev, { variantsInStreamInfo: w });
                                  }))),
                            u && (U = et),
                            (Q[et.id] = et),
                            ($[et.id] = et);
                        }
                        if ((ee(), 'done' !== i.type)) return [3, 4];
                        if (
                          (J || (ee.flush(), Y || (q && V.current(k), G.current(k))),
                          M.tQ.updateTree(e, function (e) {
                            Object.values($).forEach(function (t) {
                              L(e, t);
                            });
                          }),
                          K.onMessageDone(),
                          _(),
                          (ej = null === (ew = z.get(t)) || void 0 === ew ? void 0 : ew.tags),
                          (eC = (0, l.Rr)(v, null != ej ? ej : [], x.OL.PrimaryAssistant)),
                          !(
                            (null == U
                              ? void 0
                              : null === (eM = U.metadata) || void 0 === eM
                                ? void 0
                                : eM.client_actions) !== void 0
                          ))
                        )
                          return [3, 2];
                        return [
                          4,
                          (function (e, t) {
                            return g.apply(this, arguments);
                          })(e, U),
                        ];
                      case 1:
                        (e_ = o.sent()).length > 0 && D(e, I, t, eC, z, W, e_, h), (o.label = 2);
                      case 2:
                        if (!v.has('tools3_dev') || !(eT = (0, F.wR)(U))) return [3, 4];
                        return (eN = [e, I, t, eC, z, W]), [4, (0, F.qZ)(eT)];
                      case 3:
                        D.apply(void 0, eN.concat([o.sent(), h])), (o.label = 4);
                      case 4:
                        return [2];
                    }
                  });
                })),
                function (e) {
                  return f.apply(this, arguments);
                }
              );
            },
            [O, V, G, e]
          ),
          W = (0, k.useCallback)(
            ((f = (0, i._)(function (a) {
              var i, l, d, c, u, m, g, f, p, v, y, k, b, j, C, S, R, F, E, A, L, D, Z, B, z, O, V, G, H;
              return (0, o.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    for (
                      i = a.model,
                        l = a.completionType,
                        d = a.parentNodeId,
                        c = a.metadata,
                        m = void 0 === (u = a.focusOnNewCompletion) || u,
                        g = a.completionMetadata,
                        f = a.arkoseToken,
                        p = a.preflightTime,
                        v = a.extraStreamParams,
                        y = a.appendMessages,
                        _.E.publish({ kind: 'requestCompletion' }),
                        j = M.tQ.getTree(e),
                        M.tQ.retainThread(e),
                        C = ''.concat(T.Vh).concat(I, '-').concat(U.current++),
                        S = ''.concat(I, '-').concat(U.current),
                        M.tQ.updateTree(e, function (e) {
                          e.addNode(C, '', d, x.uU.Assistant);
                        }),
                        m && M.tQ.setThreadCurrentLeafId(e, C),
                        F = [],
                        E = j.getNodeByIdOrMessageId(d),
                        A = j.getNodeByIdOrMessageId(E.parentId);
                      null != A &&
                      ((null === (k = A.metadata) || void 0 === k
                        ? void 0
                        : k.isPlaceholderTemplateAssistantWelcomeMessage) === !0 ||
                        (null === (b = A.metadata) || void 0 === b ? void 0 : b.isClientCreatedSystemMessage) === !0);

                    ) {
                      var W,
                        $,
                        J = A.message;
                      F.unshift(J);
                      var Y = j.getNodeByIdOrMessageId(A.parentId);
                      (R =
                        null !== ($ = null === (W = Y.message) || void 0 === W ? void 0 : W.id) && void 0 !== $
                          ? $
                          : Y.id),
                        (A = Y);
                    }
                    return (
                      l === x.Os.Next || l === x.Os.Variant
                        ? ((D = j.getNodeByIdOrMessageId(E.parentId)),
                          null != R ||
                            (R =
                              null !== (Z = null === (L = D.message) || void 0 === L ? void 0 : L.id) && void 0 !== Z
                                ? Z
                                : D.id),
                          F.push(E.message),
                          y &&
                            ((B = d),
                            M.tQ.updateTree(e, function (e) {
                              var t = !0,
                                a = !1,
                                i = void 0;
                              try {
                                for (var n, s = y[Symbol.iterator](); !(t = (n = s.next()).done); t = !0) {
                                  var r = n.value;
                                  e.insertNodeBefore(C, { id: r.id, message: r, parentId: B, children: [] }),
                                    (B = r.id);
                                }
                              } catch (e) {
                                (a = !0), (i = e);
                              } finally {
                                try {
                                  t || null == s.return || s.return();
                                } finally {
                                  if (a) throw i;
                                }
                              }
                            }),
                            F.push.apply(F, (0, r._)(y))))
                        : null != R || (R = E.message.id),
                      void 0 === (z = M.tQ.getServerThreadId(e)) &&
                        (0, M.Zz)(e) &&
                        M.tQ.updateInitialThreadDataForNewThread(e, i, h),
                      (O = (0, s._)((0, n._)({}, v), {
                        model: i,
                        completionType: l,
                        threadId: z,
                        continueFromSharedConversationId: t,
                        historyDisabled: q,
                        parentMessageId: R,
                        messages: F,
                        arkoseToken: null != f ? f : null,
                        enabledPluginIds: h,
                        completionMetadata: g,
                      })),
                      (V = function (e, t) {
                        (0, P.F4)(S, t, e, p);
                      }),
                      (G = Q(i, l, C, c, S, v)),
                      [4, w.ZP.publicApiCompletionStream(O, G, V)]
                    );
                  case 1:
                    return (H = o.sent()), N.hx.addRequest(C, H), [2];
                }
              });
            })),
            function (e) {
              return f.apply(this, arguments);
            }),
            [I, e, t, h, Q, q]
          );
        return W;
      }
    },
    88887: function (e, t, a) {
      'use strict';
      a.d(t, {
        E: function () {
          return i;
        },
      });
      var i = new (a(4263).V)();
    },
    41402: function () {},
  },
]);
